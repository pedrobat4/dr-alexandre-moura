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
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-ivory/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div
        className={`mx-auto grid max-w-6xl grid-cols-[1fr_auto] items-center px-5 transition-all duration-500 lg:grid-cols-[1fr_auto_1fr] lg:px-8 ${
          scrolled ? 'py-3.5' : 'py-6'
        }`}
      >
        {/* TROCAR: substituir o lockup de texto pelo logotipo enviado pelo cliente */}
        <a href="#inicio" className="justify-self-start font-display text-lg font-medium tracking-[0.22em] uppercase">
          Alexandre&nbsp;Moura
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[12px] font-light tracking-[0.16em] text-ink-soft/80 transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="group hidden items-center gap-2 justify-self-end text-[12px] tracking-[0.16em] text-ink lg:flex"
        >
          Agendar avaliação
          <span className="hairline w-6 transition-all duration-300 group-hover:w-9" />
        </a>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 justify-self-end p-2 lg:hidden"
          aria-label="Abrir menu"
        >
          <span className={`h-px w-6 bg-ink transition-transform ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
          <span className={`h-px w-6 bg-ink transition-transform ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
        </button>
      </div>

      <div
        className={`mx-auto h-px max-w-6xl bg-ink/10 transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}
      />

      {open && (
        <nav className="flex flex-col gap-1 bg-ivory/95 px-5 pt-4 pb-8 backdrop-blur-md lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-sm font-light tracking-[0.16em] text-ink-soft"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center gap-3 text-sm tracking-[0.16em] text-ink"
          >
            Agendar avaliação <span className="hairline w-8" />
          </a>
        </nav>
      )}
    </header>
  )
}
