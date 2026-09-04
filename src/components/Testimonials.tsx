'use client'

import { useState, useRef } from 'react'
import ScrollReveal from './ScrollReveal'

interface Story {
  id: string
  name: string
  role: string
  service: string
  quote: string
  initials: string
  stars: number
  date: string
}

const STORIES: Story[] = [
  {
    id: '1',
    name: 'Henrik Woldsund',
    role: 'Verifisert Google-anmeldelse',
    service: 'Fysikalsk Behandling',
    quote: '«Utrolig dyktige og profesjonelle fagfolk. Fikk grundig oppfølging og skreddersydd behandling for langvarige ryggsmerter som ga rask og merkbar bedring der andre ikke strakk til. Anbefales på det varmeste!»',
    initials: 'HW',
    stars: 5,
    date: 'Google Verifisert',
  },
  {
    id: '2',
    name: 'Camilla Fossheim',
    role: 'Verifisert Google-anmeldelse',
    service: 'Osteopati & Behandling',
    quote: '«Fantastisk opplevelse hos Muskelklinikken! Både osteopat og fysioterapeut forklarte årsaken til smertene mine på en pedagogisk og forståelig måte. Veldig trygt, rent og innbydende miljø.»',
    initials: 'CF',
    stars: 5,
    date: 'Google Verifisert',
  },
  {
    id: '3',
    name: 'Jonas M. Kristiansen',
    role: 'Verifisert Google-anmeldelse',
    service: 'Diagnostikk & Opptrening',
    quote: '«Finn-Tore og teamet på Muskelklinikken er i en klasse for seg selv. Kombinasjonen av presis diagnostikk, manuell behandling og målrettet trening hjalp meg tilbake til full treningshverdag etter idrettsskade.»',
    initials: 'JK',
    stars: 5,
    date: 'Google Verifisert',
  },
  {
    id: '4',
    name: 'Sara Elisabeth Moe',
    role: 'Verifisert Google-anmeldelse',
    service: 'Helhetlig Behandling',
    quote: '«Beste klinikken i Oslo sentrum. De ser hele mennesket og ikke bare symptomene. Høyeste faglige nivå, god stemning og fantastisk service fra du går inn døren.»',
    initials: 'SM',
    stars: 5,
    date: 'Google Verifisert',
  },
  {
    id: '5',
    name: 'Thomas Eriksen',
    role: 'Verifisert Google-anmeldelse',
    service: 'Bedriftsavtale & Trening',
    quote: '«Vår bedrift har brukt Muskelklinikken til både behandling og bedriftstrening. Det har gitt markant lavere sykefravær og mye mer energi på kontoret. Helt enestående oppfølging!»',
    initials: 'TE',
    stars: 5,
    date: 'Google Verifisert',
  },
  {
    id: '6',
    name: 'Morten Dahl',
    role: 'Verifisert Google-anmeldelse',
    service: 'Ultralyddiagnostikk & PRP',
    quote: '«Etter flere år med tilbakevendende skulder- og nakkeplager fant de nøyaktig hva som forårsaket problemet med ultralyd. Behandlingsløpet var utrolig effektivt. 5 av 5 stjerner!»',
    initials: 'MD',
    stars: 5,
    date: 'Google Verifisert',
  },
]

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (!sliderRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current
    setCanScrollLeft(scrollLeft > 20)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20)
  }

  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return
    const cardWidth = 380
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }

  return (
    <section className="testimonials-slider-section" id="pasienter">
      <div className="container">
        {/* Header with Google Badge and Navigation Controls */}
        <div className="testimonials-head-flex">
          <ScrollReveal>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span className="section-tag-cyan" style={{ marginBottom: 0 }}>
                Google Anmeldelser
              </span>
              <span style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '5px', 
                fontSize: '0.8rem', 
                fontWeight: 700, 
                color: 'var(--accent-coffee)',
                backgroundColor: 'rgba(197, 155, 109, 0.14)',
                border: '1px solid rgba(197, 155, 109, 0.35)',
                padding: '2px 10px',
                borderRadius: '999px'
              }}>
                ⭐ 4.8 / 5.0
              </span>
            </div>
            
            <h2 className="section-title-large">
              Hva pasientene sier — <em className="accent-serif">ekte Google-erfaringer</em>
            </h2>
            <p className="section-desc-center" style={{ textAlign: 'left', marginInline: 0, maxWidth: '640px' }}>
              Les uavhengige anmeldelser fra pasienter og kunder som har opplevd vår tverrfaglige tilnærming i Oslo.
            </p>
          </ScrollReveal>

          {/* Navigation Arrow Buttons & Google Maps Link */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="https://maps.google.com/?q=Muskelklinikken+Dronningens+gate+15+Oslo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-outline btn-sm"
              style={{ fontSize: '0.82rem' }}
            >
              Se på Google Maps ↗
            </a>

            <div className="slider-nav-arrows">
              <button
                onClick={() => scroll('left')}
                className={`slider-arrow-btn ${!canScrollLeft ? 'is-disabled' : ''}`}
                aria-label="Forrige anmeldelse"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scroll('right')}
                className={`slider-arrow-btn ${!canScrollRight ? 'is-disabled' : ''}`}
                aria-label="Neste anmeldelse"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div
          ref={sliderRef}
          onScroll={checkScroll}
          className="testimonials-carousel-track"
        >
          {STORIES.map((story) => (
            <div key={story.id} className="testimonial-slider-card">
              <div className="testimonial-card-top">
                {/* 5-star rating */}
                <div className="testimonial-stars" aria-label={`${story.stars} av 5 stjerner`}>
                  {[...Array(story.stars)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#c59b6d">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <span className="testimonial-service-tag">{story.service}</span>
              </div>

              <blockquote className="testimonial-quote-text">
                {story.quote}
              </blockquote>

              <div className="testimonial-author-row">
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(197, 155, 109, 0.16)',
                    border: '1.5px solid var(--accent-coffee)',
                    color: 'var(--accent-coffee)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    flexShrink: 0,
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  {story.initials}
                </div>
                <div className="testimonial-author-meta">
                  <strong className="testimonial-author-name">{story.name}</strong>
                  <span className="testimonial-author-role" style={{ color: 'var(--accent-coffee)', fontSize: '0.78rem' }}>
                    ✓ {story.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
