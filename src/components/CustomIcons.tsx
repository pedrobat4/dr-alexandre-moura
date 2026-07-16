/**
 * Ícones desenhados sob medida a pedido do cliente (não existem em bibliotecas):
 * desenho de mamas e desenho de face, em line-art no mesmo peso dos ícones Phosphor.
 */

type IconProps = { className?: string }

export function BreastIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      {/* colo */}
      <path d="M11 4c1.2 3.2.6 5.4-1.6 7.4M21 4c-1.2 3.2-.6 5.4 1.6 7.4" />
      {/* mamas */}
      <circle cx="10.5" cy="19.5" r="6.2" />
      <circle cx="21.5" cy="19.5" r="6.2" />
      <circle cx="10.5" cy="21" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="21.5" cy="21" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function FaceIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* perfil: testa, nariz, lábios e queixo */}
      <path d="M20.5 3.5c-6.5-1-11 3.2-11 8.5 0 1.8-.5 3-1.6 4.6l1.8.8c0 1.2-.2 2 .4 2.6.5.5 1.3.4 1.4 1.3.2 1.4-.6 2.8 1.2 3.2 1.2.3 2.6 0 3.3 1.6" />
      {/* cabelo */}
      <path d="M20.5 3.5c4.5 1.3 6.3 5.5 5.8 9.6-.4 3.4.2 6.3 1.2 9" />
      {/* sobrancelha e olho */}
      <path d="M12.5 12.2c1-.8 2.3-.8 3.2-.2" />
      <path d="M13 14.4c.7-.4 1.5-.4 2.1 0" />
    </svg>
  )
}
