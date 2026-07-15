import { ArrowRight, CheckCircle, Sparkle } from '@phosphor-icons/react'
import { whatsappLink } from '../config'
import heroRetrato from '../assets/hero-retrato.jpg'

const badges = ['Membro Especialista SBCP', 'CRM-SP 242921 · RQE 146402', 'Presencial e telemedicina']

export function Hero() {
  return (
    <section id="inicio" className="relative bg-verde pt-16 text-white">
      <span id="top-sentinel" aria-hidden="true" className="absolute top-0 h-px w-px" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-24">
        <div className="lg:col-span-7">
          <p className="reveal text-xs font-semibold tracking-[0.28em] text-cinza uppercase">
            Cirurgia plástica
          </p>
          <h1
            className="reveal mt-5 font-display text-4xl leading-[1.12] font-medium text-balance md:text-5xl lg:text-[3.4rem]"
            style={{ transitionDelay: '0.08s' }}
          >
            Cirurgia plástica com <em className="text-cinza italic">excelência</em> em
            cada detalhe.
          </h1>
          <p
            className="reveal mt-6 max-w-xl text-base leading-relaxed font-light text-white/75"
            style={{ transitionDelay: '0.16s' }}
          >
            Com o Dr. Alexandre Moura, membro especialista pela Sociedade
            Brasileira de Cirurgia Plástica. Atendimento presencial em São
            Paulo e por telemedicina.
          </p>

          <ul className="reveal mt-7 flex flex-wrap gap-2.5" style={{ transitionDelay: '0.22s' }}>
            {badges.map((b) => (
              <li
                key={b}
                className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/90"
              >
                <CheckCircle className="h-4 w-4 text-cinza" weight="fill" />
                {b}
              </li>
            ))}
          </ul>

          <div className="reveal mt-9 flex flex-wrap items-center gap-4" style={{ transitionDelay: '0.28s' }}>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-full bg-cinza px-8 py-4 text-sm font-semibold text-verde transition-all hover:bg-white active:scale-[0.98]"
            >
              Agendar minha avaliação
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#procedimentos"
              className="rounded-full border border-white/30 px-8 py-4 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Ver procedimentos
            </a>
          </div>
        </div>

        <div className="reveal relative mx-auto w-full max-w-sm lg:col-span-5" style={{ transitionDelay: '0.15s' }}>
          <div className="rounded-2xl bg-white/10 p-2.5">
            <img
              src={heroRetrato}
              alt="Dr. Alexandre Moura, cirurgião plástico"
              className="aspect-[4/5] w-full rounded-xl object-cover"
              fetchPriority="high"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 max-w-[230px] rounded-xl bg-white p-4 shadow-[0_16px_40px_rgba(9,37,38,0.35)] lg:-left-10">
            <p className="flex items-center gap-2 text-sm font-semibold text-verde">
              <Sparkle className="h-4 w-4 text-verde-medio" weight="fill" />
              Excelência em cada detalhe
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-neblina">
              Avaliação e plano individualizados para cada paciente.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
