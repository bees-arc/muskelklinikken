'use client'

import { useState, useRef } from 'react'
import ScrollReveal from './ScrollReveal'

const PILLARS = [
  {
    id: 'fysikalsk',
    tag: 'Tverrfaglig Behandling',
    title: 'Fysikalsk Behandling',
    tagline: 'Gjenopprett funksjon, lindre smerter og gjenvinn optimal mobilitet.',
    link: '/fysikalske-behandling',
    linkText: 'Utforsk fysikalsk behandling →',
    image: '/images/service_physical.webp',
  },
  {
    id: 'ultralyd',
    tag: 'Avansert Diagnostikk',
    title: 'Ultralyddiagnostikk & PRP',
    tagline: 'Høyoppløselig vevsundersøkelse og presis regenerativ injeksjonsterapi.',
    link: '/ultralyddiagnostikk',
    linkText: 'Utforsk ultralyddiagnostikk →',
    image: '/images/service_injection.png',
  },
  {
    id: 'pt',
    tag: 'Skreddersydd Trening',
    title: 'Personlig Trening',
    tagline: '1-til-1 oppfølging og skreddersydde programmer for en sterk, robust kropp.',
    link: '/personlig-trening',
    linkText: 'Se våre PT-pakker →',
    image: '/images/service_pt.webp',
  },
  {
    id: 'bedrift',
    tag: 'Forebyggende Bedriftshelse',
    title: 'Bedriftstrening & Avtaler',
    tagline: 'Forebyggende helse, ergonomi og skreddersydde avtaler for bedrifter.',
    link: '/bedriftsavtale',
    linkText: 'Les om bedriftsavtaler →',
    image: '/images/service_bedrift.webp',
  },
  {
    id: 'coaching',
    tag: 'Livsstil & Prestasjon',
    title: 'Coaching & Mental Trening',
    tagline: 'Helhetlig veiledning for kropp, sinn, stressmestring og prestasjon.',
    link: 'https://coachcamacho.com/en/',
    linkText: 'Besøk Coach Camacho ↗',
    image: '/images/service_coaching.webp',
  },
]

export default function Pillars() {
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
    <section className="pillars-showcase-section" id="tjenester">
      <div className="container">
        {/* Section Header with Left/Right Carousel Controls */}
        <div className="pillars-head-flex">
          <ScrollReveal>
            <span className="section-tag-cyan">Våre Kjerneområder</span>
            <h2 className="section-title-large">
              Våre 5 spesialiserte <em className="accent-serif">tjenesteområder</em>
            </h2>
          </ScrollReveal>

          {/* Navigation Arrow Buttons */}
          <div className="slider-nav-arrows">
            <button
              onClick={() => scroll('left')}
              className={`slider-arrow-btn ${!canScrollLeft ? 'is-disabled' : ''}`}
              aria-label="Forrige tjeneste"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className={`slider-arrow-btn ${!canScrollRight ? 'is-disabled' : ''}`}
              aria-label="Neste tjeneste"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div
          ref={sliderRef}
          onScroll={checkScroll}
          className="pillars-carousel-track"
        >
          {PILLARS.map((p) => (
            <a
              key={p.id}
              href={p.link}
              target={p.link.startsWith('http') ? '_blank' : '_self'}
              rel={p.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="pillar-carousel-card"
            >
              {/* Top Image Banner */}
              <div className="pillar-card-image-wrap">
                <img
                  src={p.image}
                  alt={p.title}
                  className="pillar-card-image"
                  loading="lazy"
                />
                <div className="pillar-card-tag-pill">{p.tag}</div>
              </div>

              {/* Card Body */}
              <div className="pillar-card-body">
                <h3 className="pillar-card-heading">{p.title}</h3>
                <p className="pillar-card-tagline">{p.tagline}</p>

                {/* Card Bottom Link */}
                <div className="pillar-card-footer">
                  <span className="pillar-link-btn">
                    {p.linkText}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

