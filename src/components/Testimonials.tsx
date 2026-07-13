// TROCAR: preencher com os depoimentos reais enviados pelo cliente (com autorização das pacientes).
// Placeholders propositalmente neutros — nada de citações inventadas.
const testimonials = [
  {
    name: '[Nome da paciente]',
    procedure: '[Procedimento realizado]',
    text: 'Espaço reservado para o depoimento real de uma paciente, enviado e autorizado pelo cliente.',
  },
  {
    name: '[Nome da paciente]',
    procedure: '[Procedimento realizado]',
    text: 'Espaço reservado para o depoimento real de uma paciente, enviado e autorizado pelo cliente.',
  },
  {
    name: '[Nome da paciente]',
    procedure: '[Procedimento realizado]',
    text: 'Espaço reservado para o depoimento real de uma paciente, enviado e autorizado pelo cliente.',
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-ink text-ivory">
      <div className="mx-auto max-w-6xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="mb-14 max-w-2xl">
          <p className="reveal mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-gold-light">
            <span className="h-px w-10 bg-gold-light/60" />
            Depoimentos
          </p>
          <h2 className="reveal font-display text-4xl leading-[1.1] font-light md:text-5xl" style={{ transitionDelay: '0.1s' }}>
            A confiança de quem já
            <em className="font-normal text-gold-light"> viveu essa experiência</em>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="reveal flex flex-col border border-ivory/15 p-9"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <span className="font-display text-5xl leading-none text-gold-light">“</span>
              <blockquote className="mt-3 flex-1 text-sm font-light leading-relaxed text-ivory/85">
                {t.text}
              </blockquote>
              <figcaption className="mt-7 border-t border-ivory/15 pt-5">
                <p className="font-display text-lg font-medium">{t.name}</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-[0.2em] text-gold-light/80">
                  {t.procedure}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="reveal mt-8 text-xs font-light text-ivory/50">
          Experiências individuais variam de pessoa para pessoa.
        </p>
      </div>
    </section>
  )
}
