import Header from '@/components/Header'
import Footer from '@/components/Footer'

const SPECIALTIES = [
  { title: 'Fysioterapi', desc: 'Behandling av muskler, ledd, sener og nerver for å lindre smerter, øke mobilitet og gjenopprette normal funksjon.' },
  { title: 'Osteopati', desc: 'En helhetlig manuell behandlingsform som ser sammenhengen mellom kroppens struktur, funksjon, organsystemer og bevegelsesapparat.' },
  { title: 'Idretts- & Muskelterapi', desc: 'Dypgående massasje, triggerpunktbehandling, tøyning og trykkbølgebehandling rettet mot idrettsskader og muskelspenninger.' },
  { title: 'Rehabilitering & Opptrening', desc: 'Skreddersydde trenings- og rehabiliteringsøvelser som hjelper deg tryggest mulig tilbake til hverdagen eller idretten etter skade eller operasjon.' },
]

export default function FysikalskBehandling() {
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
              Fysikalsk behandling hos Muskelklinikken
            </h1>
            <p style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--text-2)', marginBottom: '40px', lineHeight: 1.5 }}>
              En helhetlig, tverrfaglig og moderne tilnærming til smerte, rehabilitering og bevegelsesglede.
            </p>

            <div style={{ width: '100%', height: '350px', borderRadius: '24px', overflow: 'hidden', marginBottom: '50px', border: '1px solid var(--border)' }}>
              <img 
                src="/images/service_physical.webp" 
                alt="Fysikalsk behandling hos Muskelklinikken" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            
            <div style={{ fontSize: '1.08rem', lineHeight: 1.8, color: 'var(--text-2)', maxWidth: '900px', marginBottom: '60px' }}>
              <p style={{ marginBottom: '24px' }}>
                Vi er stolte av å være eksperter innen vårt felt. Våre terapeuter underviser internasjonalt og holder seg kontinuerlig oppdatert ved å delta på kurs årlig og samarbeide med anerkjente institutter og professorer. Vi tror på evidensbasert kunnskap for å gi deg det absolutt beste resultatet.
              </p>
              <p style={{ marginBottom: '24px' }}>
                Vårt team har bred utdanning innen fysioterapi, osteopati, manuellterapi, idrettsmedisin, trykkbølgebehandling, og vi er sertifiserte idrett- og rehabiliteringsspesialister. Vi samarbeider også tett med vår lege for å tilby avanserte tjenester som ultralyddiagnostikk og injeksjonsterapier (PRP og proloterapi) når det er nødvendig.
              </p>
              <p style={{ marginBottom: '24px' }}>
                Hos oss er du i trygge hender. Vi ser hele mennesket, kartlegger årsakene bak smerten din, og hjelper deg på veien mot en smertefri og bedre hverdag.
              </p>
            </div>
            
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '60px', marginBottom: '60px' }}>
              <h2 style={{ fontSize: '2.2rem', fontFamily: 'var(--font-serif)', marginBottom: '40px', color: 'var(--text-1)' }}>Våre fagområder</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                {SPECIALTIES.map((spec) => (
                  <div 
                    key={spec.title} 
                    style={{ 
                      backgroundColor: 'var(--bg-card)', 
                      border: '1px solid var(--border)', 
                      borderRadius: '16px', 
                      padding: '30px', 
                      boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                    }}
                  >
                    <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', fontWeight: 700, marginBottom: '12px', color: 'var(--text-1)' }}>{spec.title}</h3>
                    <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--text-2)' }}>{spec.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', borderTop: '1px solid var(--border)', paddingTop: '40px' }}>
              <a
                href="https://psno-patient-platform-fe.svc.pasientsky.no/embedded/planner/booking?serviceProviderId=fb9771b2-5459-11e9-89e4-96d3108deae4"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-pill btn-black btn-lg"
              >
                Bestill time online
              </a>
              <a href="/priser" className="btn btn-pill btn-outline btn-lg">
                Se priser
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
