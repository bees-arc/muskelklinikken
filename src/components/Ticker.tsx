'use client'

import { useRef, Fragment } from 'react'
import ScrollReveal from './ScrollReveal'

const BENEFITS = [
  'Smertefri Hverdag', 'Fysioterapi', 'Personlig Trening', 'Trykkbølgebehandling',
  'Ultralyddiagnostikk', 'Skadeforebygging', 'Rehabilitering', 'Bedriftsavtaler',
  'Økt Bevegelighet', 'Bedre Helse', 'Sterkere Kropp', 'Leddbehandling',
  'Muskelterapi', 'Kompetansesenter', 'Idrettsskader', 'Ryggbehandling',
]

export default function Ticker() {
  const trackRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = 'paused'
  }
  const handleMouseLeave = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = 'running'
  }

  // Duplicate for seamless loop
  const items = [...BENEFITS, ...BENEFITS]

  return (
    <section className="ticker-wrap">
      <div className="ticker-row" aria-hidden="true">
        <div
          ref={trackRef}
          className="ticker-track"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {items.map((item, i) => (
            <Fragment key={i}>
              <span>{item}</span>
              <span className="ticker-dot">·</span>
            </Fragment>
          ))}
        </div>
      </div>

      <ScrollReveal className="ticker-cta">
        <a 
          href="https://psno-patient-platform-fe.svc.pasientsky.no/embedded/planner/booking?serviceProviderId=fb9771b2-5459-11e9-89e4-96d3108deae4"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-pill btn-outline btn-lg"
        >
          Start din opptrening nå
        </a>
      </ScrollReveal>
    </section>
  )
}
