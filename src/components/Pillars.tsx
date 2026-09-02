'use client'

import { useEffect, useRef, useState } from 'react'

const PILLARS = [
  {
    id: 'fysikalsk',
    tag: 'Tverrfaglig Behandling',
    title: 'Fysikalsk Behandling',
    tagline: 'Gjenopprett funksjon, lindre smerter og gjenvinn optimal mobilitet.',
    link: '/fysikalske-behandling',
    image: '/images/service_physical.webp',
  },
  {
    id: 'ultralyd',
    tag: 'Avansert Diagnostikk',
    title: 'Ultralyddiagnostikk & PRP',
    tagline: 'Høyoppløselig vevsundersøkelse og presis regenerativ injeksjonsterapi.',
    link: '/ultralyddiagnostikk',
    image: '/images/service_injection.png',
  },
  {
    id: 'pt',
    tag: 'Skreddersydd Trening',
    title: 'Personlig Trening',
    tagline: '1-til-1 oppfølging og skreddersydde programmer for en sterk, robust kropp.',
    link: '/personlig-trening',
    image: '/images/service_pt.webp',
  },
  {
    id: 'bedrift',
    tag: 'Forebyggende Bedriftshelse',
    title: 'Bedriftstrening & Avtaler',
    tagline: 'Forebyggende helse, ergonomi og skreddersydde avtaler for bedrifter.',
    link: '/bedriftsavtale',
    image: '/images/service_bedrift.webp',
  },
  {
    id: 'coaching',
    tag: 'Livsstil & Prestasjon',
    title: 'Coaching & Mental Trening',
    tagline: 'Helhetlig veiledning for kropp, sinn, stressmestring og prestasjon.',
    link: 'https://coachcamacho.com/en/',
    image: '/images/service_coaching.webp',
  },
]

export default function Pillars() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [translateX, setTranslateX] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const container = containerRef.current
          const track = trackRef.current
          if (!container || !track) return

          const rect = container.getBoundingClientRect()
          const totalDistance = container.offsetHeight - window.innerHeight

          if (totalDistance > 0) {
            // Distance scrolled from top of section
            const scrolled = -rect.top
            const prog = Math.min(1, Math.max(0, scrolled / totalDistance))
            setProgress(prog)

            // Maximum horizontal displacement
            const maxShift = track.scrollWidth - window.innerWidth + 48
            const currentShift = Math.max(0, maxShift * prog)
            setTranslateX(currentShift)
          }

          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const activeIndex = Math.min(PILLARS.length - 1, Math.floor(progress * PILLARS.length))

  return (
    <section ref={containerRef} className="pillars-pin-section" id="tjenester">
      <div className="pillars-sticky-frame">
        {/* Top Header Row with Progress indicator */}
        <div className="container pillars-pin-header">
          <div className="pillars-pin-header-left">
            <span className="section-tag-cyan">Våre Kjerneområder</span>
            <h2 className="section-title-large">
              Våre 5 spesialiserte <em className="accent-serif">tjenesteområder</em>
            </h2>
          </div>

          <div className="pillars-pin-counter">
            <span className="current-slide">0{activeIndex + 1}</span>
            <span className="counter-sep">/</span>
            <span className="total-slides">0{PILLARS.length}</span>
          </div>
        </div>

        {/* Horizontal Pin Track moving with scroll */}
        <div className="pillars-pin-track-viewport">
          <div
            ref={trackRef}
            className="pillars-pin-track"
            style={{
              transform: `translate3d(-${translateX}px, 0, 0)`,
            }}
          >
            {PILLARS.map((p, idx) => (
              <a
                key={p.id}
                href={p.link}
                target={p.link.startsWith('http') ? '_blank' : '_self'}
                rel={p.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`service-hero-card ${idx === activeIndex ? 'is-active-card' : ''}`}
              >
                {/* Full-bleed Background Image */}
                <div className="service-hero-media-wrap">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="service-hero-bg-img"
                    loading="lazy"
                  />
                  <div className="service-hero-dark-overlay" />
                  <div className="service-hero-ambient-glow" />
                </div>

                {/* Content Overlay matching Hero Card */}
                <div className="service-hero-inner-content">
                  <div className="service-hero-tag-badge">
                    <span>{p.tag}</span>
                  </div>

                  <h3 className="service-hero-title">
                    {p.title}
                  </h3>

                  <p className="service-hero-tagline">
                    {p.tagline}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}



