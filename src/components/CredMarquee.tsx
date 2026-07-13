const items = [
  'Membro Especialista pela SBCP',
  'Atendimento presencial e telemedicina',
  'Mama · Abdome · Lipo e mais',
  'São Paulo – SP',
  'Excelência em cada detalhe',
]

export function CredMarquee() {
  const row = [...items, ...items]
  return (
    <div className="overflow-hidden border-y border-ink/10 bg-ink py-4">
      <div className="marquee-track flex w-max items-center gap-10">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span className="text-[12px] uppercase tracking-[0.3em] text-ivory/85">{item}</span>
            <span className="font-display text-gold-light">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
