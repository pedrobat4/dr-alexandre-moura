/**
 * Configuração central do site: todos os contatos e textos-chave em um lugar só.
 * Dados conforme briefing e bio do Instagram do cliente.
 */

export const WHATSAPP_NUMBER = '5511978193832'

export const INSTAGRAM_HANDLE = 'alexandremoura.plastica'
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`

export const EMAIL = 'alexandremoura.plastica@gmail.com'

export const PHONE_DISPLAY = '(11) 97819-3832'

export function whatsappLink(message?: string): string {
  const text =
    message ??
    'Olá! Vim pelo site do Dr. Alexandre Moura e gostaria de agendar uma avaliação.'
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

export const DOCTOR_NAME = 'Dr. Alexandre Moura'
export const SLOGAN = 'Excelência em cada detalhe'
export const CITY = 'São Paulo - SP'

// Da bio do Instagram do cliente
export const CRM = 'CRM-SP 242921 · RQE 146402'
