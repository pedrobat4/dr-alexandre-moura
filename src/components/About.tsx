import { ArrowRight } from '@phosphor-icons/react'
import { whatsappLink, CRM } from '../config'
import casalEditorial from '../assets/casal-editorial.jpg'

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-5 py-24 lg:px-8 lg:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-12">
        <div className="reveal lg:col-span-5">
          <img
            src={casalEditorial}
            alt="Dr. Alexandre Moura em retrato editorial"
            className="aspect-[3/4] w-full object-cover"
            loading="lazy"
          />
        </div>

        <div
          className="reveal bg-white p-8 shadow-[0_24px_60px_-32px_rgba(30,34,38,0.25)] lg:col-span-7 lg:-ml-20 lg:p-14"
          style={{ transitionDelay: '0.12s' }}
        >
          <h2 className="font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
            Dr. Alexandre Moura
          </h2>
          <p className="mt-3 text-sm font-light text-terra">{CRM}</p>

          <p className="mt-7 max-w-lg text-base font-light leading-relaxed text-smoke">
            Membro especialista pela Sociedade Brasileira de Cirurgia Plástica
            (SBCP), o Dr. Alexandre Moura atende em São Paulo, com consultas
            presenciais e por telemedicina. Sua atuação cobre cirurgias de mama,
            abdome, lipoaspiração, procedimentos faciais e injetáveis, guiada
            pelo princípio que dá nome a esta página: excelência em cada
            detalhe.
          </p>

          <dl className="mt-10 grid max-w-lg grid-cols-2 gap-x-8 gap-y-6 border-t border-graphite/10 pt-8">
            <div>
              <dt className="text-xs font-light tracking-[0.16em] text-smoke uppercase">Título</dt>
              <dd className="mt-1.5 font-display text-lg font-medium">Especialista SBCP</dd>
            </div>
            <div>
              <dt className="text-xs font-light tracking-[0.16em] text-smoke uppercase">Onde atende</dt>
              <dd className="mt-1.5 font-display text-lg font-medium">São Paulo e online</dd>
            </div>
          </dl>

          <a
            href={whatsappLink('Olá! Gostaria de conhecer melhor o trabalho do Dr. Alexandre Moura.')}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-terra transition-colors hover:text-graphite"
          >
            Conversar com a equipe
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
