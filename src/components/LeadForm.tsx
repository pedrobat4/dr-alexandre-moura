import { useState } from 'react'
import type { FormEvent } from 'react'
import { EMAIL, PHONE_DISPLAY, INSTAGRAM_URL, INSTAGRAM_HANDLE, whatsappLink } from '../config'
import { procedures } from './Procedures'
import { ArrowIcon, InstagramIcon, WhatsAppIcon } from './Icons'
import { ArchPortrait } from './ArchPortrait'
import familia from '../assets/familia.jpg'

const inputClass =
  'w-full border border-ink/15 bg-ivory-light px-4 py-3.5 text-sm font-light text-ink placeholder:text-stone/60 outline-none transition-colors focus:border-gold-deep'

export function LeadForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [procedure, setProcedure] = useState('')
  const [mode, setMode] = useState('Presencial')
  const [message, setMessage] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const lines = [
      `Olá! Me chamo ${name} e vim pelo site do Dr. Alexandre Moura.`,
      procedure && `Tenho interesse em: ${procedure}.`,
      `Prefiro atendimento: ${mode.toLowerCase()}.`,
      phone && `Meu contato: ${phone}.`,
      message && `Mensagem: ${message}`,
    ].filter(Boolean)
    window.open(whatsappLink(lines.join('\n')), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contato" className="mx-auto max-w-6xl px-5 py-24 lg:px-8 lg:py-32">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="reveal mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-gold-deep">
            <span className="hairline w-10" />
            Agende sua avaliação
          </p>
          <h2 className="reveal font-display text-4xl leading-[1.1] font-light md:text-5xl" style={{ transitionDelay: '0.1s' }}>
            O primeiro passo começa
            <em className="font-normal text-gold-deep"> com uma conversa</em>
          </h2>
          <p className="reveal mt-6 text-base font-light leading-relaxed text-stone" style={{ transitionDelay: '0.2s' }}>
            Preencha o formulário e a nossa equipe entrará em contato pelo WhatsApp
            para agendar sua consulta — presencial ou por telemedicina.
          </p>

          <div className="reveal mt-10" style={{ transitionDelay: '0.22s' }}>
            <ArchPortrait
              src={familia}
              alt="Dr. Alexandre Moura com a família"
              className="aspect-[4/5] w-full max-w-[260px]"
            />
          </div>

          <div className="reveal mt-10 space-y-5 border-t border-ink/10 pt-8" style={{ transitionDelay: '0.25s' }}>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-ink transition-colors hover:text-gold-deep"
            >
              <WhatsAppIcon className="h-5 w-5 text-gold-deep" />
              <span className="text-sm tracking-wide">{PHONE_DISPLAY}</span>
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-ink transition-colors hover:text-gold-deep"
            >
              <InstagramIcon className="h-5 w-5 text-gold-deep" />
              <span className="text-sm tracking-wide">@{INSTAGRAM_HANDLE}</span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-4 text-ink transition-colors hover:text-gold-deep"
            >
              <span className="font-display text-xl leading-none text-gold-deep">@</span>
              <span className="text-sm tracking-wide">{EMAIL}</span>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="reveal space-y-5 border border-ink/10 bg-ivory-deep/40 p-8 lg:p-10" style={{ transitionDelay: '0.2s' }}>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-stone">Nome completo *</span>
              <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome" className={inputClass} />
            </label>
            <label className="block">
              <span className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-stone">WhatsApp *</span>
              <input
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(11) 90000-0000"
                className={inputClass}
              />
            </label>
          </div>

          <label className="block">
            <span className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-stone">Procedimento de interesse</span>
            <select value={procedure} onChange={(e) => setProcedure(e.target.value)} className={inputClass}>
              <option value="">Selecione (opcional)</option>
              {procedures.map((p) => (
                <option key={p.short} value={p.short}>
                  {p.short}
                </option>
              ))}
              <option value="Ainda não sei — quero uma avaliação">Ainda não sei — quero uma avaliação</option>
            </select>
          </label>

          <fieldset>
            <legend className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-stone">Preferência de atendimento</legend>
            <div className="grid grid-cols-2 gap-3">
              {['Presencial', 'Telemedicina'].map((m) => (
                <label
                  key={m}
                  className={`cursor-pointer border px-4 py-3 text-center text-sm font-light transition-colors ${
                    mode === m ? 'border-gold-deep bg-ink text-ivory' : 'border-ink/15 bg-ivory-light text-ink hover:border-gold-deep'
                  }`}
                >
                  <input
                    type="radio"
                    name="mode"
                    value={m}
                    checked={mode === m}
                    onChange={() => setMode(m)}
                    className="sr-only"
                  />
                  {m}
                </label>
              ))}
            </div>
          </fieldset>

          <label className="block">
            <span className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-stone">Mensagem</span>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Conte brevemente o que você busca…"
              className={`${inputClass} resize-none`}
            />
          </label>

          <button
            type="submit"
            className="group flex w-full items-center justify-center gap-3 bg-ink px-8 py-4 text-[12px] uppercase tracking-[0.24em] text-ivory transition-colors hover:bg-gold-deep"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Enviar pelo WhatsApp
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <p className="text-center text-[11px] font-light text-stone">
            Ao enviar, você será direcionada ao WhatsApp da equipe com a sua mensagem pronta.
          </p>
        </form>
      </div>
    </section>
  )
}
