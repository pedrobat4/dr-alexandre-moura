import { CRM, EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL, PHONE_DISPLAY, whatsappLink } from '../config'

export function Footer() {
  return (
    <footer className="border-t border-bone/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-6">
          <p className="font-display text-lg font-semibold tracking-tight">Alexandre Moura</p>
          <p className="mt-1 text-sm font-light text-mist">Cirurgião plástico</p>
          <p className="mt-1 text-sm font-light text-mist">{CRM}</p>
        </div>
        <div className="space-y-1.5 text-sm font-light text-mist lg:col-span-6 lg:text-right">
          <p>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-bone">
              {PHONE_DISPLAY}
            </a>
          </p>
          <p>
            <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-bone">
              {EMAIL}
            </a>
          </p>
          <p>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-bone">
              @{INSTAGRAM_HANDLE}
            </a>
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-6xl border-t border-bone/10 px-5 py-6 lg:px-8">
        <p className="max-w-2xl text-xs font-light leading-relaxed text-mist/70">
          Este site tem caráter informativo e não substitui a consulta médica. A
          indicação de procedimentos depende de avaliação individual. Resultados
          variam de pessoa para pessoa.
        </p>
        <p className="mt-3 text-xs font-light text-mist/50">
          © {new Date().getFullYear()} Dr. Alexandre Moura. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
