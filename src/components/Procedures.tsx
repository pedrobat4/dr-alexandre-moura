import { useState } from 'react'
import { ArrowRight } from '@phosphor-icons/react'
import { whatsappLink } from '../config'

type Procedure = { name: string; short: string; desc: string }

export const groups: { title: string; items: Procedure[] }[] = [
  {
    title: 'Corpo',
    items: [
      {
        name: 'Lipoaspiração, lipoescultura e lipoenxertia',
        short: 'Lipoaspiração / Lipoescultura',
        desc: 'Remodelagem do contorno corporal com remoção de gordura localizada e, quando indicado, enxertia.',
      },
      {
        name: 'Abdominoplastia',
        short: 'Abdominoplastia',
        desc: 'Remoção do excesso de pele e flacidez abdominal, com reposicionamento da musculatura quando necessário.',
      },
      {
        name: 'Correção de ginecomastia',
        short: 'Ginecomastia',
        desc: 'Tratamento cirúrgico do aumento das glândulas mamárias no homem.',
      },
    ],
  },
  {
    title: 'Mamas',
    items: [
      {
        name: 'Mamoplastia de aumento',
        short: 'Mamoplastia de aumento',
        desc: 'Aumento das mamas com próteses de silicone, com escolha de tamanho e perfil planejada caso a caso.',
      },
      {
        name: 'Mastopexia com ou sem próteses',
        short: 'Mastopexia',
        desc: 'Elevação e remodelagem das mamas, com ou sem a inclusão de próteses, conforme avaliação.',
      },
      {
        name: 'Mamoplastia redutora',
        short: 'Mamoplastia redutora',
        desc: 'Redução do volume das mamas com remodelagem do contorno mamário.',
      },
    ],
  },
  {
    title: 'Face e injetáveis',
    items: [
      {
        name: 'Blefaroplastia',
        short: 'Blefaroplastia (pálpebras)',
        desc: 'Correção cirúrgica do excesso de pele e das bolsas nas pálpebras.',
      },
      {
        name: 'Otoplastia',
        short: 'Otoplastia (orelhas)',
        desc: 'Correção cirúrgica do formato e da posição das orelhas.',
      },
      {
        name: 'Botox, preenchimento e bioestimulador de colágeno',
        short: 'Procedimentos injetáveis',
        desc: 'Tratamentos minimamente invasivos para linhas, volumes e estímulo de colágeno.',
      },
    ],
  },
]

export const procedures = groups.flatMap((g) => g.items)

export function Procedures() {
  const [active, setActive] = useState(0)
  const group = groups[active]

  return (
    <section id="procedimentos" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-24 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="reveal font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
              Procedimentos realizados
            </h2>
            <p className="reveal mt-4 max-w-sm text-base font-light leading-relaxed text-smoke" style={{ transitionDelay: '0.1s' }}>
              Escolha uma área e toque em um procedimento para falar sobre ele
              no WhatsApp.
            </p>

            <div className="reveal mt-8 flex flex-wrap gap-2 lg:flex-col lg:items-start" role="tablist" aria-label="Áreas de atuação" style={{ transitionDelay: '0.15s' }}>
              {groups.map((g, i) => (
                <button
                  key={g.title}
                  type="button"
                  role="tab"
                  aria-selected={active === i}
                  onClick={() => setActive(i)}
                  className={`px-5 py-2.5 text-sm transition-colors ${
                    active === i
                      ? 'bg-terra font-medium text-white'
                      : 'border border-graphite/15 font-light text-smoke hover:border-terra hover:text-terra'
                  }`}
                >
                  {g.title}
                </button>
              ))}
            </div>
          </div>

          <ul className="lg:col-span-8" role="tabpanel">
            {group.items.map((p, i) => (
              <li key={p.name}>
                <a
                  href={whatsappLink(`Olá! Gostaria de saber mais sobre ${p.name} com o Dr. Alexandre Moura.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-between gap-6 py-7 transition-transform hover:translate-x-2 ${
                    i > 0 ? 'border-t border-graphite/10' : ''
                  }`}
                >
                  <div className="flex items-baseline gap-5">
                    <span className="text-sm font-light text-smoke/60" style={{ fontVariantNumeric: 'tabular-nums' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <span className="font-display text-2xl font-medium tracking-tight text-balance transition-colors group-hover:text-terra md:text-3xl">
                        {p.name}
                      </span>
                      <p className="mt-2 max-w-xl text-sm font-light leading-relaxed text-smoke">{p.desc}</p>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 shrink-0 text-terra opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="reveal mt-12 max-w-xl text-xs font-light leading-relaxed text-smoke/70">
          A indicação de qualquer procedimento depende de avaliação médica
          individual. Resultados variam de pessoa para pessoa.
        </p>
      </div>
    </section>
  )
}
