// TROCAR: preencher com depoimentos reais enviados pelo cliente
// (com autorização das pacientes). Placeholder proposital, sem citação inventada.

export function Testimonials() {
  return (
    <section id="depoimentos" className="mx-auto max-w-6xl px-5 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <blockquote className="reveal">
          <p className="font-display text-3xl leading-snug font-light tracking-tight text-balance text-graphite/80 md:text-4xl">
            "Espaço reservado para o depoimento real de uma paciente, publicado
            com a autorização dela."
          </p>
          <footer className="mt-8 text-sm font-light text-smoke">
            <span className="font-medium text-graphite">[Nome da paciente]</span>
            <br />
            [Procedimento realizado]
          </footer>
        </blockquote>
        <p className="reveal mt-10 text-xs font-light text-smoke/70" style={{ transitionDelay: '0.1s' }}>
          Experiências individuais variam de pessoa para pessoa.
        </p>
      </div>
    </section>
  )
}
