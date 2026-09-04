import Header from '@/components/Header'
import Footer from '@/components/Footer'

const TEAM = [
  { 
    name: 'Finn-Tore Camacho Bjørnsand', 
    role: 'Gründer & Faglig Leder', 
    image: '/images/team/Frame-14-2.webp',
    slug: 'finn-tore' 
  },
  { 
    name: 'Dr. Per Øystein', 
    role: 'Spesialist i Fysikalsk Medisin & Lege', 
    image: '/images/team/Rectangle-185.webp',
    slug: 'per-oystein' 
  },
  { 
    name: 'Carlos Alexander', 
    role: 'Muskelterapeut', 
    image: '/images/team/Alexander-.jpg',
    slug: 'carlos-alexander' 
  },
  { 
    name: 'Filip', 
    role: 'Fysioterapeut & Trener', 
    image: '/images/team/mk02-scaled.jpg',
    slug: 'filip' 
  },
  { 
    name: 'Ahmed', 
    role: 'Fysioterapeut & Osteopat', 
    image: '/images/team/Ahmed-scaled.jpg',
    slug: 'ahmed' 
  },
  { 
    name: 'Marius', 
    role: 'Fysioterapeut', 
    image: '/images/team/Marius-scaled.jpg',
    slug: 'marius' 
  },
  { 
    name: 'Trine Marie Skråmestø', 
    role: 'Muskelterapeut & Personlig Trener', 
    image: '/images/team/IMG_6671.webp',
    slug: 'trine-marie-skramesto' 
  },
  { 
    name: 'Victoria', 
    role: 'Fysioterapeut', 
    image: '/images/team/Frame-14-1-1.webp',
    slug: 'victoria' 
  },
  { 
    name: 'Kristian', 
    role: 'Fysioterapeut & Trener', 
    image: '/images/team/Rectangle-183.webp',
    slug: 'kristian' 
  },
]

export default function OmOss() {
  return (
    <>
      <Header />
      <main className="subpage-container">
        <section>
          <div className="container">
            {/* Header / Intro */}
            <div className="subpage-header-wrap">
              <span className="section-tag-cyan">Om oss</span>
              <h1 className="subpage-title">
                Muskelklinikken – Tverrfaglig helsesenter for behandling, trening og varig endring
              </h1>
              <p className="subpage-subtitle">
                Velkommen til Muskelklinikken – ditt kompetansesenter for helse og velvære i Oslo Sentrum.
              </p>
            </div>

            {/* Banner Image */}
            <div className="subpage-banner-card">
              <img 
                src="/images/om_oss_team_banner.jpg" 
                alt="Muskelklinikken Team" 
                className="subpage-banner-img"
                style={{ objectPosition: 'center 20%' }}
              />
            </div>
            
            {/* About Text Description */}
            <div style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-2)', maxWidth: '900px', marginBottom: '60px' }}>
              <p style={{ marginBottom: '20px' }}>
                Muskelklinikken er et moderne helsesenter og personlig treningsstudio der du får behandling og oppfølging av autorisert helsepersonell med høy faglig kompetanse. Vi tilbyr en helhetlig og evidensbasert tilnærming for å redusere smerter, styrke kroppen og forbedre livskvalitet. Vi kombinerer behandling og trening i et tett samarbeid mellom terapeuter og trenere. Hos oss får du skreddersydd hjelp basert på dine behov – enten du ønsker å prestere bedre, komme tilbake etter skade eller ta bedre vare på helsa.
              </p>
              <p style={{ marginBottom: '20px' }}>
                Vi har lang erfaring med å jobbe med både olympiske utøvere, landslagsspillere, profesjonelle idrettsutøvere og unge talenter. Samtidig brenner vi for å hjelpe alle – fra mosjonister til bedrifter som ønsker et sunnere arbeidsmiljø.
              </p>
              <p style={{ marginBottom: '20px' }}>
                For bedrifter tilbyr vi skreddersydde helseprogrammer og medlemskap som bidrar til lavere sykefravær, økt trivsel og bedre ytelse på jobb. Vi tror på proaktiv helse – ikke bare når skaden har skjedd – og hjelper dere med å investere i de ansatte.
              </p>
              <p>
                Vi holder oss faglig oppdatert gjennom internasjonale kurs og samarbeid med ledende fagmiljøer og professorer. Klinikken er bygget på verdier som fellesskap, faglig utvikling og et sterkt ønske om å skape varige resultater for våre kunder.
              </p>
            </div>
            
            {/* Team Grid */}
            <div id="team" style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '50px', scrollMarginTop: '100px' }}>
              <div style={{ marginBottom: '32px' }}>
                <span className="section-tag-cyan">Terapeuter & Trenere</span>
                <h2 className="section-title-large" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}>Vårt tverrfaglige team</h2>
                <p className="section-desc-center" style={{ textAlign: 'left', marginInline: 0 }}>
                  Våre terapeuter underviser internasjonalt, holder seg kontinuerlig oppdatert og samarbeider tett for å gi deg best mulig oppfølging.
                </p>
              </div>

              <div className="responsive-team-grid">
                {TEAM.map((member) => (
                  <div 
                    key={member.name} 
                    className="subpage-detail-card"
                    style={{ 
                      alignItems: 'center', 
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ 
                      width: '120px', 
                      height: '120px', 
                      borderRadius: '50%', 
                      overflow: 'hidden', 
                      border: '2px solid var(--accent-coffee)', 
                      marginBottom: '20px', 
                      backgroundColor: 'var(--bg-surface)', 
                      flexShrink: 0 
                    }}>
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                    </div>
                    <h3 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-heading)', fontWeight: 700, marginBottom: '6px', color: 'var(--text-pure)' }}>
                      {member.name}
                    </h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--accent-coffee)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '24px', lineHeight: 1.4 }}>
                      {member.role}
                    </p>
                    <a 
                      href="https://psno-patient-platform-fe.svc.pasientsky.no/embedded/planner/booking?serviceProviderId=fb9771b2-5459-11e9-89e4-96d3108deae4" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-pill-outline btn-sm" 
                      style={{ marginTop: 'auto', width: '100%', fontWeight: 600 }}
                    >
                      Book time
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
