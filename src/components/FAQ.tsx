'use client'

import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

interface FaqItem {
  question: string
  answer: string
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Hvilke behandlinger tilbyr dere på Muskelklinikken?',
    answer: 'Vi tilbyr et helhetlig spekter av tverrfaglige helsetjenester. Dette inkluderer fysikalsk behandling (osteopati, fysioterapi og manuellterapi), avansert ultralyddiagnostikk, trykkbølgebehandling (ESWT), ultralydveiledet PRP-injeksjonsterapi i samarbeid med lege, samt 1-til-1 personlig trening og bedriftshelseavtaler.',
  },
  {
    question: 'Kan jeg benytte privat helseforsikring hos dere?',
    answer: 'Ja, absolutt. Vi samarbeider med de fleste store forsikringsselskaper i Norge, inkludert Storebrand, Gjensidige, If Forsikring, Vertikal Helse, Falck Helse, Fremtind og Euro Accident. Har du helseforsikring, kan du få behandlingen helt eller delvis dekket uten egenandel eller lang ventetid.',
  },
  {
    question: 'Trenger jeg henvisning fra fastlege for å få time?',
    answer: 'Nei, du trenger ingen legehenvisning for å bestille time hos oss. Du kan bestille time direkte via vår online booking på nettsiden eller ringe oss på telefon 919 07 760.',
  },
  {
    question: 'Hva skjer på en førstegangskonsultasjon?',
    answer: 'En førstegangskonsultasjon varer vanligvis i 45–60 minutter. Vi gjennomfører en grundig samtale (anamnese), grundig funksjonstesting og ved behov en ultralydundersøkelse av det smertefulle området. Deretter starter vi tilpasset behandling og setter opp en strukturert tiltaksplan.',
  },
  {
    question: 'Hva er fordelene med ultralyddiagnostikk?',
    answer: 'Ultralyd gjør det mulig å se sener, leddbånd, muskler og slimposer i sanntid mens leddet beveger seg. Dette gir en langt mer dynamisk og presis vurdering enn statiske bilder, og gjør at vi kan oppdage betennelser, rifter eller forkalkninger umiddelbart.',
  },
  {
    question: 'Hvor i Oslo ligger klinikken?',
    answer: 'Muskelklinikken ligger i Dronningens gate 15 i Oslo sentrum. Det er kun 2 minutters gangavstand fra Oslo S og Jernbanetorget, med umiddelbar tilgang til alle t-baner, tog, trikker og busser.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx))
  }

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal className="section-head-center">
          <span className="section-tag-cyan">Vanlige Spørsmål</span>
          <h2 className="section-title-large">
            Ofte stilte spørsmål — <em className="accent-serif">alt du lurer på</em>
          </h2>
          <p className="section-desc-center">
            Finner du ikke svaret du leter etter? Ta gjerne kontakt med oss direkte på telefon eller e-post.
          </p>
        </ScrollReveal>

        {/* FAQ Accordion List */}
        <div className="faq-accordion-wrap">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <ScrollReveal key={idx} delay={idx * 60}>
                <div className={`faq-accordion-item ${isOpen ? 'is-open' : ''}`}>
                  <button
                    className="faq-trigger"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{item.question}</span>
                    <div className="faq-icon-circle">
                      <svg
                        className={`faq-chevron ${isOpen ? 'is-rotated' : ''}`}
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </div>
                  </button>

                  <div className={`faq-content-panel ${isOpen ? 'is-expanded' : ''}`}>
                    <div className="faq-answer-inner">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
