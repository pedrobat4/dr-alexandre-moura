import { useEffect, useState } from 'react'
import { whatsappLink } from '../config'

const links = [
  { href: '#procedimentos', label: 'Procedimentos' },
  { href: '#sobre', label: 'Quem somos' },
  { href: '#atendimento', label: 'Atendimento' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sentinel = document.getElementById('top-sentinel')
    if (!sentinel) return
    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting))
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_2px_16px_rgba(9,37,38,0.08)]' : ''
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8">
        {/* TROCAR: substituir o lockup pelo logotipo enviado pelo cliente */}
        <a href="#inicio" className="leading-tight">
          <span className="block font-display text-lg font-semibold">Dr. Alexandre Moura</span>
          <span className="block text-[10px] font-medium tracking-[0.3em] text-neblina uppercase">
            Cirurgia Plástica
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-verde-medio transition-colors hover:text-verde"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-verde px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-verde-medio active:scale-[0.98] lg:block"
        >
          Agendar avaliação
        </a>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 p-2 lg:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          <span className={`h-0.5 w-6 rounded bg-verde transition-transform ${open ? 'translate-y-[4px] rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 rounded bg-verde transition-transform ${open ? '-translate-y-[4px] -rotate-45' : ''}`} />
        </button>
      </div>

      {open && (
        <nav className="border-t border-cinza/60 bg-white px-5 pt-2 pb-6 lg:hidden" aria-label="Menu">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-medium text-verde-medio"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block rounded-full bg-verde px-6 py-3 text-center text-sm font-semibold text-white"
          >
            Agendar avaliação
          </a>
        </nav>
      )}
    </header>
  )
}
