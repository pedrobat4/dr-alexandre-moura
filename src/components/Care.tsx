import { ArrowRight, CheckCircle } from '@phosphor-icons/react'
import { whatsappLink } from '../config'
import consulta from '../assets/consulta.jpg'

const modes = [
  {
    title: 'Consulta presencial',
    desc: 'No consultório, em São Paulo, com avaliação completa e definição dos próximos passos junto com o Dr. Alexandre.',
    cta: 'Agendar presencial',
    msg: 'Olá! Gostaria de agendar uma consulta presencial com o Dr. Alexandre Moura.',
  },
  {
    title: 'Telemedicina',
    desc: 'Consulta por vídeo para orientação inicial e esclarecimento de dúvidas, de onde você estiver.',
    cta: 'Agendar telemedicina',
    msg: 'Olá! Tenho interesse em uma teleconsulta com o Dr. Alexandre Moura.',
  },
]

export function Care() {
  return (
    <section id="atendimento" className="bg-verde-medio text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-12 lg:gap-14 lg:px-8 lg:py-28">
        <div className="lg:col-span-7">
          <p className="reveal flex items-center gap-3 text-xs font-semibold tracking-[0.28em] text-cinza uppercase">
            <span className="h-px w-8 bg-cinza/50" />
            Como você prefere ser atendida
          </p>
          <h2 className="reveal mt-4 font-display text-3xl leading-snug font-medium text-balance md:text-4xl" style={{ transitionDelay: '0.08s' }}>
            Presencial em São Paulo ou <em className="text-cinza italic">por telemedicina</em>
          </h2>

          <div className="mt-9 space-y-7">
            {modes.map((m, i) => (
              <div key={m.title} className="reveal flex gap-4" style={{ transitionDelay: `${0.1 * i}s` }}>
                <CheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-cinza" weight="fill" />
                <div>
                  <h3 className="text-lg font-semibold">{m.title}</h3>
                  <p className="mt-1 max-w-lg text-sm leading-relaxed font-light text-white/75">{m.desc}</p>
                  <a
                    href={whatsappLink(m.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-3 inline-flex items-center gap-2 text-sm font-semibold text-cinza transition-colors hover:text-white"
                  >
                    {m.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal mx-auto w-full max-w-md lg:col-span-5" style={{ transitionDelay: '0.15s' }}>
          <img
            src={consulta}
            alt="Dr. Alexandre Moura em consulta no consultório"
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
