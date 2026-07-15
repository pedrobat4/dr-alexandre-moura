import { useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowRight, EnvelopeSimple, InstagramLogo, WhatsappLogo } from '@phosphor-icons/react'
import { EMAIL, PHONE_DISPLAY, INSTAGRAM_URL, INSTAGRAM_HANDLE, whatsappLink } from '../config'
import { procedures } from './Procedures'
import corredor from '../assets/corredor.jpg'

const inputClass =
  'w-full rounded-lg border border-cinza bg-white px-4 py-3 text-sm text-verde placeholder:text-neblina/50 outline-none transition-colors focus:border-verde-medio'

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
    <section id="contato" className="bg-marfim">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-12 lg:gap-14 lg:px-8 lg:py-28">
        <div className="lg:col-span-5">
          <p className="reveal flex items-center gap-3 text-xs font-semibold tracking-[0.28em] text-verde-medio uppercase">
            <span className="h-px w-8 bg-verde-medio/50" />
            Agende sua avaliação
          </p>
          <h2 className="reveal mt-4 font-display text-3xl leading-snug font-medium text-balance md:text-4xl" style={{ transitionDelay: '0.08s' }}>
            O primeiro passo é <em className="italic">uma conversa</em>
          </h2>
          <p className="reveal mt-5 max-w-sm text-base leading-relaxed font-light text-neblina" style={{ transitionDelay: '0.14s' }}>
            Preencha o formulário e fale direto com a equipe pelo WhatsApp,
            para atendimento presencial ou por telemedicina.
          </p>

          <img
            src={corredor}
            alt="Dr. Alexandre Moura na clínica"
            className="reveal mt-9 aspect-[4/3] w-full max-w-sm rounded-2xl object-cover object-top shadow-[0_16px_44px_rgba(9,37,38,0.15)]"
            loading="lazy"
            style={{ transitionDelay: '0.18s' }}
          />

          <ul className="reveal mt-9 space-y-3.5" style={{ transitionDelay: '0.22s' }}>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-medium text-verde-medio transition-colors hover:text-verde"
              >
                <WhatsappLogo className="h-5 w-5" />
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-medium text-verde-medio transition-colors hover:text-verde"
              >
                <InstagramLogo className="h-5 w-5" />
                @{INSTAGRAM_HANDLE}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-sm font-medium text-verde-medio transition-colors hover:text-verde"
              >
                <EnvelopeSimple className="h-5 w-5" />
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="reveal h-fit space-y-5 rounded-2xl border border-cinza/60 bg-white p-7 shadow-[0_10px_36px_rgba(9,37,38,0.06)] lg:col-span-7 lg:p-10"
          style={{ transitionDelay: '0.12s' }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold tracking-wide text-verde-medio uppercase">
                Nome completo *
              </span>
              <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome" className={inputClass} />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold tracking-wide text-verde-medio uppercase">
                WhatsApp *
              </span>
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
            <span className="mb-1.5 block text-xs font-semibold tracking-wide text-verde-medio uppercase">
              Procedimento de interesse
            </span>
            <select value={procedure} onChange={(e) => setProcedure(e.target.value)} className={inputClass}>
              <option value="">Selecione (opcional)</option>
              {procedures.map((p) => (
                <option key={p.short} value={p.short}>
                  {p.short}
                </option>
              ))}
              <option value="Ainda não sei, quero uma avaliação">Ainda não sei, quero uma avaliação</option>
            </select>
          </label>

          <fieldset>
            <legend className="mb-2 block text-xs font-semibold tracking-wide text-verde-medio uppercase">
              Preferência de atendimento
            </legend>
            <div className="grid grid-cols-2 gap-3">
              {['Presencial', 'Telemedicina'].map((m) => (
                <label
                  key={m}
                  className={`cursor-pointer rounded-lg border px-4 py-3 text-center text-sm font-medium transition-colors ${
                    mode === m
                      ? 'border-verde bg-verde text-white'
                      : 'border-cinza bg-white text-verde-medio hover:border-verde-medio'
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
            <span className="mb-1.5 block text-xs font-semibold tracking-wide text-verde-medio uppercase">Mensagem</span>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Conte brevemente o que você busca"
              className={`${inputClass} resize-none`}
            />
          </label>

          <button
            type="submit"
            className="group flex w-full items-center justify-center gap-3 rounded-full bg-verde px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-verde-medio active:scale-[0.98]"
          >
            <WhatsappLogo className="h-5 w-5" />
            Enviar pelo WhatsApp
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <p className="text-center text-xs font-light text-neblina/80">
            Ao enviar, você será direcionada ao WhatsApp da equipe com a sua mensagem pronta.
          </p>
        </form>
      </div>
    </section>
  )
}
