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
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? 'border-b border-graphite/10 bg-porcelain/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8">
        {/* TROCAR: substituir o wordmark pelo logotipo enviado pelo cliente */}
        <a href="#inicio" className="font-display text-base font-semibold tracking-tight">
          Alexandre Moura
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-light text-smoke transition-colors hover:text-graphite"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden bg-terra px-5 py-2 text-sm font-medium text-white transition-all hover:bg-terra-deep active:scale-[0.98] lg:block"
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
          <span className={`h-px w-6 bg-graphite transition-transform ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
          <span className={`h-px w-6 bg-graphite transition-transform ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
        </button>
      </div>

      {open && (
        <nav className="border-b border-graphite/10 bg-porcelain px-5 pt-2 pb-6 lg:hidden" aria-label="Menu">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-light text-smoke"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block bg-terra px-5 py-3 text-center text-sm font-medium text-white"
          >
            Agendar avaliação
          </a>
        </nav>
      )}
    </header>
  )
}
