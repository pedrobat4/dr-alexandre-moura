import { ArrowRight, Person } from '@phosphor-icons/react'
import { whatsappLink } from '../config'
import { BreastIcon, FaceIcon } from './CustomIcons'

type Procedure = { name: string; short: string }

export const groups = [
  {
    title: 'Corpo',
    icon: Person,
    desc: 'Contorno corporal com técnica e segurança.',
    items: [
      { name: 'Lipoaspiração, lipoescultura e lipoenxertia', short: 'Lipoaspiração / Lipoescultura' },
      { name: 'Abdominoplastia', short: 'Abdominoplastia' },
      { name: 'Braquioplastia (braços)', short: 'Braquioplastia (braços)' },
      { name: 'Cruroplastia (coxas)', short: 'Cruroplastia (coxas)' },
      { name: 'Correção de ginecomastia', short: 'Ginecomastia' },
    ] as Procedure[],
  },
  {
    title: 'Mamas',
    icon: BreastIcon,
    desc: 'Aumento, elevação ou redução, conforme avaliação.',
    items: [
      { name: 'Mamoplastia de aumento', short: 'Mamoplastia de aumento' },
      { name: 'Mastopexia com ou sem próteses', short: 'Mastopexia' },
      { name: 'Mamoplastia redutora', short: 'Mamoplastia redutora' },
    ] as Procedure[],
  },
  {
    title: 'Face e injetáveis',
    icon: FaceIcon,
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
    <section id="procedimentos" className="relative bg-marfim">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid items-end gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="reveal flex items-center gap-3 text-xs font-semibold tracking-[0.28em] text-verde-medio uppercase">
              <span className="h-px w-8 bg-verde-medio/50" />
              Procedimentos
            </p>
            <h2 className="reveal mt-4 font-display text-3xl leading-snug font-medium text-balance md:text-4xl" style={{ transitionDelay: '0.08s' }}>
              O que o Dr. Alexandre <em className="italic">realiza</em>
            </h2>
            <p className="reveal mt-4 max-w-xl text-base leading-relaxed font-light text-neblina" style={{ transitionDelay: '0.14s' }}>
              Áreas de atuação. Toque em um procedimento para falar sobre ele
              direto no WhatsApp.
            </p>
          </div>
          <div className="reveal hidden lg:col-span-4 lg:flex lg:justify-end" style={{ transitionDelay: '0.18s' }}>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-verde-medio transition-colors hover:text-verde"
            >
              Não sabe por onde começar? Fale com a equipe
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {groups.map((g, gi) => (
            <div
              key={g.title}
              className="reveal group/card flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_36px_rgba(9,37,38,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_56px_rgba(9,37,38,0.16)]"
              style={{ transitionDelay: `${gi * 0.1}s` }}
            >
              {/* tampa verde com identidade da marca */}
              <div className="relative overflow-hidden bg-verde px-7 py-6 text-white">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0"
                  style={{ background: 'radial-gradient(ellipse 80% 120% at 90% -20%, rgba(54,70,69,0.9), transparent 65%)' }}
                />
                <div className="relative flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-cinza">
                    <g.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-medium">{g.title}</h3>
                    <p className="mt-0.5 text-xs font-light text-white/70">{g.desc}</p>
                  </div>
                </div>
              </div>

              <ul className="flex-1 px-4 py-3">
                {g.items.map((p) => (
                  <li key={p.name}>
                    <a
                      href={whatsappLink(`Olá! Gostaria de saber mais sobre ${p.name} com o Dr. Alexandre Moura.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-3 rounded-lg px-3 py-3.5 text-sm font-medium text-verde transition-colors hover:bg-verde/5 hover:text-verde-medio"
                    >
                      {p.name}
                      <ArrowRight className="h-4 w-4 shrink-0 text-cinza transition-all group-hover:translate-x-1 group-hover:text-verde-medio" />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="px-7 pb-7">
                <a
                  href={whatsappLink(`Olá! Gostaria de uma avaliação sobre procedimentos de ${g.title.toLowerCase()} com o Dr. Alexandre Moura.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-verde/20 py-3 text-sm font-semibold text-verde transition-colors hover:border-verde hover:bg-verde hover:text-white"
                >
                  Falar sobre {g.title.toLowerCase()}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
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
