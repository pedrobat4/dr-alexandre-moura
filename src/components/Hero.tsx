import { ArrowRight, Certificate, CheckCircle, Sparkle } from '@phosphor-icons/react'
import { whatsappLink } from '../config'
import heroRetrato from '../assets/hero-retrato.jpg'

const badges = ['CRM-SP 242921 · RQE 146402', 'Presencial e telemedicina']

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-verde pt-16 text-white">
      <span id="top-sentinel" aria-hidden="true" className="absolute top-0 h-px w-px" />

      {/* atmosfera: brilho suave atrás da foto e vinheta inferior */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 65% at 78% 30%, rgba(54,70,69,0.85), transparent 70%), radial-gradient(ellipse 40% 40% at 10% 100%, rgba(54,70,69,0.5), transparent 70%)',
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-16 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-24">
        <div className="lg:col-span-7">
          <p className="reveal flex items-center gap-3 text-xs font-semibold tracking-[0.3em] text-cinza uppercase">
            <span className="h-px w-8 bg-cinza/50" />
            Cirurgia plástica · São Paulo
          </p>

          <h1 className="reveal mt-6 text-balance" style={{ transitionDelay: '0.08s' }}>
            <span className="block font-display text-3xl leading-tight font-medium text-white/90 md:text-4xl">
              Cirurgia plástica com
            </span>
            <span className="mt-1 block font-display text-5xl leading-[1.05] font-medium text-cinza italic md:text-6xl lg:text-[4.3rem]">
              excelência em
              <br />
              cada detalhe.
            </span>
          </h1>

          <p
            className="reveal mt-7 max-w-lg text-base leading-relaxed font-light text-white/75"
            style={{ transitionDelay: '0.16s' }}
          >
            Com o Dr. Alexandre Moura, membro especialista pela Sociedade
            Brasileira de Cirurgia Plástica.
          </p>

          <ul className="reveal mt-6 flex flex-wrap gap-2.5" style={{ transitionDelay: '0.22s' }}>
            {badges.map((b) => (
              <li
                key={b}
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm"
              >
                <CheckCircle className="h-4 w-4 text-cinza" weight="fill" />
                {b}
              </li>
            ))}
          </ul>

          <div className="reveal mt-10 flex flex-wrap items-center gap-4" style={{ transitionDelay: '0.28s' }}>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-full bg-cinza px-8 py-4 text-sm font-semibold text-verde shadow-[0_12px_32px_rgba(0,0,0,0.3)] transition-all hover:bg-white active:scale-[0.98]"
            >
              Agendar minha avaliação
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#procedimentos"
              className="rounded-full border border-white/25 px-8 py-4 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Ver procedimentos
            </a>
          </div>
        </div>

        <div className="reveal relative mx-auto w-full max-w-sm lg:col-span-5" style={{ transitionDelay: '0.15s' }}>
          {/* anel decorativo atrás do card */}
          <div
            aria-hidden="true"
            className="absolute -top-10 -right-10 h-56 w-56 rounded-full border border-white/10 lg:-right-16"
          />
          <div
            aria-hidden="true"
            className="absolute -top-4 -right-4 h-28 w-28 rounded-full border border-white/10 lg:-right-8"
          />

          <div className="relative rounded-2xl bg-white/10 p-2.5 backdrop-blur-sm">
            <img
              src={heroRetrato}
              alt="Dr. Alexandre Moura, cirurgião plástico"
              className="aspect-[4/5] w-full rounded-xl object-cover"
              fetchPriority="high"
            />

            {/* selo SBCP */}
            <div className="absolute -top-4 right-5 flex items-center gap-2 rounded-full bg-white py-2 pr-4 pl-2 shadow-[0_10px_28px_rgba(0,0,0,0.3)]">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-verde text-white">
                <Certificate className="h-4 w-4" weight="fill" />
              </span>
              <span className="text-xs leading-tight font-semibold text-verde">
                Membro Especialista
                <br />
                <span className="font-medium text-neblina">pela SBCP</span>
              </span>
            </div>
          </div>

          <div className="absolute -bottom-7 -left-4 max-w-[240px] rounded-xl bg-white p-4 shadow-[0_16px_40px_rgba(0,0,0,0.35)] lg:-left-10">
            <p className="flex items-center gap-2 text-sm font-semibold text-verde">
              <Sparkle className="h-4 w-4 text-verde-medio" weight="fill" />
              Plano individualizado
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-neblina">
              Avaliação dedicada e acompanhamento em cada etapa.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
