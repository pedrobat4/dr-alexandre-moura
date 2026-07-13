import { whatsappLink } from '../config'
import { ArrowIcon } from './Icons'
import { SectionHeading } from './SectionHeading'

const modes = [
  {
    kicker: 'No consultório',
    title: 'Atendimento presencial',
    desc: 'Consulta no consultório, em São Paulo, para avaliação e definição dos próximos passos junto com o Dr. Alexandre.',
    bullets: ['Avaliação em consulta presencial', 'Esclarecimento de dúvidas', 'Agendamento pelo WhatsApp'],
    cta: 'Agendar consulta presencial',
    msg: 'Olá! Gostaria de agendar uma consulta presencial com o Dr. Alexandre Moura.',
  },
  {
    kicker: 'De onde você estiver',
    title: 'Telemedicina',
    desc: 'Para quem prefere começar a distância: consulta por vídeo para orientação inicial e esclarecimento de dúvidas, de onde você estiver.',
    bullets: ['Consulta por vídeo', 'Esclarecimento de dúvidas', 'Agendamento pelo WhatsApp'],
    cta: 'Agendar teleconsulta',
    msg: 'Olá! Tenho interesse em uma teleconsulta com o Dr. Alexandre Moura.',
  },
]

export function Care() {
  return (
    <section id="atendimento" className="mx-auto max-w-6xl px-5 py-24 lg:px-8 lg:py-32">
      <SectionHeading
        align="center"
        kicker="Como você prefere ser atendida"
        title="Presencial ou por"
        titleEm="telemedicina"
      />

      <div className="grid gap-8 md:grid-cols-2">
        {modes.map((m, i) => (
          <div
            key={m.title}
            className="reveal group relative flex flex-col border border-ink/10 bg-ivory-light p-9 transition-shadow duration-300 hover:shadow-[0_24px_60px_-24px_rgba(26,21,18,0.25)] lg:p-12"
            style={{ transitionDelay: `${i * 0.12}s` }}
          >
            <div className="absolute top-0 left-9 h-px w-14 bg-gold group-hover:w-24 lg:left-12" style={{ transition: 'width .4s' }} />
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold-deep">{m.kicker}</p>
            <h3 className="mt-4 font-display text-3xl font-medium">{m.title}</h3>
            <p className="mt-4 text-sm font-light leading-relaxed text-stone">{m.desc}</p>
            <ul className="mt-6 flex-1 space-y-2.5">
              {m.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm font-light text-ink-soft">
                  <span className="mt-0.5 text-gold-deep">✦</span>
                  {b}
                </li>
              ))}
            </ul>
            <a
              href={whatsappLink(m.msg)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-ink underline-offset-8 transition-colors hover:text-gold-deep hover:underline"
            >
              {m.cta} <ArrowIcon className="h-4 w-4" />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
