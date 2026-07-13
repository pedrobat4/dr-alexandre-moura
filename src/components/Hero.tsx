import { ArrowRight, InstagramLogo } from '@phosphor-icons/react'
import { whatsappLink, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../config'
import drClinica from '../assets/dr-clinica.jpg'

export function Hero() {
  return (
    <section id="inicio" className="relative">
      <span id="top-sentinel" aria-hidden="true" className="absolute top-0 h-px w-px" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pt-24 pb-16 lg:min-h-[100dvh] lg:grid-cols-12 lg:gap-6 lg:px-8 lg:pb-24">
        <div className="lg:col-span-7">
          <p className="reveal text-xs font-light tracking-[0.2em] text-smoke uppercase">
            Cirurgião plástico · Membro especialista SBCP
          </p>
          <h1
            className="reveal mt-6 font-display text-5xl leading-[0.95] font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl"
            style={{ transitionDelay: '0.08s' }}
          >
            Excelência em <span className="font-light text-terra">cada detalhe.</span>
          </h1>
          <p
            className="reveal mt-7 max-w-md text-base font-light leading-relaxed text-smoke"
            style={{ transitionDelay: '0.16s' }}
          >
            Cirurgia plástica com o Dr. Alexandre Moura. Atendimento presencial
            em São Paulo e por telemedicina.
          </p>
          <div className="reveal mt-9 flex flex-wrap items-center gap-6" style={{ transitionDelay: '0.24s' }}>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-terra px-7 py-4 text-sm font-medium text-white transition-all hover:bg-terra-deep active:scale-[0.98]"
            >
              Agendar avaliação
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-light text-smoke transition-colors hover:text-graphite"
            >
              <InstagramLogo className="h-5 w-5" />
              @{INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>

        <div className="reveal relative lg:col-span-5" style={{ transitionDelay: '0.12s' }}>
          <img
            src={drClinica}
            alt="Dr. Alexandre Moura, cirurgião plástico, em sua clínica"
            className="aspect-[4/5] w-full object-cover"
            fetchPriority="high"
          />
          <div
            className="absolute -bottom-4 left-4 -z-10 hidden h-full w-full border border-terra/30 lg:block"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}
