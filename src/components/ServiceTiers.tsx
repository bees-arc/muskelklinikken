'use client'

import ScrollReveal from './ScrollReveal'

const TIERS = [
  {
    id: 'konsultasjon',
    name: 'Førstegangskonsultasjon',
    badge: 'Essensiell',
    isPopular: false,
    tagline: 'Grundig kartlegging og diagnostikk',
    desc: 'Det naturlige startpunktet for alle nye pasienter med akutte eller langvarige muskel- og leddplager.',
    features: [
      'Omfattende anamnese og funksjonsanalyse',
      'Ultralyddiagnostikk ved klinisk indikasjon',
      'Manuell vurdering av ledd og muskulatur',
      'Personlig behandlings- og tiltaksplan',
      'Direkte oppgjør via forsikringsselskaper',
    ],
    buttonText: 'Book førstegangstime',
    buttonLink: 'https://psno-patient-platform-fe.svc.pasientsky.no/embedded/planner/booking?serviceProviderId=fb9771b2-5459-11e9-89e4-96d3108deae4',
  },
  {
    id: 'rehab',
    name: 'Rehabiliteringsforløp',
    badge: 'Mest Populær',
    isPopular: true,
    tagline: 'Målrettet behandling og smertelindring',
    desc: 'For deg som ønsker et strukturert behandlingsforløp for å bli helt kvitt smerter og gjenvinne full mobilitet.',
    features: [
      'Tverrfaglig manuell behandling & osteopati',
      'Trykkbølgebehandling (ESWT) inkludert',
      'Mulighet for ultralydveiledet PRP / injeksjon',
      'Skreddersydd hjemmeøvelsesprogram',
      'Kontinuerlig re-evaluering og progresjonstest',
    ],
    buttonText: 'Start behandlingsforløp',
    buttonLink: 'https://psno-patient-platform-fe.svc.pasientsky.no/embedded/planner/booking?serviceProviderId=fb9771b2-5459-11e9-89e4-96d3108deae4',
  },
  {
    id: 'pt-pakke',
    name: 'PT & Prestasjonsmedlemskap',
    badge: 'Skreddersydd',
    isPopular: false,
    tagline: 'Styrke, prestasjon og skadeforebygging',
    desc: 'For deg som vil bygge en sterk, smertefri kropp og nå nye fysiske milepæler under kyndig veiledning.',
    features: [
      '1-til-1 økter i private treningsrom',
      'Biomekanisk testing og screening',
      'Individuelt periodisert styrkeprogram',
      'Ernærings- og restitusjonsveiledning',
      'Tett oppfølging av sertifisert trener',
    ],
    buttonText: 'Se våre PT-pakker',
    buttonLink: '/personlig-trening',
  },
]

export default function ServiceTiers() {
  return (
    <section className="service-tiers-section" id="pakker">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal className="section-head-center">
          <span className="section-tag-cyan">Behandlingstilbud</span>
          <h2 className="section-title-large">
            Våre behandlingspakker — <em className="accent-serif">tilpasset dine behov</em>
          </h2>
          <p className="section-desc-center">
            Enten du har akutte smerter, trenger langvarig rehabilitering eller vil optimalisere 
            din fysiske yteevne, har vi et skreddersydd forløp for deg.
          </p>
        </ScrollReveal>

        {/* 3 Tier Cards Grid */}
        <div className="tiers-cards-grid">
          {TIERS.map((tier, idx) => (
            <ScrollReveal key={tier.id} delay={idx * 100}>
              <div className={`tier-card ${tier.isPopular ? 'is-popular' : ''}`}>
                {/* Popular Highlight Badge */}
                {tier.isPopular && (
                  <div className="popular-ribbon">Anbefalt forløp</div>
                )}

                <div className="tier-header">
                  <span className="tier-badge">{tier.badge}</span>
                  <h3 className="tier-name">{tier.name}</h3>
                  <div className="tier-tagline">{tier.tagline}</div>
                  <p className="tier-desc">{tier.desc}</p>
                </div>

                <div className="tier-divider" />

                {/* Features List */}
                <div className="tier-features-title">Dette er inkludert:</div>
                <ul className="tier-features-list">
                  {tier.features.map((feat, i) => (
                    <li key={i} className="tier-feature-item">
                      <svg className="tier-check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Card Action Button */}
                <div className="tier-footer">
                  <a
                    href={tier.buttonLink}
                    target={tier.buttonLink.startsWith('http') ? '_blank' : '_self'}
                    rel={tier.buttonLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={tier.isPopular ? 'btn-pill-solid btn-full' : 'btn-pill-outline btn-full'}
                  >
                    {tier.buttonText}
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
