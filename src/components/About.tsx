import { whatsappLink, CRM } from '../config'
import { ArchPortrait } from './ArchPortrait'
import { ArrowIcon, WhatsAppIcon } from './Icons'
import casalEditorial from '../assets/casal-editorial.jpg'

const pillars = [
  {
    title: 'Especialista pela SBCP',
    desc: 'Cirurgião plástico com título de especialista pela Sociedade Brasileira de Cirurgia Plástica.',
  },
  {
    title: 'Mama · Abdome · Lipo e mais',
    desc: 'Mamoplastias, mastopexia, abdominoplastia, lipoaspiração, blefaroplastia, otoplastia, ginecomastia e procedimentos injetáveis.',
  },
  {
    title: 'Presencial e telemedicina',
    desc: 'Consultas no consultório em São Paulo ou a distância, conforme a sua preferência.',
  },
]

export function About() {
  return (
    <section id="sobre" className="bg-ivory-deep/50">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-8 lg:py-32">
        <div className="reveal relative mx-auto w-full max-w-sm lg:max-w-none">
          <ArchPortrait
            src={casalEditorial}
            alt="Dr. Alexandre Moura em retrato editorial"
            className="aspect-[3/4] w-full"
          />
          <div className="absolute -right-4 -bottom-4 -z-10 h-full w-full rounded-t-full border border-gold/30" />
        </div>

        <div>
          <p className="reveal mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-gold-deep">
            <span className="hairline w-10" />
            Quem somos
          </p>
          <h2 className="reveal font-display text-4xl leading-[1.1] font-light md:text-5xl" style={{ transitionDelay: '0.1s' }}>
            Dr. Alexandre Moura,
            <br />
            <em className="font-normal text-gold-deep">cirurgião plástico</em>
          </h2>

          <p className="reveal mt-6 text-base font-light leading-relaxed text-stone" style={{ transitionDelay: '0.2s' }}>
            Membro especialista pela Sociedade Brasileira de Cirurgia Plástica (SBCP),
            o Dr. Alexandre Moura atende em São Paulo, com consultas presenciais e por
            telemedicina. Sua atuação é guiada pelo princípio que dá nome a esta página:
            excelência em cada detalhe.
          </p>

          <div className="mt-10 space-y-6">
            {pillars.map((p, i) => (
              <div key={p.title} className="reveal flex gap-5 border-t border-ink/10 pt-6" style={{ transitionDelay: `${0.1 * i}s` }}>
                <span className="font-display text-xl text-gold-deep">✦</span>
                <div>
                  <h3 className="font-display text-xl font-medium">{p.title}</h3>
                  <p className="mt-1.5 text-sm font-light leading-relaxed text-stone">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal mt-10 flex flex-wrap items-center gap-5" style={{ transitionDelay: '0.3s' }}>
            <a
              href={whatsappLink('Olá! Gostaria de conhecer melhor o trabalho do Dr. Alexandre Moura.')}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-ink px-7 py-3.5 text-[12px] uppercase tracking-[0.22em] text-ivory transition-colors hover:bg-gold-deep"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Conversar com a equipe
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <span className="text-xs tracking-[0.14em] text-stone">{CRM}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
