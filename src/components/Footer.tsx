import { CRM, EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL, PHONE_DISPLAY, whatsappLink } from '../config'

const nav = [
  { href: '#procedimentos', label: 'Procedimentos' },
  { href: '#sobre', label: 'Quem somos' },
  { href: '#atendimento', label: 'Atendimento' },
  { href: '#contato', label: 'Agendar avaliação' },
]

export function Footer() {
  return (
    <footer className="bg-verde text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-xl font-semibold">Dr. Alexandre Moura</p>
          <p className="mt-1 text-[10px] font-medium tracking-[0.3em] text-cinza uppercase">
            Cirurgia Plástica
          </p>
          <p className="mt-4 text-sm font-light text-white/70">{CRM}</p>
          <p className="text-sm font-light text-white/70">São Paulo, SP</p>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.24em] text-cinza uppercase">Navegação</p>
          <ul className="mt-4 space-y-2.5">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-sm font-light text-white/80 transition-colors hover:text-white">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.24em] text-cinza uppercase">Contato</p>
          <ul className="mt-4 space-y-2.5 text-sm font-light">
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-white/80 transition-colors hover:text-white">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="text-white/80 transition-colors hover:text-white">
                {EMAIL}
              </a>
            </li>
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-white/80 transition-colors hover:text-white">
                @{INSTAGRAM_HANDLE}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-6 lg:px-8">
          <p className="max-w-2xl text-xs leading-relaxed font-light text-white/50">
            Este site tem caráter informativo e não substitui a consulta médica.
            A indicação de procedimentos depende de avaliação individual.
            Resultados variam de pessoa para pessoa.
          </p>
          <p className="mt-3 text-xs font-light text-white/40">
            © {new Date().getFullYear()} Dr. Alexandre Moura. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
