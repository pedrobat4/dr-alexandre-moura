import { WhatsappLogo } from '@phosphor-icons/react'
import { whatsappLink } from '../config'

/**
 * Botão flutuante circular por convenção universal do WhatsApp
 * (exceção documentada ao sistema de cantos retos da página).
 */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="whats-pulse fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95 lg:right-8 lg:bottom-8"
    >
      <WhatsappLogo className="h-7 w-7" weight="fill" />
    </a>
  )
}
