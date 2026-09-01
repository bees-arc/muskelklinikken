'use client'

import ScrollReveal from './ScrollReveal'

const PARTNERS = [
  'STOREBRAND',
  'GJENSIDIGE',
  'IF FORSIKRING',
  'VERTIKAL HELSE',
  'FALCK HELSE',
  'EURO ACCIDENT',
  'FREMTIND',
  'TRYG FORSIKRING',
]

export default function InsuranceAccreditation() {
  const tickerItems = [...PARTNERS, ...PARTNERS]

  return (
    <section className="insurance-accreditation-section" id="forsikring">
      <div className="container">
        {/* Featured Trust Banner Card (Fountain Life style) */}
        <ScrollReveal>
          <div className="insurance-banner-card">
            <div className="insurance-banner-content">
              <div className="insurance-badge-row">
                <span className="insurance-pill-badge">Direkte oppgjør</span>
                <span className="insurance-pill-badge is-dim">Ingen ventetid</span>
              </div>
              <h3 className="insurance-banner-title">
                Dekket av helseforsikring? <br />
                <em className="accent-serif">Kom raskt til behandling</em>
              </h3>
              <p className="insurance-banner-desc">
                Vi har direkteavtaler med de fleste ledende forsikringsselskaper i Norge. 
                Du kan få din fysikalske behandling, ultralyddiagnostikk eller rehabilitering helt eller delvis dekket uten legehenvisning.
              </p>
            </div>

            <div className="insurance-banner-cta">
              <a
                href="https://psno-patient-platform-fe.svc.pasientsky.no/embedded/planner/booking?serviceProviderId=fb9771b2-5459-11e9-89e4-96d3108deae4"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-solid"
              >
                Bestill time med forsikring
              </a>
              <span className="insurance-note">Husk å oppgi ditt skadenummer ved ankomst</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Moving Insurance Logos Ticker */}
        <div className="insurance-ticker-wrap" aria-hidden="true">
          <div className="insurance-ticker-track">
            {tickerItems.map((item, idx) => (
              <div key={idx} className="insurance-ticker-item">
                <span className="partner-name">{item}</span>
                <span className="partner-dot">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
