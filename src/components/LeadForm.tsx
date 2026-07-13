import { useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowRight, EnvelopeSimple, InstagramLogo, WhatsappLogo } from '@phosphor-icons/react'
import { EMAIL, PHONE_DISPLAY, INSTAGRAM_URL, INSTAGRAM_HANDLE, whatsappLink } from '../config'
import { procedures } from './Procedures'
import familia from '../assets/familia.jpg'

const inputClass =
  'w-full border-b border-bone/20 bg-transparent px-0 py-3 text-base font-light text-bone placeholder:text-mist/50 outline-none transition-colors focus:border-tan'

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
    <section id="contato" className="bg-night-soft">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:py-28">
        <div className="lg:col-span-5">
          <h2 className="reveal font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
            Agende sua avaliação
          </h2>
          <p className="reveal mt-5 max-w-sm text-base font-light leading-relaxed text-mist" style={{ transitionDelay: '0.1s' }}>
            Preencha o formulário e fale direto com a equipe pelo WhatsApp,
            para atendimento presencial ou por telemedicina.
          </p>

          <img
            src={familia}
            alt="Dr. Alexandre Moura com a família"
            className="reveal mt-10 aspect-[4/5] w-52 object-cover"
            loading="lazy"
            style={{ transitionDelay: '0.15s' }}
          />

          <ul className="reveal mt-10 space-y-4" style={{ transitionDelay: '0.2s' }}>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-light text-mist transition-colors hover:text-bone"
              >
                <WhatsappLogo className="h-5 w-5 text-tan" />
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-light text-mist transition-colors hover:text-bone"
              >
                <InstagramLogo className="h-5 w-5 text-tan" />
                @{INSTAGRAM_HANDLE}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-sm font-light text-mist transition-colors hover:text-bone"
              >
                <EnvelopeSimple className="h-5 w-5 text-tan" />
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="reveal space-y-8 lg:col-span-7 lg:pl-10" style={{ transitionDelay: '0.12s' }}>
          <div className="grid gap-8 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1 block text-xs font-light tracking-[0.14em] text-mist uppercase">
                Nome completo *
              </span>
              <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome" className={inputClass} />
            </label>
            <label className="block">
              <span className="mb-1 block text-xs font-light tracking-[0.14em] text-mist uppercase">WhatsApp *</span>
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
            <span className="mb-1 block text-xs font-light tracking-[0.14em] text-mist uppercase">
              Procedimento de interesse
            </span>
            <select
              value={procedure}
              onChange={(e) => setProcedure(e.target.value)}
              className={`${inputClass} appearance-none [&>option]:bg-night`}
            >
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
            <legend className="mb-3 block text-xs font-light tracking-[0.14em] text-mist uppercase">
              Preferência de atendimento
            </legend>
            <div className="grid grid-cols-2 gap-3">
              {['Presencial', 'Telemedicina'].map((m) => (
                <label
                  key={m}
                  className={`cursor-pointer border px-4 py-3 text-center text-sm font-light transition-colors ${
                    mode === m
                      ? 'border-tan bg-tan font-medium text-night'
                      : 'border-bone/20 text-mist hover:border-tan hover:text-bone'
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
            <span className="mb-1 block text-xs font-light tracking-[0.14em] text-mist uppercase">Mensagem</span>
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
            className="group flex w-full items-center justify-center gap-3 bg-tan px-8 py-4 text-sm font-medium text-night transition-all hover:bg-tan-deep active:scale-[0.98] sm:w-auto"
          >
            <WhatsappLogo className="h-5 w-5" />
            Enviar pelo WhatsApp
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <p className="text-xs font-light text-mist/70">
            Ao enviar, você será direcionada ao WhatsApp da equipe com a sua mensagem pronta.
          </p>
        </form>
      </div>
    </section>
  )
}
