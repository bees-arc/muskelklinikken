'use client'

import ScrollReveal from './ScrollReveal'

const STEPS = [
  {
    step: '01',
    title: 'Grundig kartlegging & diagnostikk',
    subtitle: 'Finner den reelle årsaken bak smerten',
    desc: 'Vi starter med en grundig funksjons- og bevegelsesanalyse. Ved behov benytter vi avansert ultralyddiagnostikk for å inspisere sener, ledd og muskler i sanntid.',
    badge: 'Diagnostisk presisjon',
    overlayText: 'Ultralydundersøkelse & funksjonstest i én og samme konsultasjon',
    image: '/images/service_physical.webp',
  },
  {
    step: '02',
    title: 'Målrettet manuell & medisinsk behandling',
    subtitle: 'Evidensbasert smertelindring',
    desc: 'Behandlingen tilpasses dine funn: osteopati, fysioterapi, leddmobilisering, trykkbølgebehandling eller ultralydveiledet injeksjonsterapi (PRP) i samråd med lege.',
    badge: 'Skånsom & effektiv',
    overlayText: 'Tverrfaglig samarbeid mellom terapeut og legespesialist',
    image: '/images/service_injection.png',
  },
  {
    step: '03',
    title: 'Skreddersydd opptrening & forebygging',
    subtitle: 'Bygg en sterk og smertefri kropp',
    desc: 'Varige resultater krever riktig opptrening. Vi designer et individuelt rehabiliteringsprogram og styrketrening som gjenoppretter full styrke og forhindrer tilbakefall.',
    badge: 'Langsiktig helse',
    overlayText: 'Personlig treningsplan og kontinuerlig progresjonsmåling',
    image: '/images/service_pt.webp',
  },
]

export default function HowItWorks() {
  return (
    <section className="how-it-works-section" id="prosess">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal className="section-head-center">
          <span className="section-tag-cyan">Vår behandlingsmodell</span>
          <h2 className="section-title-large">
            Slik fungerer det — <em className="accent-serif">fra kartlegging til styrke</em>
          </h2>
          <p className="section-desc-center">
            Hos Muskelklinikken jobber vi systematisk og tverrfaglig for å identifisere, 
            behandle og styrke kroppen din. En trygg og vitenskapelig forankret vei til varig bedring.
          </p>
        </ScrollReveal>

        {/* 3 Interactive Cards Grid */}
        <div className="how-grid-3">
          {STEPS.map((item, idx) => (
            <ScrollReveal key={item.step} delay={idx * 120}>
              <div className="how-card">
                {/* Visual Media Container */}
                <div className="how-card-media">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="how-card-img"
                    loading="lazy"
                  />
                  <div className="how-card-badge">{item.step}</div>
                  
                  {/* Frosted Floating Callout Panel */}
                  <div className="how-media-callout">
                    <div className="callout-indicator" />
                    <span className="callout-text">{item.overlayText}</span>
                  </div>
                </div>

                {/* Card Content Information */}
                <div className="how-card-content">
                  <span className="how-card-tag">{item.badge}</span>
                  <h3 className="how-card-title">{item.title}</h3>
                  <p className="how-card-desc">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Section Action Buttons */}
        <ScrollReveal className="how-actions-center">
          <a
            href="https://psno-patient-platform-fe.svc.pasientsky.no/embedded/planner/booking?serviceProviderId=fb9771b2-5459-11e9-89e4-96d3108deae4"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-solid"
          >
            Bestill førstegangskonsultasjon
          </a>
          <a
            href="/om-oss"
            className="btn-pill-outline"
          >
            Les mer om teamet
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
