import { CRM, EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL, PHONE_DISPLAY, SLOGAN, whatsappLink } from '../config'
import { InstagramIcon, WhatsAppIcon } from './Icons'

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ivory-deep/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 py-14 text-center lg:px-8">
        <div>
          <p className="font-display text-2xl font-medium tracking-[0.18em] uppercase">Alexandre Moura</p>
          <p className="mt-1.5 text-[10px] uppercase tracking-[0.42em] text-gold-deep">Cirurgião Plástico</p>
          <p className="mt-3 font-display text-base italic text-stone">"{SLOGAN}"</p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:border-gold-deep hover:text-gold-deep"
          >
            <WhatsAppIcon />
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:border-gold-deep hover:text-gold-deep"
          >
            <InstagramIcon />
          </a>
        </div>

        <div className="space-y-1 text-xs font-light tracking-wide text-stone">
          <p>
            {PHONE_DISPLAY} · {EMAIL} · @{INSTAGRAM_HANDLE}
          </p>
          <p>{CRM}</p>
        </div>

        <p className="max-w-xl text-[11px] font-light leading-relaxed text-stone/80">
          Este site tem caráter informativo e não substitui a consulta médica. A indicação de
          procedimentos depende de avaliação individual. Resultados variam de pessoa para pessoa.
        </p>

        <p className="text-[11px] tracking-[0.14em] text-stone/60">
          © {new Date().getFullYear()} Dr. Alexandre Moura. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
