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
  return (
    <section id="procedimentos" className="mx-auto max-w-6xl px-5 py-24 lg:px-8 lg:py-28">
      <h2 className="reveal max-w-2xl font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
        Procedimentos realizados
      </h2>
      <p className="reveal mt-4 max-w-xl text-base font-light leading-relaxed text-mist" style={{ transitionDelay: '0.1s' }}>
        A indicação certa nasce da avaliação. Toque em um procedimento para
        falar sobre ele no WhatsApp.
      </p>

      <div className="mt-16 space-y-16">
        {groups.map((group) => (
          <div key={group.title} className="reveal grid gap-6 lg:grid-cols-12">
            <h3 className="font-display text-lg font-light text-tan lg:col-span-3">{group.title}</h3>
            <ul className="lg:col-span-9">
              {group.items.map((p) => (
                <li key={p.name}>
                  <a
                    href={whatsappLink(`Olá! Gostaria de saber mais sobre ${p.name} com o Dr. Alexandre Moura.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-baseline justify-between gap-6 py-5 transition-transform hover:translate-x-2"
                  >
                    <div>
                      <span className="font-display text-2xl font-medium tracking-tight text-balance transition-colors group-hover:text-tan md:text-3xl">
                        {p.name}
                      </span>
                      <p className="mt-1.5 max-w-xl text-sm font-light leading-relaxed text-mist">{p.desc}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 shrink-0 self-center text-mist opacity-0 transition-opacity group-hover:text-tan group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="reveal mt-14 max-w-xl text-xs font-light leading-relaxed text-mist/70">
        A indicação de qualquer procedimento depende de avaliação médica
        individual. Resultados variam de pessoa para pessoa.
      </p>
    </section>
  )
}
