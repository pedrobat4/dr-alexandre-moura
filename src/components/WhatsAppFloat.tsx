import { InstagramLogo, WhatsappLogo } from '@phosphor-icons/react'
import { whatsappLink, INSTAGRAM_URL } from '../config'

/**
 * Botões flutuantes circulares por convenção universal
 * (exceção documentada ao sistema de cantos da página).
 */
export function WhatsAppFloat() {
  return (
    <>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Seguir no Instagram"
        className="fixed right-5 bottom-[5.5rem] z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-110 active:scale-95 lg:right-8 lg:bottom-[6.25rem]"
        style={{
          background:
            'radial-gradient(circle at 30% 110%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285aeb 90%)',
        }}
      >
        <InstagramLogo className="h-7 w-7" />
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="whats-pulse fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95 lg:right-8 lg:bottom-8"
      >
        <WhatsappLogo className="h-7 w-7" weight="fill" />
      </a>
    </>
  )
}
