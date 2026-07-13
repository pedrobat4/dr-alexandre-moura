import { whatsappLink } from '../config'
import { ArrowIcon } from './Icons'
import { SectionHeading } from './SectionHeading'

export const procedures = [
  {
    name: 'Lipoaspiração · Lipoescultura · Lipoenxertia',
    short: 'Lipoaspiração / Lipoescultura',
    desc: 'Remodelagem do contorno corporal com remoção de gordura localizada e, quando indicado, enxertia para harmonizar curvas.',
  },
  {
    name: 'Mastopexia com ou sem próteses',
    short: 'Mastopexia',
    desc: 'Elevação e remodelagem das mamas, com ou sem a inclusão de próteses, conforme avaliação.',
  },
  {
    name: 'Mamoplastia de aumento',
    short: 'Mamoplastia de aumento',
    desc: 'Aumento das mamas com próteses de silicone, com escolha de tamanho e perfil planejada caso a caso.',
  },
  {
    name: 'Mamoplastia redutora',
    short: 'Mamoplastia redutora',
    desc: 'Redução do volume das mamas com remodelagem do contorno mamário.',
  },
  {
    name: 'Abdominoplastia',
    short: 'Abdominoplastia',
    desc: 'Remoção do excesso de pele e flacidez abdominal, com reposicionamento da musculatura quando necessário.',
  },
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
    name: 'Correção de ginecomastia',
    short: 'Ginecomastia',
    desc: 'Tratamento cirúrgico do aumento das glândulas mamárias no homem.',
  },
  {
    name: 'Botox · Preenchimento · Bioestimulador de colágeno',
    short: 'Procedimentos injetáveis',
    desc: 'Tratamentos minimamente invasivos para suavizar linhas, repor volumes e estimular o colágeno da pele.',
  },
]

export function Procedures() {
  return (
    <section id="procedimentos" className="mx-auto max-w-6xl px-5 py-24 lg:px-8 lg:py-32">
      <SectionHeading
        kicker="Procedimentos realizados"
        title="Cirurgias e tratamentos"
        titleEm="sob medida"
        description="Cada indicação nasce de uma avaliação criteriosa. O procedimento certo é aquele que respeita a sua anatomia, a sua saúde e as suas expectativas."
      />

      <div className="grid gap-px overflow-hidden border border-ink/10 bg-ink/10 md:grid-cols-2 lg:grid-cols-3">
        {procedures.map((p, i) => (
          <a
            key={p.name}
            href={whatsappLink(`Olá! Gostaria de saber mais sobre ${p.name} com o Dr. Alexandre Moura.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="group reveal relative bg-ivory-light p-8 transition-colors duration-300 hover:bg-ink"
            style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
          >
            <span className="font-display text-sm tracking-[0.2em] text-gold-deep transition-colors group-hover:text-gold-light">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-4 font-display text-2xl leading-snug font-medium transition-colors group-hover:text-ivory">
              {p.name}
            </h3>
            <p className="mt-3 text-sm font-light leading-relaxed text-stone transition-colors group-hover:text-ivory/70">
              {p.desc}
            </p>
            <span className="mt-6 flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-gold-deep opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-gold-light">
              Falar sobre este procedimento <ArrowIcon className="h-3.5 w-3.5" />
            </span>
          </a>
        ))}
      </div>

      <p className="reveal mt-6 text-xs font-light text-stone">
        * A indicação de qualquer procedimento depende de avaliação médica individual. Resultados variam de pessoa para pessoa.
      </p>
    </section>
  )
}
