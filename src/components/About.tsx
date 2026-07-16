import { Certificate, MapPin, VideoCamera } from '@phosphor-icons/react'
import { CRM } from '../config'
import cirurgiaTouca from '../assets/cirurgia-touca.jpg'

const pontos = [
  {
    icon: Certificate,
    title: 'Membro especialista pela SBCP',
    desc: 'Título de especialista concedido pela Sociedade Brasileira de Cirurgia Plástica.',
  },
  {
    icon: MapPin,
    title: 'Atendimento em São Paulo',
    desc: 'Consultas presenciais no consultório, com avaliação completa e plano individualizado.',
  },
  {
    icon: VideoCamera,
    title: 'Telemedicina',
    desc: 'Primeira orientação por vídeo para quem está em outra cidade ou prefere começar a distância.',
  },
]

export function About() {
  return (
    <section id="sobre" className="bg-claro">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-12 lg:gap-14 lg:px-8 lg:py-28">
        <div className="reveal mx-auto w-full max-w-md lg:col-span-5">
          <img
            src={cirurgiaTouca}
            alt="Dr. Alexandre Moura em cirurgia, com touca personalizada"
            className="aspect-[4/5] w-full rounded-2xl object-cover object-[center_18%] shadow-[0_24px_60px_rgba(9,37,38,0.18)]"
            loading="lazy"
          />
        </div>

        <div className="lg:col-span-7">
          <p className="reveal flex items-center gap-3 text-xs font-semibold tracking-[0.28em] text-verde-medio uppercase">
            <span className="h-px w-8 bg-verde-medio/50" />
            Quem é o Dr. Alexandre
          </p>
          <h2 className="reveal mt-4 font-display text-3xl leading-snug font-medium text-balance md:text-4xl" style={{ transitionDelay: '0.08s' }}>
            Cirurgia séria, conduzida com <em className="italic">critério e cuidado</em>.
          </h2>
          <p className="reveal mt-3 text-sm font-medium text-neblina" style={{ transitionDelay: '0.12s' }}>
            {CRM}
          </p>
          <p className="reveal mt-5 max-w-xl text-base leading-relaxed font-light text-neblina" style={{ transitionDelay: '0.16s' }}>
            Membro especialista pela Sociedade Brasileira de Cirurgia Plástica
            (SBCP), o Dr. Alexandre Moura atende em São Paulo com consultas
            presenciais e por telemedicina. Sua atuação cobre cirurgias de
            mama, abdome, lipoaspiração, procedimentos faciais e injetáveis.
          </p>

          <ul className="mt-9 space-y-6">
            {pontos.map((p, i) => (
              <li key={p.title} className="reveal flex gap-4" style={{ transitionDelay: `${0.1 * i}s` }}>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-verde/5 text-verde-medio">
                  <p.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold">{p.title}</h3>
                  <p className="mt-1 max-w-lg text-sm leading-relaxed font-light text-neblina">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
