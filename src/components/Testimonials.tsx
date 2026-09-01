'use client'

import { useState, useRef } from 'react'
import ScrollReveal from './ScrollReveal'

interface Story {
  id: string
  name: string
  role: string
  service: string
  quote: string
  image: string
  stars: number
}

const STORIES: Story[] = [
  {
    id: '1',
    name: 'Anna Lindberg',
    role: 'Aktiv mosjonist & Tidligere pasient',
    service: 'Fysikalsk Behandling & Ultralyd',
    quote: '«Etter måneder med langvarige skuldersmerter fant Muskelklinikken årsaken med én ultralydundersøkelse. Behandlingen og opptreningsplanen ga meg hverdagen tilbake.»',
    image: '/images/team/vic.webp',
    stars: 5,
  },
  {
    id: '2',
    name: 'Trond Håkonsson',
    role: 'Turnusfysioterapeut & Kursdeltaker',
    service: 'Kompetanse & Rehabilitering',
    quote: '«Finn-Tore og teamet på Muskelklinikken holder et eksepsjonelt høyt faglig nivå. Deres evne til å koble teoretisk vitenskap med praktisk rehabilitering er enestående.»',
    image: '/images/team/Ahmed-scaled.jpg',
    stars: 5,
  },
  {
    id: '3',
    name: 'Selma Eide',
    role: 'Idrettsutøver',
    service: 'Rehabilitering & PT',
    quote: '«Undervisningen og rehabiliteringen hos Muskelklinikken var utrolig lærerik og givende. De så hele min treningshverdag og hjalp meg tilbake til toppformen.»',
    image: '/images/team/Rectangle-154.webp',
    stars: 5,
  },
  {
    id: '4',
    name: 'Marius Berg',
    role: 'Bedriftsleder',
    service: 'Bedriftsavtale & Ergonomi',
    quote: '«Samarbeidet med Muskelklinikken har redusert sykefraværet blant våre ansatte markant. De gir profesjonell, rask og tilgjengelig hjelp uten ventetid.»',
    image: '/images/team/Marius-scaled.jpg',
    stars: 5,
  },
  {
    id: '5',
    name: 'Alexander V.',
    role: 'Styrke- og utholdenhetsutøver',
    service: 'Personlig Trening & PRP',
    quote: '«Kombinasjonen av grundig diagnostikk, injeksjonsterapi og målrettet styrketrening gjorde at jeg ble kvitt en kronisk kneskade på under tre måneder.»',
    image: '/images/team/Alexander-.jpg',
    stars: 5,
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
        {/* Header with Slider Navigation Controls */}
        <div className="testimonials-head-flex">
          <ScrollReveal>
            <span className="section-tag-cyan">Erfaringer & Resultater</span>
            <h2 className="section-title-large">
              Møt våre pasienter — <em className="accent-serif">historier om mestring</em>
            </h2>
          </ScrollReveal>

          {/* Navigation Arrow Buttons */}
          <div className="slider-nav-arrows">
            <button
              onClick={() => scroll('left')}
              className={`slider-arrow-btn ${!canScrollLeft ? 'is-disabled' : ''}`}
              aria-label="Forrige erfaring"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className={`slider-arrow-btn ${!canScrollRight ? 'is-disabled' : ''}`}
              aria-label="Neste erfaring"
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
          className="testimonials-carousel-track"
        >
          {STORIES.map((story) => (
            <div key={story.id} className="testimonial-slider-card">
              <div className="testimonial-card-top">
                {/* 5-star rating */}
                <div className="testimonial-stars" aria-label={`${story.stars} av 5 stjerner`}>
                  {[...Array(story.stars)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#38bdf8">
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
                <img
                  src={story.image}
                  alt={story.name}
                  className="testimonial-author-avatar"
                  loading="lazy"
                  width={48}
                  height={48}
                />
                <div className="testimonial-author-meta">
                  <strong className="testimonial-author-name">{story.name}</strong>
                  <span className="testimonial-author-role">{story.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
