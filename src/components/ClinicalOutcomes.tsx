'use client'

import ScrollReveal from './ScrollReveal'

const STATS = [
  { value: '98%', label: 'Pasienttilfredshet', desc: 'Rapporterer markant smertereduksjon etter behandlingsløp' },
  { value: '15+', label: 'Års klinisk erfaring', desc: 'Kontinuerlig videreutdanning og internasjonale kurs' },
  { value: '4 000+', label: 'Behandlede pasienter', desc: 'Fra mosjonister til profesjonelle toppidrettsutøvere' },
  { value: '0 dager', label: 'Ventetid ved akutte behov', desc: 'Rask timeavtale online eller over telefon' },
]

export default function ClinicalOutcomes() {
  return (
    <section className="outcomes-section" id="resultater">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal className="section-head-center">
          <span className="section-tag-cyan">Dokumenterte resultater</span>
          <h2 className="section-title-large">
            Målbare forbedringer — <em className="accent-serif">forankret i vitenskap</em>
          </h2>
          <p className="section-desc-center">
            Vår tverrfaglige metode er bygget på grundig diagnostikk, persontilpasset oppfølging og kontinuerlig evaluering.
          </p>
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="outcomes-stats-grid">
          {STATS.map((stat, idx) => (
            <ScrollReveal key={stat.label} delay={idx * 80}>
              <div className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-desc">{stat.desc}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* 2 Highlighted Philosophy Cards (Fountain Life frosted style) */}
        <div className="outcomes-cards-duo">
          <ScrollReveal className="outcome-focus-card">
            <div className="focus-card-badge">Diagnostisk Presisjon</div>
            <h3 className="focus-card-title">Avdekker årsaken før behandlingen starter</h3>
            <p className="focus-card-text">
              Mange pasienter opplever tilbakevendende plager fordi kun symptomene behandles. 
              Gjennom ultralyddiagnostikk og biomekanisk funksjonstesting lokaliserer vi den eksakte 
              vevsskaden eller feilbelastningen – og sikrer raskere restitusjon.
            </p>
            <div className="focus-card-meta">
              <span>✓ Raskere tilbake i aktivitet</span>
              <span>✓ Unngår unødvendige inngrep</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120} className="outcome-focus-card is-accent">
            <div className="focus-card-badge is-cyan">Tverrfaglig Synergi</div>
            <h3 className="focus-card-title">Alt under ett tak i Oslo Sentrum</h3>
            <p className="focus-card-text">
              Kombinasjonen av osteopati, manuellterapi, ultralydveiledet PRP-injeksjonsterapi 
              og personlig opptrening gir en helhetlig behandlingseffekt som få andre klinikker kan tilby.
            </p>
            <div className="focus-card-meta">
              <span>✓ Tett legesamarbeid</span>
              <span>✓ Individuelt tilpasset progresjon</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
