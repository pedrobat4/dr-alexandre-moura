import { useEffect } from 'react'

/**
 * Ativa .is-visible nos elementos .reveal ao entrarem na viewport.
 * Sob prefers-reduced-motion tudo fica visível de imediato (o CSS também neutraliza).
 */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12 },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
