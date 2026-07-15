import { ArrowRight, Person, Heartbeat, Drop } from '@phosphor-icons/react'
import { whatsappLink } from '../config'

type Procedure = { name: string; short: string }

export const groups = [
  {
    title: 'Corpo',
    icon: Person,
    desc: 'Contorno corporal com técnica e segurança.',
    items: [
      { name: 'Lipoaspiração, lipoescultura e lipoenxertia', short: 'Lipoaspiração / Lipoescultura' },
      { name: 'Abdominoplastia', short: 'Abdominoplastia' },
      { name: 'Correção de ginecomastia', short: 'Ginecomastia' },
    ] as Procedure[],
  },
  {
    title: 'Mamas',
    icon: Heartbeat,
    desc: 'Aumento, elevação ou redução, conforme avaliação.',
    items: [
      { name: 'Mamoplastia de aumento', short: 'Mamoplastia de aumento' },
      { name: 'Mastopexia com ou sem próteses', short: 'Mastopexia' },
      { name: 'Mamoplastia redutora', short: 'Mamoplastia redutora' },
    ] as Procedure[],
  },
  {
    title: 'Face e injetáveis',
    icon: Drop,
    desc: 'Procedimentos faciais e minimamente invasivos.',
    items: [
      { name: 'Blefaroplastia (pálpebras)', short: 'Blefaroplastia (pálpebras)' },
      { name: 'Otoplastia (orelhas)', short: 'Otoplastia (orelhas)' },
      { name: 'Botox, preenchimento e bioestimulador de colágeno', short: 'Procedimentos injetáveis' },
    ] as Procedure[],
  },
]

export const procedures = groups.flatMap((g) => g.items)

export function Procedures() {
  return (
    <section id="procedimentos" className="bg-marfim">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.28em] text-verde-medio uppercase">
            <span className="h-px w-8 bg-verde-medio/50" />
            Procedimentos
            <span className="h-px w-8 bg-verde-medio/50" />
          </p>
          <h2 className="reveal mt-4 font-display text-3xl leading-snug font-medium text-balance md:text-4xl" style={{ transitionDelay: '0.08s' }}>
            O que o Dr. Alexandre <em className="italic">realiza</em>
          </h2>
          <p className="reveal mt-4 text-base leading-relaxed font-light text-neblina" style={{ transitionDelay: '0.14s' }}>
            Toque em um procedimento para falar sobre ele direto no WhatsApp.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {groups.map((g, gi) => (
            <div
              key={g.title}
              className="reveal flex flex-col rounded-2xl border border-cinza/60 bg-white p-7 shadow-[0_10px_36px_rgba(9,37,38,0.06)]"
              style={{ transitionDelay: `${gi * 0.1}s` }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-verde/5 text-verde-medio">
                <g.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-medium">{g.title}</h3>
              <p className="mt-1.5 text-sm font-light text-neblina">{g.desc}</p>

              <ul className="mt-5 flex-1 divide-y divide-cinza/40">
                {g.items.map((p) => (
                  <li key={p.name}>
                    <a
                      href={whatsappLink(`Olá! Gostaria de saber mais sobre ${p.name} com o Dr. Alexandre Moura.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-3 py-3.5 text-sm font-medium text-verde transition-colors hover:text-verde-medio"
                    >
                      {p.name}
                      <ArrowRight className="h-4 w-4 shrink-0 text-cinza transition-all group-hover:translate-x-1 group-hover:text-verde-medio" />
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href={whatsappLink(`Olá! Gostaria de uma avaliação sobre procedimentos de ${g.title.toLowerCase()} com o Dr. Alexandre Moura.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-verde-medio transition-colors hover:text-verde"
              >
                Falar sobre {g.title.toLowerCase()}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <p className="reveal mx-auto mt-10 max-w-xl text-center text-xs leading-relaxed font-light text-neblina/80">
          A indicação de qualquer procedimento depende de avaliação médica
          individual. Resultados variam de pessoa para pessoa.
        </p>
      </div>
    </section>
  )
}
