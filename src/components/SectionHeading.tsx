type Props = {
  kicker: string
  title: string
  titleEm?: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ kicker, title, titleEm, description, align = 'left' }: Props) {
  const centered = align === 'center'
  return (
    <div className={`mb-14 max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}>
      <p className={`reveal mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-gold-deep ${centered ? 'justify-center' : ''}`}>
        {!centered && <span className="hairline w-10" />}
        {kicker}
        {centered && <span className="hairline w-10" />}
      </p>
      <h2 className="reveal font-display text-4xl leading-[1.1] font-light md:text-5xl" style={{ transitionDelay: '0.1s' }}>
        {title} {titleEm && <em className="font-normal text-gold-deep">{titleEm}</em>}
      </h2>
      {description && (
        <p className="reveal mt-5 text-base font-light leading-relaxed text-stone" style={{ transitionDelay: '0.2s' }}>
          {description}
        </p>
      )}
    </div>
  )
}
