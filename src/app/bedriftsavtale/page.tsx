import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Bedriftsavtale() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '80vh', backgroundColor: 'var(--bg)' }}>
        <section style={{ paddingBlock: '80px' }}>
          <div className="container">
            <span className="overline" style={{ display: 'block', marginBottom: '12px', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-3)', fontWeight: 700 }}>
              Tjenester
            </span>
            <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', fontFamily: 'var(--font-chakra)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '20px', color: 'var(--text-1)', textTransform: 'uppercase' }}>
              Bedriftsavtaler & Trening
            </h1>
            <p style={{ fontSize: '1.15rem', fontFamily: 'var(--font-chakra)', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--text-2)', marginBottom: '40px', lineHeight: 1.5 }}>
              Invester i dine ansattes helse – reduser sykefravær og øk trivsel.
            </p>

            <div style={{ width: '100%', height: '350px', borderRadius: '24px', overflow: 'hidden', marginBottom: '50px', border: '1px solid var(--border)' }}>
              <img 
                src="/images/service_bedrift.webp" 
                alt="Bedriftstrening og helsetjenester hos Muskelklinikken" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.8) contrast(1.05) brightness(0.95)' }} 
              />
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '60px' }}>
              <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', padding: '40px 30px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                <h2 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-chakra)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '20px', color: 'var(--text-1)' }}>
                  Bedriftstrening
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--text-2)' }}>
                  Friske ansatte yter bedre – og trives mer. Vi tilbyr skreddersydd bedriftstrening både på Muskelklinikken, ute hos bedriften eller utendørs. Våre erfarne terapeuter og trenere leder alt fra sirkeltrening, løpegrupper og styrkeøkter, til spesialtilpasset opptrening mot arrangementer som Holmenkollstafetten og Sentrumsløpet. Vi tilbyr også effektive jobbstrekk og mikropauser på arbeidsplassen, som kan bidra til redusert sykefravær og økt energi i arbeidshverdagen. Treningstilbudet er fleksibelt og kan tilpassen ulike grupper, behov og ambisjonsnivå – fra enkle helseøkter til prestasjonsfremmende treningsopplegg. Vi hjelper dere å bygge en aktiv og motiverende bedriftskultur.
                </p>
              </div>

              <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', padding: '40px 30px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                <h2 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-chakra)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '20px', color: 'var(--text-1)' }}>
                  Bedriftsbehandling
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--text-2)' }}>
                  Vi vet at muskel- og skjelettplager er en av de vanligste årsakene til sykefravær. Med våre bedriftsavtaler kan dere tilby behandling direkte på arbeidsplassen. Våre terapeuter kommer til dere med alt nødvendig utstyr, slik at ansatte slipper å bruke tid på reise og venting. Vi tilbyr fysioterapi, idretts- og muskelterapi og behandlinger tilpasset både akutte og langvarige plager. Bedriftsbehandling øker tilgjengeligheten, forbedrer trivselen og kan være en kostnadseffektiv måte å investere i ansattes helse og velvære.
                </p>
              </div>

              <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', padding: '40px 30px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', gridColumn: '1 / -1' }}>
                <h2 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-chakra)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '20px', color: 'var(--text-1)' }}>
                  Coaching og mentaltrening
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--text-2)' }}>
                  Vi tilbyr foredrag, workshops og individuell coaching for å styrke mental trivsel, forebygge stress og utvikle gode relasjoner på arbeidsplassen. Vår tilnærming passer like godt for ledere som ønsker å utvikle sitt potensial, som for team og ansatte som trenger støtte i endringsprosesser eller utfordrende situasjoner. Vi hjelper dere å bygge en sterk, motstandsdyktig og prestasjonsfremmende kultur, med fokus på både produktivitet og menneskelig utvikling.
                </p>
              </div>
            </div>
            
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '40px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="/kontakt" className="btn btn-pill btn-black btn-lg">
                Få et uforpliktende tilbud
              </a>
              <a href="tel:+4791907760" className="btn btn-pill btn-outline btn-lg">
                Ring oss: 919 07 760
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
