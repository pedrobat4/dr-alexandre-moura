type Props = {
  src?: string
  alt: string
  className?: string
}

/**
 * Moldura em arco — motivo visual da marca, ecoando os nichos arqueados da clínica.
 * Sem `src`, exibe um placeholder elegante com o monograma (TROCAR pelas fotos reais).
 */
export function ArchPortrait({ src, alt, className = '' }: Props) {
  return (
    <div
      className={`relative overflow-hidden rounded-t-full border border-gold/40 ${className}`}
      style={{
        background: src
          ? undefined
          : 'linear-gradient(180deg,#efe6d4 0%,#e2d2b5 55%,#cdb488 100%)',
      }}
    >
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-8 text-center">
          <span className="font-display text-6xl font-light tracking-[0.2em] text-gold-deep/70">
            AM
          </span>
          <span className="hairline w-10" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-gold-deep/60">
            Foto do Dr. Alexandre
          </span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 rounded-t-full ring-1 ring-inset ring-ink/5" />
    </div>
  )
}
