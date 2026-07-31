'use client'

import { useEffect, useRef } from 'react'
import ScrollReveal from './ScrollReveal'

const CARDS = [
  {
    id: 'card-1',
    bg: '/images/service_pt.webp',
    label: 'VÅRE PT PAKKER',
    title: 'Personlig trening',
    desc: 'Velkommen til våre skreddersydde PT-pakker på Muskelklinikken! Vi tilbyr en helhetlig tilnærming til personlig trening, uansett hvilke mål du har. Enten du er en ambisiøs toppidrettsutøver eller en travel person med en hektisk hverdag – vi har en PT-pakke som passer for deg.',
    bookUrl: 'https://psno-patient-platform-fe.svc.pasientsky.no/embedded/planner/booking?serviceProviderId=fb9771b2-5459-11e9-89e4-96d3108deae4',
  },
  {
    id: 'card-2',
    bg: '/images/service_physical.webp',
    label: 'VÅRE BEHANDLINGER',
    title: 'Fysikalsk behandling',
    desc: 'Vi er stolte av å være eksperter innen vårt felt. Våre terapeuter underviser internasjonalt og holder seg kontinuerlig oppdatert. Vårt team har bred utdanning innen fysioterapi, osteopati, manuellterapi og sertifisert idrett og rehabiliteringsspesialister.',
    bookUrl: 'https://psno-patient-platform-fe.svc.pasientsky.no/embedded/planner/booking?serviceProviderId=fb9771b2-5459-11e9-89e4-96d3108deae4',
  },
  {
    id: 'card-3',
    bg: '/images/service_injection.png',
    label: 'INJEKSJONSTERAPI',
    title: 'PRP og Proloterapi',
    desc: 'På Muskelklinikken tilbyr vi avansert ultralydveiledet injeksjonsterapi, inkludert PRP og proloterapi, i samarbeid med vår lege som spesialiserer seg innen fysikalsk medisin. Vi er blant de få klinikkene som tilbyr denne innovative behandlingen.',
    bookUrl: 'https://psno-patient-platform-fe.svc.pasientsky.no/embedded/planner/booking?serviceProviderId=fb9771b2-5459-11e9-89e4-96d3108deae4',
  },
]

const STICKY_TOP = 130

export default function Steps() {
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scene = cardsRef.current
    if (!scene) return

    const cards = Array.from(scene.querySelectorAll<HTMLElement>('.stack-card'))

    cards.forEach((card) => {
      if (!card.querySelector('.stack-card-dim')) {
        const dim = document.createElement('div')
        dim.className = 'stack-card-dim'
        card.appendChild(dim)
      }
    })

    const onScroll = () => {
      cards.forEach((card, idx) => {
        let scale = 1
        let dimOpacity = 0

        for (let j = idx + 1; j < cards.length; j++) {
          const nextRect = cards[j].getBoundingClientRect()
          const vh = window.innerHeight
          let progress = (vh - nextRect.top) / (vh - STICKY_TOP)
          progress = Math.max(0, Math.min(1, progress))
          if (progress > 0) {
            scale *= 1 - progress * 0.04
            dimOpacity = Math.max(dimOpacity, progress * 0.38)
          }
        }

        card.style.transform = `scale(${scale.toFixed(4)})`
        const dim = card.querySelector<HTMLElement>('.stack-card-dim')
        if (dim) dim.style.opacity = String(dimOpacity)
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="steps-section" id="behandlinger">
      <div className="steps-intro container">
        <ScrollReveal>
          <span className="overline">Hva vi tilbyr</span>
          <h2 className="section-heading">Spesialiserte behandlingstilbud</h2>
        </ScrollReveal>
      </div>

      <div className="stack-scene" ref={cardsRef}>
        {CARDS.map((card) => (
          <div
            key={card.id}
            id={card.id}
            className="stack-card"
          >
            <div
              className="stack-card-bg"
              style={{ backgroundImage: `url('${card.bg}')` }}
              aria-hidden="true"
            />
            <div className="stack-card-overlay" aria-hidden="true" />
            <div className="stack-card-body">
              <span className="step-label">{card.label}</span>
              <h3 className="step-title">{card.title}</h3>
              <p className="step-desc">{card.desc}</p>
              <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                <a
                  href={card.bookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-pill btn-light btn-sm"
                >
                  Book nå
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
