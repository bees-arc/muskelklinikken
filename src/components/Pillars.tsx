'use client'

import { useEffect, useRef, useState } from 'react'

const PILLARS = [
  {
    id: 'fysikalsk',
    num: '01',
    tag: 'Tverrfaglig Behandling',
    title: 'Fysikalsk Behandling',
    tagline: 'Helhetlig vurdering og evidensbasert behandling av muskler, ledd og bindevev.',
    link: '/fysikalske-behandling',
    image: '/images/service_physical.webp',
  },
  {
    id: 'ultralyd',
    num: '02',
    tag: 'Avansert Diagnostikk',
    title: 'Ultralyddiagnostikk & PRP',
    tagline: 'Høyoppløselig vevsundersøkelse i sanntid og presis regenerativ injeksjonsterapi.',
    link: '/ultralyddiagnostikk',
    image: '/images/service_injection.png',
  },
  {
    id: 'pt',
    num: '03',
    tag: 'Skreddersydd Trening',
    title: 'Personlig Trening',
    tagline: '1-til-1 oppfølging med autoriserte helsetrenere for en sterk, robust kropp.',
    link: '/personlig-trening',
    image: '/images/service_pt.webp',
  },
  {
    id: 'bedrift',
    num: '04',
    tag: 'Forebyggende Helse',
    title: 'Bedriftstrening & Avtaler',
    tagline: 'Målrettet forebygging, ergonomi og skreddersydde treningsavtaler for bedrifter.',
    link: '/bedriftsavtale',
    image: '/images/service_bedrift.webp',
  },
  {
    id: 'coaching',
    num: '05',
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
  const viewportRef = useRef<HTMLDivElement>(null)
  const [translateX, setTranslateX] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current || !viewportRef.current) return

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const container = containerRef.current
          const track = trackRef.current
          const viewport = viewportRef.current
          if (!container || !track || !viewport) return

          const rect = container.getBoundingClientRect()
          const totalDistance = container.offsetHeight - window.innerHeight

          if (totalDistance > 0) {
            const scrolled = -rect.top
            const prog = Math.min(1, Math.max(0, scrolled / totalDistance))
            setProgress(prog)

            // Shift exactly by (cardWidth + gap) per slide
            const cardWidth = viewport.clientWidth
            const gap = 28
            const maxShift = (PILLARS.length - 1) * (cardWidth + gap)
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
    <>
      {/* Desktop View: Exact scroll locked pinned stage */}
      <div className="pillars-desktop-wrap">
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

            {/* Stage Frame */}
            <div className="pillars-card-stage">
              <div ref={viewportRef} className="pillars-pin-track-viewport">
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
          </div>
        </section>
      </div>

      {/* Mobile View: Clean Touch Swipeable Track */}
      <div className="pillars-mobile-wrap" id="tjenester-mobil">
        <div className="container">
          <div className="pillars-mobile-header">
            <div>
              <span className="section-tag-cyan">Våre Kjerneområder</span>
              <h2 className="section-title-large" style={{ marginBottom: 0 }}>
                Våre 5 spesialiserte <em className="accent-serif">tjenester</em>
              </h2>
            </div>
          </div>

          <div className="pillars-mobile-track">
            {PILLARS.map((p) => (
              <a
                key={`mobile-${p.id}`}
                href={p.link}
                target={p.link.startsWith('http') ? '_blank' : '_self'}
                rel={p.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="pillars-mobile-card"
              >
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

                <div className="pillars-mobile-card-content">
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
    </>
  )
}
