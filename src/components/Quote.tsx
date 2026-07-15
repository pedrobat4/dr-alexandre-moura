import { SLOGAN } from '../config'
import quotePb from '../assets/quote-pb.jpg'

export function Quote() {
  return (
    <section className="relative overflow-hidden bg-verde">
      <img
        src={quotePb}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[center_30%] opacity-25 grayscale"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-verde via-verde/60 to-verde" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-5 py-20 text-center lg:py-28">
        <p className="reveal font-display text-3xl leading-snug font-medium text-balance text-white md:text-4xl">
          "{SLOGAN.split(' ')[0]} <em className="text-cinza italic">{SLOGAN.split(' ').slice(1).join(' ')}</em>."
        </p>
        <p className="reveal mt-6 text-sm font-medium tracking-[0.2em] text-white/60 uppercase" style={{ transitionDelay: '0.1s' }}>
          Dr. Alexandre Moura · Cirurgião Plástico
        </p>
      </div>
    </section>
  )
}
