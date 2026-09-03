import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Ultralyddiagnostikk & PRP – Muskelklinikken Oslo',
  description:
    'Avansert høyoppløselig ultralyddiagnostikk og veiledet injeksjonsterapi (PRP) i Oslo. Nøyaktig kartlegging av sener, muskler og ledd under bevegelse.',
}

export default function Ultralyddiagnostikk() {
  return (
    <>
      <Header />
      <main className="subpage-container">
        <section>
          <div className="container">
            {/* Header / Intro */}
            <div className="subpage-header-wrap">
              <span className="section-tag-cyan">Avansert Billeddiagnostikk</span>
              <h1 className="subpage-title">
                Ultralyddiagnostikk & PRP hos Muskelklinikken
              </h1>
              <p className="subpage-subtitle">
                Presis innsikt – tryggere behandling. Vi benytter moderne høyoppløselig ultralydteknologi for sanntidsundersøkelse og presis veiledning.
              </p>
            </div>

            {/* Featured Banner Card */}
            <div className="subpage-banner-card">
              <img
                src="/images/service_injection.png"
                alt="Ultralyddiagnostikk og PRP hos Muskelklinikken"
                className="subpage-banner-img"
              />
            </div>

            {/* Content Cards */}
            <div className="subpage-grid-2">
              <div className="subpage-detail-card">
                <div className="subpage-card-header">
                  <div className="subpage-card-icon-wrap" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <circle cx="12" cy="12" r="4"/>
                      <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/>
                      <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"/>
                      <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"/>
                      <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"/>
                    </svg>
                  </div>
                  <div>
                    <span className="subpage-card-badge">Sanntids Vurdering</span>
                    <h2 className="subpage-card-title">Høyoppløselig Ultralydundersøkelse</h2>
                  </div>
                </div>

                <p className="subpage-card-body">
                  Hos Muskelklinikken benytter vi avansert ultralyddiagnostikk for å gi deg raskere og mer presis vurdering av muskel- og skjelettplager. Våre erfarne terapeuter har lang og spesialisert kompetanse innen ultralyddiagnostikk, og bruker det som et effektivt verktøy for å kartlegge skader, betennelser og strukturelle forandringer i kroppen – helt uten ubehag eller stråling.
                </p>

                <ul className="subpage-feature-list">
                  <li className="subpage-feature-item">
                    <svg className="subpage-feature-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Dynamisk undersøkelse av vevet under bevegelse</span>
                  </li>
                  <li className="subpage-feature-item">
                    <svg className="subpage-feature-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Ingen stråling, ingen ventetid – umiddelbare svar</span>
                  </li>
                  <li className="subpage-feature-item">
                    <svg className="subpage-feature-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Kartlegging av sener, leddbånd, muskler og slimposer</span>
                  </li>
                </ul>
              </div>

              <div className="subpage-detail-card">
                <div className="subpage-card-header">
                  <div className="subpage-card-icon-wrap" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                  </div>
                  <div>
                    <span className="subpage-card-badge">Regenerativ Medisin</span>
                    <h2 className="subpage-card-title">PRP & Veiledet Injeksjonsterapi</h2>
                  </div>
                </div>

                <p className="subpage-card-body">
                  I samråd med legespesialist tilbyr vi ultralydveiledet injeksjonsterapi som PRP (Platelet Rich Plasma) og proloterapi. Med ultralyd sikrer vi millimeterpresisjon slik at virkestoffet settes nøyaktig der skaden eller betennelsen sitter.
                </p>

                <ul className="subpage-feature-list">
                  <li className="subpage-feature-item">
                    <svg className="subpage-feature-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Millimeterpresis injeksjon under direkte visualisering</span>
                  </li>
                  <li className="subpage-feature-item">
                    <svg className="subpage-feature-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Kroppens egne vekstfaktorer for vevsreparasjon</span>
                  </li>
                  <li className="subpage-feature-item">
                    <svg className="subpage-feature-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Effektivt for kroniske senebetennelser og slitasje</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom CTA Box */}
            <div className="subpage-cta-box">
              <div className="subpage-cta-content">
                <h3>Trenger du en grundig ultralydundersøkelse?</h3>
                <p>Opplev tryggheten i å bli sett av autoriserte fagfolk med spesialkompetanse.</p>
              </div>
              <div className="subpage-cta-actions">
                <a
                  href="https://psno-patient-platform-fe.svc.pasientsky.no/embedded/planner/booking?serviceProviderId=fb9771b2-5459-11e9-89e4-96d3108deae4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-solid"
                >
                  Book ultralydundersøkelse
                </a>
                <a href="/kontakt" className="btn-pill-outline">
                  Kontakt oss
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
