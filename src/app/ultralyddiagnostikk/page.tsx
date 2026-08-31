import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Ultralyddiagnostikk() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '80vh', backgroundColor: 'var(--bg)' }}>
        <section style={{ paddingBlock: '80px' }}>
          <div className="container">
            <span className="overline" style={{ display: 'block', marginBottom: '12px', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-3)', fontWeight: 700 }}>
              Tjenester
            </span>
            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontFamily: 'var(--font-serif)', fontWeight: 700, lineHeight: 1.15, marginBottom: '20px', color: 'var(--text-1)' }}>
              Ultralyddiagnostikk hos Muskelklinikken
            </h1>
            <p style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--text-2)', marginBottom: '40px', lineHeight: 1.5 }}>
              Presis innsikt – tryggere behandling
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center', marginBottom: '60px' }}>
              <div style={{ fontSize: '1.08rem', lineHeight: 1.8, color: 'var(--text-2)' }}>
                <p style={{ marginBottom: '24px' }}>
                  Hos Muskelklinikken benytter vi avansert ultralyddiagnostikk for å gi deg raskere og mer presis vurdering av muskel- og skjelettplager. Våre erfarne terapeuter har lang og spesialisert kompetanse innen ultralyddiagnostikk, og bruker det som et effektivt verktøy for å kartlegge skader, betennelser og strukturelle forandringer i kroppen – helt uten ubehag eller stråling.
                </p>
                <p style={{ marginBottom: '24px' }}>
                  Ultralyddiagnostikk er en trygg, skånsom og svært nøyaktig metode hvor høyfrekvente lydbølger gir levende bilder i sanntid. Dette gjør det mulig for oss å undersøke sener, muskler, leddbånd og slimposer mens du beveger deg, noe som gir et unikt innblikk i hvordan vevet faktisk fungerer under belastning.
                </p>
                <p style={{ marginBottom: '24px' }}>
                  Vi bruker ultralyd aktivt i både diagnostikk, oppfølging og som støtte til behandlingsvalg. Dette gir deg som pasient en tryggere opplevelse og øker sannsynligheten for målrettet og effektiv behandling.
                </p>
                <p style={{ fontWeight: 600, color: 'var(--text-1)', margin: 0 }}>
                  Opplev tryggheten i å bli sett – helt inn i kroppens kjernestrukturer – av fagfolk som virkelig kan faget. Hos oss er du i gode hender.
                </p>
              </div>
              <div style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--border)', height: '400px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                <img 
                  src="/images/service_injection.png" 
                  alt="Ultralyddiagnostikk hos Muskelklinikken" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', borderTop: '1px solid var(--border)', paddingTop: '40px' }}>
              <a
                href="https://psno-patient-platform-fe.svc.pasientsky.no/embedded/planner/booking?serviceProviderId=fb9771b2-5459-11e9-89e4-96d3108deae4"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-pill btn-black btn-lg"
              >
                Book ultralydundersøkelse
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
