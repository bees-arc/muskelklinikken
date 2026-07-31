'use client'

import { useState, useCallback } from 'react'
import ScrollReveal from './ScrollReveal'

interface FaqItem {
  question: string
  answer: string[]
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Hvilke behandlinger tilbyr dere på Muskelklinikken?',
    answer: [
      'Vi tilbyr et bredt spekter av helsetjenester tilpasset dine behov.',
      'Dette inkluderer fysikalsk behandling (fysioterapi), trykkbølgebehandling, ultralyddiagnostikk, personlig trening (PT), bedriftstrening og lifestyle coaching.',
      'Vårt tverrfaglige team samarbeider tett for å gi deg best mulig oppfølging på veien mot en smertefri hverdag.',
    ],
  },
  {
    question: 'Kan jeg bruke helseforsikringen min hos dere?',
    answer: [
      'Ja, det kan du helt utmerket gjøre.',
      'Vi samarbeider tett med de fleste store forsikringsselskapene i Norge, inkludert If, Storebrand, Gjensidige, Vertikal Helse og Falck Helse.',
      'Har du helseforsikring, kan du få behandlingen helt eller delvis dekket uten ventetid. Vennligst kontakt ditt forsikringsselskap på forhånd for å få et skadenummer/godkjenning før din første time.',
    ],
  },
  {
    question: 'Trenger jeg henvisning fra lege for å få time?',
    answer: [
      'Nei, du trenger ingen henvisning fra lege for å bestille time hos oss.',
      'Uansett om du kommer som privatbetalende kunde, bedriftskunde eller via helseforsikring, kan du bestille time direkte på vår nettside via online booking eller ringe oss på telefon.',
    ],
  },
  {
    question: 'Hvor lang tid tar en behandlingstime?',
    answer: [
      'En førstegangsundersøkelse tar vanligvis mellom 45 og 60 minutter.',
      'Dette gir oss nok tid til en grundig kartlegging, undersøkelse av dine plager, og oppstart av de første tiltakene.',
      'Oppfølgende behandlinger varer vanligvis mellom 30 og 40 minutter avhengig av behandlingsform og dine behov.',
    ],
  },
  {
    question: 'Hvor holder Muskelklinikken til?',
    answer: [
      'Vi holder til i lyse og moderne lokaler i Dronningens gate 15, 0152 Oslo.',
      'Klinikken ligger i Oslo sentrum med svært enkel tilgang til kollektivtransport. Det tar kun få minutter å gå fra Jernbanetorget og Oslo Sentralstasjon.',
    ],
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = useCallback((i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i))
  }, [])

  return (
    <section className="faq-section" id="faq">
      <div className="container faq-container">
        <ScrollReveal className="section-intro">
          <span className="overline">Ofte stilte spørsmål</span>
          <h2 className="section-heading">Spørsmål og svar</h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="faq-list">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIndex === i
              return (
                <div key={i} className={`faq-item${isOpen ? ' open' : ''}`}>
                  <button
                    className="faq-q"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <span className="faq-icon" aria-hidden="true" />
                  </button>

                  <div
                    className="faq-a"
                    style={{ maxHeight: isOpen ? '600px' : '0px' }}
                  >
                    <div className="faq-a-inner">
                      {item.answer.map((para, j) => (
                        <p key={j}>{para}</p>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
