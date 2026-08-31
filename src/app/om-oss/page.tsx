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
      <main style={{ paddingTop: '100px', minHeight: '80vh', backgroundColor: 'var(--bg)' }}>
        <section style={{ paddingBlock: '80px' }}>
          <div className="container">
            <span className="overline" style={{ display: 'block', marginBottom: '12px', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-3)', fontWeight: 700 }}>
              Om oss
            </span>
            <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', fontFamily: 'var(--font-chakra)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '20px', color: 'var(--text-1)', textTransform: 'uppercase' }}>
              Muskelklinikken – Tverrfaglig helsesenter for behandling, trening og varig endring
            </h1>

            <p style={{ fontSize: '1.15rem', fontFamily: 'var(--font-chakra)', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--text-2)', marginBottom: '40px', lineHeight: 1.5 }}>
              Velkommen til Muskelklinikken – ditt kompetansesenter for helse og velvære!
            </p>

            <div style={{ width: '100%', height: '460px', borderRadius: '24px', overflow: 'hidden', marginBottom: '50px', border: '1px solid var(--border)', boxShadow: '0 8px 30px rgba(0,0,0,0.06)' }}>
              <img 
                src="/images/om_oss_team_banner.jpg" 
                alt="Muskelklinikken Team" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} 
              />
            </div>
            
            <div style={{ fontSize: '1.08rem', lineHeight: 1.8, color: 'var(--text-2)', maxWidth: '900px', marginBottom: '80px', fontFamily: 'var(--font-body)' }}>
              <p style={{ marginBottom: '24px' }}>
                Muskelklinikken er et moderne helsesenter og personlig treningsstudio der du får behandling og oppfølging av autorisert helsepersonell med høy faglig kompetanse. Vi tilbyr en helhetlig og evidensbasert tilnærming for å redusere smerter, styrke kroppen og forbedre livskvalitet. Vi kombinerer behandling og trening i et tett samarbeid mellom terapeuter og trenere. Hos oss får du skreddersydd hjelp basert på dine behov – enten du ønsker å prestere bedre, komme tilbake etter skade eller ta bedre vare på helsa.
              </p>
              <p style={{ marginBottom: '24px' }}>
                Vi har lang erfaring med å jobbe med både olympiske utøvere, landslagsspillere, profesjonelle idrettsutøvere og unge talenter. Samtidig brenner vi for å hjelpe alle – fra mosjonister to bedrifter som ønsker et sunnere arbeidsmiljø.
              </p>
              <p style={{ marginBottom: '24px' }}>
                For bedrifter tilbyr vi skreddersydde helseprogrammer og medlemskap som bidrar to lavere sykefravær, økt trivsel og bedre ytelse på jobb. Vi tror på proaktiv helse – ikke bare når skaden har skjedd – og hjelper dere med å investere i de ansatte.
              </p>
              <p style={{ marginBottom: '24px' }}>
                Vi holder oss faglig oppdatert gjennom internasjonale kurs og samarbeid med ledende fagmiljøer og professorer. Klinikken er bygget på verdier som fellesskap, faglig utvikling og et sterkt ønske om å skape varige resultater for våre kunder. Du er i trygge hender hos oss. Velkommen to Muskelklinikken – der helse møter kvalitet og mennesket står i sentrum.
              </p>
            </div>
            
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '60px' }}>
              <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-chakra)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '12px', color: 'var(--text-1)' }}>Teamet</h2>
              <p style={{ color: 'var(--text-2)', marginBottom: '40px', fontSize: '1.05rem', fontFamily: 'var(--font-body)' }}>Våre terapeuter underviser internasjonalt, holder seg kontinuerlig oppdatert og samarbeider tett for å gi deg best mulig oppfølging.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px' }}>
                {TEAM.map((member) => (
                  <div 
                    key={member.name} 
                    style={{ 
                      backgroundColor: 'var(--bg-card)', 
                      border: '1px solid var(--border)', 
                      borderRadius: '20px', 
                      padding: '36px 24px', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      textAlign: 'center',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                    }}
                  >
                    <div style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--border)', marginBottom: '20px', backgroundColor: 'var(--bg-surface)', flexShrink: 0 }}>
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                    </div>
                    <h3 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-chakra)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px', color: 'var(--text-1)' }}>{member.name}</h3>
                    <p style={{ fontSize: '0.85rem', fontFamily: 'var(--font-sans)', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '24px', lineHeight: 1.4 }}>{member.role}</p>
                    <a 
                      href="https://psno-patient-platform-fe.svc.pasientsky.no/embedded/planner/booking?serviceProviderId=fb9771b2-5459-11e9-89e4-96d3108deae4" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-pill btn-outline btn-sm" 
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
