'use client'

import ScrollReveal from './ScrollReveal'

export default function ConversionBanner() {
  return (
    <section className="conversion-banner-section" id="booking">
      <div className="container">
        <ScrollReveal>
          <div className="conversion-banner-card">
            {/* Ambient Background Lights */}
            <div className="conversion-ambient-bg" aria-hidden="true" />

            <div className="conversion-content">
              <span className="section-tag-cyan">Ta første steg i dag</span>
              <h2 className="conversion-title">
                Klar for en smertefri hverdag? <br />
                <em className="accent-serif">Invester i din helse og bevegelse</em>
              </h2>
              <p className="conversion-desc">
                Enten du opplever akutte leddsmerter, kroniske plager eller ønsker å optimalisere 
                fysisk ytelse og helse, står vårt erfarne team klart til å hjelpe deg i Oslo Sentrum.
              </p>

              {/* Action Buttons */}
              <div className="conversion-actions-row">
                <a
                  href="https://psno-patient-platform-fe.svc.pasientsky.no/embedded/planner/booking?serviceProviderId=fb9771b2-5459-11e9-89e4-96d3108deae4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-solid btn-lg"
                >
                  Book time på klinikken
                </a>
                <a
                  href="tel:+4791907760"
                  className="btn-pill-outline btn-lg"
                >
                  Ring oss: 919 07 760
                </a>
              </div>

              {/* Trust Badges Row */}
              <div className="conversion-trust-badges">
                <div className="trust-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Autorisert helsepersonell</span>
                </div>
                <div className="trust-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Ingen henvisning nødvendig</span>
                </div>
                <div className="trust-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Direkte oppgjør med forsikring</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
