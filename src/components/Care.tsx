import { ArrowRight } from '@phosphor-icons/react'
import { whatsappLink } from '../config'

const modes = [
  {
    title: 'Presencial',
    desc: 'Consulta no consultório, em São Paulo, para avaliação completa e definição dos próximos passos com o Dr. Alexandre.',
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
    <section id="atendimento" className="border-y border-graphite/10">
      <div className="mx-auto grid max-w-6xl lg:grid-cols-2">
        {modes.map((m, i) => (
          <div
            key={m.title}
            className={`reveal px-5 py-16 lg:p-16 ${i === 1 ? 'border-t border-graphite/10 lg:border-t-0 lg:border-l' : ''}`}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <h3 className="font-display text-3xl font-bold tracking-tight md:text-4xl">{m.title}</h3>
            <p className="mt-4 max-w-sm text-base font-light leading-relaxed text-smoke">{m.desc}</p>
            <a
              href={whatsappLink(m.msg)}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-terra transition-colors hover:text-graphite"
            >
              {m.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
