// TROCAR: preencher com depoimentos reais enviados pelo cliente
// (com autorização das pacientes). Placeholder proposital, sem citação inventada.

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-claro">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.28em] text-verde-medio uppercase">
            <span className="h-px w-8 bg-verde-medio/50" />
            Depoimentos
            <span className="h-px w-8 bg-verde-medio/50" />
          </p>
          <h2 className="reveal mt-4 font-display text-3xl leading-snug font-medium text-balance md:text-4xl" style={{ transitionDelay: '0.08s' }}>
            A experiência de quem <em className="italic">já passou por aqui</em>
          </h2>
        </div>

        <figure className="reveal mx-auto mt-12 max-w-2xl rounded-2xl border border-cinza/60 bg-white p-9 text-center shadow-[0_10px_36px_rgba(9,37,38,0.06)]" style={{ transitionDelay: '0.12s' }}>
          <p className="font-display text-xl leading-relaxed font-medium text-balance text-verde-medio italic md:text-2xl">
            "Espaço reservado para o depoimento real de uma paciente, publicado
            com a autorização dela."
          </p>
          <figcaption className="mt-6">
            <p className="text-sm font-semibold">[Nome da paciente]</p>
            <p className="mt-0.5 text-xs font-light text-neblina">[Procedimento realizado]</p>
          </figcaption>
        </figure>

        <p className="reveal mx-auto mt-8 max-w-xl text-center text-xs font-light text-neblina/80">
          Experiências individuais variam de pessoa para pessoa.
        </p>
      </div>
    </section>
  )
}
