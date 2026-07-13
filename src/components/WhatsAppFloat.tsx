import { whatsappLink } from '../config'
import { WhatsAppIcon } from './Icons'

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="whats-pulse fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg transition-transform hover:scale-110 lg:right-8 lg:bottom-8"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}
