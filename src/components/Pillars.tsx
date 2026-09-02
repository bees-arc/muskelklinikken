'use client'

import ScrollReveal from './ScrollReveal'

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
  return (
    <section className="pillars-showcase-section" id="tjenester">
      <div className="container" style={{ marginBottom: '40px' }}>
        {/* Section Header */}
        <ScrollReveal className="section-head-center">
          <span className="section-tag-cyan">Våre Kjerneområder</span>
          <h2 className="section-title-large">
            Våre 5 spesialiserte <em className="accent-serif">tjenesteområder</em>
          </h2>
        </ScrollReveal>
      </div>

      {/* Full-width Horizontal Scroll Track */}
      <div className="pillars-fullscreen-track">
        {PILLARS.map((p) => (
          <a
            key={p.id}
            href={p.link}
            target={p.link.startsWith('http') ? '_blank' : '_self'}
            rel={p.link.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="service-hero-card"
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
    </section>
  )
}


