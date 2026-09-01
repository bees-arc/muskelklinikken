'use client'

import ScrollReveal from './ScrollReveal'

const PILLARS = [
  {
    id: 'fysikalsk',
    tag: 'Tverrfaglig Behandling',
    title: 'Fysikalsk Behandling & Manuellterapi',
    tagline: 'Gjenopprett funksjon og lev smertefritt',
    desc: 'Våre autoriserte terapeuter har spesialisering innen osteopati, fysioterapi, manuellterapi og idrettsskader. Vi identifiserer årsaken til smerten og behandler muskler, ledd og bindevev med dokumenterte metoder.',
    features: [
      'Leddmobilisering og manipulering',
      'Trykkbølgebehandling (ESWT)',
      'Medisinsk akupunktur & dry needling',
      'Spesialisert rehabilitering for idrettsutøvere',
    ],
    link: '/fysikalske-behandling',
    linkText: 'Les om fysikalsk behandling →',
    image: '/images/service_physical.webp',
  },
  {
    id: 'ultralyd',
    tag: 'Avansert Diagnostikk',
    title: 'Ultralyddiagnostikk & PRP Injeksjonsterapi',
    tagline: 'Presis veiledning og regenerativ medisin',
    desc: 'Med moderne ultralydteknologi kan vi undersøke sener, leddbånd, muskler og slimposer i sanntid under bevegelse. I samarbeid med vår legespesialist tilbyr vi ultralydveiledet PRP (Platelet-Rich Plasma) og proloterapi.',
    features: [
      'Sanntids dynamisk vevsundersøkelse',
      'PRP (blodplateberiket plasma)',
      'Proloterapi og målrettede injeksjoner',
      'Kort ventetid for bildeundersøkelse',
    ],
    link: '/ultralyddiagnostikk',
    linkText: 'Utforsk ultralyddiagnostikk →',
    image: '/images/service_injection.png',
  },
  {
    id: 'pt',
    tag: 'Skreddersydd Trening',
    title: 'Personlig Trening & Rehabilitering',
    tagline: 'Bygg en robust kropp som tåler hverdagen',
    desc: 'Vi tilbyr skreddersydde PT-pakker for alle nivåer – fra toppidrettsutøvere til travle hverdagshelter. Våre trenere er utdannet innen idrettsvitenskap og biomekanikk, og sikrer trygg progresjon mot dine mål.',
    features: [
      '1-til-1 oppfølging i private treningsfasiliteter',
      'Individuell biomekanisk screening',
      'Målrettet styrke- og stabilitetsopptrening',
      'Kondisjons- og skadeforebyggende programmer',
    ],
    link: '/personlig-trening',
    linkText: 'Se våre PT-pakker →',
    image: '/images/service_pt.webp',
  },
  {
    id: 'bedrift',
    tag: 'Forebyggende Helse',
    title: 'Bedriftshelse & Coaching',
    tagline: 'Invester i friske, motiverte og produktive ansatte',
    desc: 'Våre bedriftsavtaler kombinerer forebyggende trening, ergonomisk rådgivning, stressmestring og helhetlig livsstilscoaching. Reduser sykefravær og skap et energisk arbeidsmiljø.',
    features: [
      'Ergonomisk kartlegging på arbeidsplassen',
      'Felles treningsøkter og workshops',
      'Prioritert tilgang til behandling for ansatte',
      'Coaching innen søvn, kosthold og restitusjon',
    ],
    link: '/bedriftsavtale',
    linkText: 'Les om bedriftsavtaler →',
    image: '/images/service_bedrift.webp',
  },
]

export default function Pillars() {
  return (
    <section className="pillars-showcase-section" id="tjenester">
      <div className="container">
        {/* Section Header with Right CTA (Fountain Life style) */}
        <div className="pillars-head-flex">
          <ScrollReveal>
            <span className="section-tag-cyan">Våre Kjerneområder</span>
            <h2 className="section-title-large">
              Undersøk. Behandle. <em className="accent-serif">Styrk.</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <a
              href="https://psno-patient-platform-fe.svc.pasientsky.no/embedded/planner/booking?serviceProviderId=fb9771b2-5459-11e9-89e4-96d3108deae4"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-solid"
            >
              Book time hos terapeut
            </a>
          </ScrollReveal>
        </div>

        {/* 4 Rich Pillar Cards Grid */}
        <div className="pillars-cards-grid">
          {PILLARS.map((p, idx) => (
            <ScrollReveal key={p.id} delay={idx * 80}>
              <div className="pillar-detail-card">
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

                {/* Card Content */}
                <div className="pillar-card-body">
                  <h3 className="pillar-card-heading">{p.title}</h3>
                  <div className="pillar-card-tagline">{p.tagline}</div>
                  <p className="pillar-card-text">{p.desc}</p>

                  {/* Feature Checkpoints */}
                  <ul className="pillar-card-features">
                    {p.features.map((feat, i) => (
                      <li key={i} className="pillar-feature-item">
                        <svg className="feature-check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Card Bottom Link */}
                  <div className="pillar-card-footer">
                    <a href={p.link} className="pillar-link-btn">
                      {p.linkText}
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
