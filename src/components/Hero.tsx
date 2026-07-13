import { whatsappLink, INSTAGRAM_URL, INSTAGRAM_HANDLE, SLOGAN } from '../config'
import { ArchPortrait } from './ArchPortrait'
import { ArrowIcon, InstagramIcon, WhatsAppIcon } from './Icons'
import drClinica from '../assets/dr-clinica.jpg'

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* brilho dourado de fundo */}
      <div
        className="pointer-events-none absolute -top-40 right-[-20%] h-[560px] w-[560px] rounded-full opacity-50"
        style={{ background: 'radial-gradient(circle, rgba(176,141,87,0.22) 0%, transparent 65%)' }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:px-8">
        <div>
          <p className="reveal mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-gold-deep">
            <span className="hairline w-10" />
            Cirurgia Plástica · Membro Especialista SBCP
          </p>

          <h1 className="reveal font-display text-5xl leading-[1.05] font-light md:text-6xl lg:text-7xl" style={{ transitionDelay: '0.1s' }}>
            {SLOGAN.split(' ').slice(0, 2).join(' ')}
            <br />
            <em className="font-normal text-gold-deep">{SLOGAN.split(' ').slice(2).join(' ')}</em>
          </h1>

          <p className="reveal mt-7 max-w-xl text-lg font-light leading-relaxed text-stone" style={{ transitionDelay: '0.2s' }}>
            Cirurgia plástica com o Dr. Alexandre Moura, membro especialista pela
            Sociedade Brasileira de Cirurgia Plástica. Atendimento presencial em
            São Paulo e por telemedicina.
          </p>

          <div className="reveal mt-10 flex flex-wrap items-center gap-4" style={{ transitionDelay: '0.3s' }}>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-ink px-8 py-4 text-[12px] uppercase tracking-[0.22em] text-ivory transition-colors hover:bg-gold-deep"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Agendar minha avaliação
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 border border-ink/25 px-7 py-4 text-[12px] uppercase tracking-[0.22em] text-ink transition-colors hover:border-gold-deep hover:text-gold-deep"
            >
              <InstagramIcon className="h-4 w-4" />@{INSTAGRAM_HANDLE}
            </a>
          </div>

          <div className="reveal mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-ink/10 pt-7" style={{ transitionDelay: '0.4s' }}>
            {[
              ['SBCP', 'Membro Especialista'],
              ['Presencial', 'e Telemedicina'],
              ['São Paulo', 'Atendimento em SP'],
            ].map(([a, b]) => (
              <div key={a}>
                <p className="font-display text-2xl font-medium">{a}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-stone">{b}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal relative mx-auto w-full max-w-sm lg:max-w-none" style={{ transitionDelay: '0.25s' }}>
          <ArchPortrait
            src={drClinica}
            alt="Dr. Alexandre Moura, cirurgião plástico, em sua clínica"
            className="aspect-[3/4] w-full"
          />
          <div className="absolute -bottom-5 -left-5 hidden border border-gold/40 bg-ivory-light px-6 py-4 lg:block">
            <p className="font-display text-lg italic">"{SLOGAN}"</p>
          </div>
        </div>
      </div>
    </section>
  )
}
