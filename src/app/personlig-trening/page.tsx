import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
      <main style={{ paddingTop: '100px', minHeight: '80vh', backgroundColor: 'var(--bg)' }}>
        <section style={{ paddingBlock: '80px' }}>
          <div className="container">
            <span className="overline" style={{ display: 'block', marginBottom: '12px', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-3)', fontWeight: 700 }}>
              Tjenester
            </span>
            
            <div style={{ backgroundColor: 'rgba(219, 68, 85, 0.06)', border: '1px solid rgba(219, 68, 85, 0.2)', padding: '16px 24px', borderRadius: '12px', marginBottom: '32px', maxWidth: '900px' }}>
              <p style={{ color: '#db4455', fontWeight: 600, fontSize: '0.95rem', margin: 0 }}>
                Merk: Finn-Tore tar ikke imot forsikringspasienter, kun private kunder.
              </p>
            </div>

            <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', fontFamily: 'var(--font-chakra)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '20px', color: 'var(--text-1)', textTransform: 'uppercase' }}>
              Personlig trening hos Muskelklinikken
            </h1>
            <p style={{ fontSize: '1.15rem', fontFamily: 'var(--font-chakra)', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--text-2)', marginBottom: '40px', lineHeight: 1.5 }}>
              Skreddersydd trening tilpasset din kropp, dine mål og din hverdag.
            </p>

            <div style={{ width: '100%', height: '350px', borderRadius: '24px', overflow: 'hidden', marginBottom: '50px', border: '1px solid var(--border)' }}>
              <img 
                src="https://muskelklinikken.no/wp-content/uploads/2023/12/Rectangle-160.webp" 
                alt="Personlig trening hos Muskelklinikken" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.8) contrast(1.05) brightness(0.95)' }} 
              />
            </div>
            
            <div style={{ fontSize: '1.08rem', lineHeight: 1.8, color: 'var(--text-2)', maxWidth: '900px', marginBottom: '60px' }}>
              <p style={{ marginBottom: '24px' }}>
                Personlig trening hos Muskelklinikken handler om mer enn bare å gjennomføre økter. Vi tilbyr en helhetlig tilnærming til fysisk form, uansett om målet ditt er å forebygge skader, rehabilitere etter plager, gå ned i vekt, bygge styrke eller trene opp mot spesifikke prestasjoner.
              </p>
              <p style={{ marginBottom: '24px' }}>
                Våre personlige trenere har i tillegg til trenerutdanning også bakgrunn som autorisert helsepersonell (fysioterapi, muskelterapi). Dette gir oss en unik fordel: Vi forstår biomekanikk, skadepatologi og opptrening på et dyptgående nivå, slik at treningen din blir både trygg, effektiv og tilpasset dine unike utfordringer.
              </p>
              <p style={{ marginBottom: '24px' }}>
                Uansett om du er toppidrettsutøver, mosjonist, eller en travel person med en hektisk hverdag – vi hjelper deg i forhold til hvem du er og hva du ønsker å oppnå.
              </p>
            </div>
            
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '60px' }}>
              <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-chakra)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '32px', color: 'var(--text-1)' }}>Våre Trenere & Coacher</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px', marginBottom: '60px' }}>
                {COACHES.map((coach) => (
                  <div 
                    key={coach.name} 
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
                        src={coach.image} 
                        alt={coach.name} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                    </div>
                    <h3 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-chakra)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px', color: 'var(--text-1)' }}>{coach.name}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: coach.note ? '10px' : '20px' }}>{coach.role}</p>
                    {coach.note && (
                      <span style={{ fontSize: '0.8rem', color: '#db4455', fontWeight: 600, backgroundColor: 'rgba(219,68,85,0.08)', padding: '4px 12px', borderRadius: '100px', marginBottom: '20px' }}>
                        {coach.note}
                      </span>
                    )}
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
            
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', borderTop: '1px solid var(--border)', paddingTop: '40px' }}>
              <a href="/priser" className="btn btn-pill btn-black btn-lg">
                Se PT Priser
              </a>
              <a href="/kontakt" className="btn btn-pill btn-outline btn-lg">
                Kontakt oss
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
