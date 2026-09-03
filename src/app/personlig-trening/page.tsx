import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Personlig Trening – Muskelklinikken Oslo',
  description:
    'Skreddersydd personlig trening med autorisert helsepersonell og prestasjonscoacher i Oslo Sentrum. Individuell oppfølging for styrke og helse.',
}

const COACHES = [
  { 
    name: 'Finn-Tore Camacho Bjørnsand', 
    role: 'Gründer & Prestasjonscoach', 
    image: '/images/team/Frame-14-2.webp',
    note: 'Kun private kunder' 
  },
  { 
    name: 'Filip', 
    role: 'Personlig Trener & Fysioterapeut',
    image: '/images/team/mk02-scaled.jpg'
  },
  { 
    name: 'Trine Marie Skråmestø', 
    role: 'Personlig Trener & Terapeut',
    image: '/images/team/IMG_6671.webp'
  },
  { 
    name: 'Kristian', 
    role: 'Personlig Trener & Fysioterapeut',
    image: '/images/team/Rectangle-183.webp'
  },
]

export default function PersonligTrening() {
  return (
    <>
      <Header />
      <main className="subpage-container">
        <section>
          <div className="container">
            {/* Header / Intro */}
            <div className="subpage-header-wrap">
              <span className="section-tag-cyan">Skreddersydd Trening</span>
              <h1 className="subpage-title">
                Personlig Trening hos Muskelklinikken
              </h1>
              <p className="subpage-subtitle">
                Skreddersydd trening tilpasset din kropp, dine mål og din hverdag. Våre trenere kombinerer solid helsefaglig kompetanse med avansert prestasjonstrening.
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
                <span>Finn-Tore tar ikke imot forsikringspasienter, kun private kunder.</span>
              </div>
            </div>

            {/* Featured Banner Card */}
            <div className="subpage-banner-card">
              <img 
                src="https://muskelklinikken.no/wp-content/uploads/2023/12/Rectangle-160.webp" 
                alt="Personlig trening hos Muskelklinikken" 
                className="subpage-banner-img"
              />
            </div>

            {/* Content Cards */}
            <div className="subpage-grid-2" style={{ marginBottom: '60px' }}>
              <div className="subpage-detail-card">
                <div className="subpage-card-header">
                  <div>
                    <span className="subpage-card-badge">Helhetlig Tilnærming</span>
                    <h2 className="subpage-card-title">Målrettet Fremgang & Trygghet</h2>
                  </div>
                </div>
                <p className="subpage-card-body">
                  Personlig trening hos Muskelklinikken handler om mer enn bare å gjennomføre økter. Vi tilbyr en helhetlig tilnærming til fysisk form, uansett om målet ditt er å forebygge skader, rehabilitere etter plager, gå ned i vekt, bygge styrke eller trene opp mot spesifikke prestasjoner.
                </p>
              </div>

              <div className="subpage-detail-card">
                <div className="subpage-card-header">
                  <div>
                    <span className="subpage-card-badge">Helsefaglig Bakgrunn</span>
                    <h2 className="subpage-card-title">Terapeuter & Trenere i Ett</h2>
                  </div>
                </div>
                <p className="subpage-card-body">
                  Våre personlige trenere har i tillegg til trenerutdanning også bakgrunn som autorisert helsepersonell (fysioterapi, muskelterapi). Dette gir en unik fordel: Vi forstår biomekanikk, skadepatologi og opptrening på et dyptgående nivå, slik at treningen din blir både trygg, effektiv og tilpasset dine unike utfordringer.
                </p>
              </div>
            </div>

            {/* Coaches Section */}
            <div style={{ marginBottom: '60px' }}>
              <div style={{ marginBottom: '32px' }}>
                <span className="section-tag-cyan">Ekspertise</span>
                <h2 className="subpage-title" style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)' }}>
                  Våre Trenere & Coacher
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '28px' }}>
                {COACHES.map((coach) => (
                  <div 
                    key={coach.name} 
                    className="subpage-detail-card"
                    style={{ 
                      alignItems: 'center', 
                      textAlign: 'center',
                      padding: '36px 24px',
                    }}
                  >
                    <div style={{ 
                      width: '130px', 
                      height: '130px', 
                      borderRadius: '50%', 
                      overflow: 'hidden', 
                      border: '2px solid var(--accent-coffee)', 
                      marginBottom: '20px', 
                      backgroundColor: 'var(--bg-surface)', 
                      flexShrink: 0 
                    }}>
                      <img 
                        src={coach.image} 
                        alt={coach.name} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                    </div>
                    <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', fontWeight: 700, marginBottom: '6px', color: 'var(--text-pure)' }}>
                      {coach.name}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--accent-coffee)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, marginBottom: coach.note ? '10px' : '24px' }}>
                      {coach.role}
                    </p>
                    {coach.note && (
                      <span style={{ fontSize: '0.78rem', color: 'var(--accent-coffee)', fontWeight: 600, backgroundColor: 'rgba(197, 155, 109, 0.12)', border: '1px solid rgba(197, 155, 109, 0.3)', padding: '4px 14px', borderRadius: '999px', marginBottom: '24px' }}>
                        {coach.note}
                      </span>
                    )}
                    <a 
                      href="https://psno-patient-platform-fe.svc.pasientsky.no/embedded/planner/booking?serviceProviderId=fb9771b2-5459-11e9-89e4-96d3108deae4" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-pill-solid" 
                      style={{ marginTop: 'auto', width: '100%', fontSize: '0.88rem', padding: '10px 20px' }}
                    >
                      Book time
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA Box */}
            <div className="subpage-cta-box">
              <div className="subpage-cta-content">
                <h3>Klar for å nå dine treningsmål?</h3>
                <p>Se våre PT-pakker og priser, eller ta kontakt for en personlig kartleggingssamtale.</p>
              </div>
              <div className="subpage-cta-actions">
                <a href="/priser" className="btn-pill-solid">
                  Se PT Priser & Pakker
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
