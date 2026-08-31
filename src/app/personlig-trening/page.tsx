import Header from '@/components/Header'
import Footer from '@/components/Footer'

const COACHES = [
  { name: 'Finn-Tore Camacho Bjørnsand', role: 'Gründer & Prestasjonscoach', note: 'Kun private kunder' },
  { name: 'Filip', role: 'Personlig Trener & Fysioterapeut' },
  { name: 'Trine Marie Skråmestø', role: 'Personlig Trener & Terapeut' },
  { name: 'Kristian', role: 'Personlig Trener & Fysioterapeut' },
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
                ⚠️ Merk: Finn-Tore tar ikke imot forsikringspasienter, kun private kunder.
              </p>
            </div>

            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontFamily: 'var(--font-serif)', fontWeight: 700, lineHeight: 1.15, marginBottom: '20px', color: 'var(--text-1)' }}>
              Personlig trening hos Muskelklinikken
            </h1>
            <p style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--text-2)', marginBottom: '40px', lineHeight: 1.5 }}>
              Skreddersydd trening tilpasset din kropp, dine mål og din hverdag.
            </p>
            
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
              <h2 style={{ fontSize: '2.2rem', fontFamily: 'var(--font-serif)', marginBottom: '32px', color: 'var(--text-1)' }}>Våre Trenere & Coacher</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px', marginBottom: '60px' }}>
                {COACHES.map((coach) => (
                  <div 
                    key={coach.name} 
                    style={{ 
                      backgroundColor: 'var(--bg-card)', 
                      border: '1px solid var(--border)', 
                      borderRadius: '16px', 
                      padding: '36px 30px', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      textAlign: 'center',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                    }}
                  >
                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--bg-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.2rem', marginBottom: '20px' }}>
                      🏋️
                    </div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '6px', color: 'var(--text-1)' }}>{coach.name}</h3>
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
