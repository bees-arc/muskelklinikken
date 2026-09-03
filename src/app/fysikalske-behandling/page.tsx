import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Fysikalsk Behandling – Muskelklinikken Oslo',
  description:
    'Helhetlig fysioterapi, osteopati, manuellterapi og rehabilitering i Oslo Sentrum. Finn årsaken til smerten og få evidensbasert behandling.',
}

const SPECIALTIES = [
  {
    title: 'Fysioterapi',
    desc: 'Grundig undersøkelse og behandling av muskler, ledd, sener og nerver for å lindre smerter, øke mobilitet og gjenopprette normal funksjon.',
    badge: 'Klinisk Fagfelt',
  },
  {
    title: 'Osteopati',
    desc: 'En helhetlig manuell behandlingsform som ser sammenhengen mellom kroppens struktur, funksjon, organsystemer og bevegelsesapparat.',
    badge: 'Holistisk Tilnærming',
  },
  {
    title: 'Idretts- & Muskelterapi',
    desc: 'Dypgående massasje, triggerpunktbehandling, tøyning og trykkbølgebehandling (ESWT) rettet mot idrettsskader og akutte/kroniske muskelspenninger.',
    badge: 'Idrettsmedisin',
  },
  {
    title: 'Rehabilitering & Opptrening',
    desc: 'Skreddersydde trenings- og rehabiliteringsprogrammer som hjelper deg tryggest og raskest mulig tilbake til hverdagen eller idretten etter skade.',
    badge: 'Målrettet Fremgang',
  },
]

export default function FysikalskBehandling() {
  return (
    <>
      <Header />
      <main className="subpage-container">
        <section>
          <div className="container">
            {/* Header / Intro */}
            <div className="subpage-header-wrap">
              <span className="section-tag-cyan">Tverrfaglig Behandling</span>
              <h1 className="subpage-title">
                Fysikalsk Behandling hos Muskelklinikken
              </h1>
              <p className="subpage-subtitle">
                En helhetlig, tverrfaglig og moderne tilnærming til smerte, rehabilitering og bevegelsesglede. Vi kartlegger årsaken bak smerten din og gir deg dokumentert behandling.
              </p>

              {/* Notice pill */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'rgba(197, 155, 109, 0.12)',
                border: '1px solid rgba(197, 155, 109, 0.35)',
                padding: '10px 18px',
                borderRadius: '12px',
                fontSize: '0.88rem',
                color: 'var(--text-1)',
                fontWeight: 500,
              }}>
                <span style={{ color: 'var(--accent-coffee)', fontWeight: 700 }}>Merk:</span>
                <span>Finn-Tore tar ikke imot forsikringspasienter, kun private kunder. Våre øvrige terapeuter har direkteoppgjør med alle forsikringsselskaper.</span>
              </div>
            </div>

            {/* Featured Image Banner */}
            <div className="subpage-banner-card">
              <img
                src="/images/service_physical.webp"
                alt="Fysikalsk behandling hos Muskelklinikken"
                className="subpage-banner-img"
              />
            </div>

            {/* Specialties Grid */}
            <div className="subpage-grid-2">
              {SPECIALTIES.map((spec) => (
                <div key={spec.title} className="subpage-detail-card">
                  <div className="subpage-card-header">
                    <div>
                      <span className="subpage-card-badge">{spec.badge}</span>
                      <h2 className="subpage-card-title">{spec.title}</h2>
                    </div>
                  </div>

                  <p className="subpage-card-body">
                    {spec.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom CTA Box */}
            <div className="subpage-cta-box">
              <div className="subpage-cta-content">
                <h3>Klar for en smertefri hverdag?</h3>
                <p>Bestill time hos en av våre autoriserte terapeuter i dag. Ingen henvisning nødvendig.</p>
              </div>
              <div className="subpage-cta-actions">
                <a
                  href="https://psno-patient-platform-fe.svc.pasientsky.no/embedded/planner/booking?serviceProviderId=fb9771b2-5459-11e9-89e4-96d3108deae4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-solid"
                >
                  Bestill time online
                </a>
                <a href="/priser" className="btn-pill-outline">
                  Se priser
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
