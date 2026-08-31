import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface PriceItem {
  name: string
  price: string
  desc?: string
}

interface PriceCategory {
  title: string
  description?: string
  items: PriceItem[]
}

const PRICE_CATEGORIES: PriceCategory[] = [
  {
    title: 'Fysikalsk behandling – Finn-Tore Camacho Bjørnsand',
    items: [
      { name: 'Konsultasjon – 25 minutter', price: '1 000 kr' },
      { name: 'Konsultasjon – 50 minutter', price: '2 000 kr' },
    ]
  },
  {
    title: 'Fysikalsk behandling – Øvrige terapeuter',
    description: 'Osteopater, fysioterapeuter, manuellterapeuter og idretts- & muskelterapeuter',
    items: [
      { name: 'Førstegangskonsultasjon (40 minutter)', price: '695 kr' },
      { name: 'Oppfølging (20 minutter)', price: '695 kr' },
      { name: 'Ultralyddiagnostikk / undersøkelse', price: '1 195 kr' },
    ]
  },
  {
    title: 'Priser for Alexander (Muskelterapi & Massasje)',
    items: [
      { name: 'Muskelterapi – 60 minutter', price: '990 kr' },
      { name: 'Muskelterapi – 20 minutter', price: '490 kr' },
      { name: 'Massasje – 30 minutter', price: '650 kr' },
      { name: 'Massasje – 60 minutter', price: '1 300 kr' },
    ]
  },
  {
    title: 'Fysisk testing & Prestasjonsanalyse',
    items: [
      { name: 'Fysisk testing – kraft & eksplosivitet', price: '3 000 kr', desc: 'Inkluderer fysisk testing og analyse, gjennomgang av resultater, samt individuelt kosthold- og treningsprogram for tre måneder.' },
      { name: 'VO₂-maks-test', price: '2 000 kr', desc: 'Måling av maksimalt oksygenopptak og aerob kapasitet.' },
      { name: 'VO₂-maks-test med laktatmåling', price: '2 500 kr', desc: 'Kombinert test som kartlegger maksimalt oksygenopptak, laktatprofil, terskler and intensitetssoner.' },
      { name: 'Komplett fysisk screening – hele pakken', price: '5 000 kr', desc: 'Inkluderer kraft/eksplosivitetstest, VO2-maks-test med laktatmåling, analyse, samt individuelt opplegg for 3 måneder. Du sparer 500 kr.' },
    ]
  },
  {
    title: 'Gentest – Muskelklinikken',
    items: [
      { name: 'Gentest – grunnpakke', price: '5 000 kr', desc: 'Inkluderer gentest og genetisk rapport. Personlig oppsummering er ikke inkludert.' },
      { name: 'Gentest med personlig oppsummering fra Finn-Tore', price: '6 500 kr', desc: 'Inkluderer gentest, rapport, skriftlig oppsummering og 15 minutters personlig gjennomgang med Finn-Tore Camacho Bjørnsand.' },
      { name: 'Gentest med ekspertgjennomgang fra Pierpaolo Zollo', price: '7 500 kr', desc: 'Inkluderer gentest samt grundig rapport og oppsummering fra Pierpaolo Zollo.' },
    ]
  },
  {
    title: 'Rapporter & Epikriser',
    items: [
      { name: 'Utfyllende rapport eller epikrise', price: '1 000 kr', desc: 'Utarbeidelse av faglig rapport til NAV, forsikringsselskap eller annet helsepersonell.' },
    ]
  }
]

export default function Priser() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '80vh', backgroundColor: 'var(--bg)' }}>
        <section style={{ paddingBlock: '80px' }}>
          <div className="container">
            <span className="overline" style={{ display: 'block', marginBottom: '12px', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-3)', fontWeight: 700 }}>
              Prisliste
            </span>
            <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', fontFamily: 'var(--font-chakra)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '20px', color: 'var(--text-1)', textTransform: 'uppercase' }}>
              Våre priser
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-2)', maxWidth: '800px', marginBottom: '60px', lineHeight: 1.6 }}>
              Vi tilbyr tverrfaglige helsetjenester tilpasset dine behov. Nedenfor finner du oversikt over priser for undersøkelser, behandlinger, testing og personlig oppfølging.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', maxWidth: '900px', marginBottom: '60px' }}>
              {PRICE_CATEGORIES.map((category) => (
                <div 
                  key={category.title} 
                  style={{ 
                    backgroundColor: 'var(--bg-card)', 
                    border: '1px solid var(--border)', 
                    borderRadius: '16px', 
                    padding: '36px', 
                    boxShadow: '0 4px 20px rgba(0,0,0,0.02)' 
                  }}
                >
                  <h2 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-chakra)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px', color: 'var(--text-1)' }}>
                    {category.title}
                  </h2>
                  {category.description && (
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-3)', fontStyle: 'italic', marginBottom: '20px' }}>
                      {category.description}
                    </p>
                  )}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: category.description ? '0px' : '20px' }}>
                    {category.items.map((item) => (
                      <div key={item.name} style={{ borderBottom: '1px solid rgba(0,0,0,0.04)', paddingBottom: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', alignItems: 'baseline' }}>
                          <span style={{ fontWeight: 600, color: 'var(--text-1)', fontSize: '1.05rem' }}>{item.name}</span>
                          <span style={{ fontWeight: 700, color: 'var(--text-1)', fontSize: '1.1rem', whiteSpace: 'nowrap' }}>{item.price}</span>
                        </div>
                        {item.desc && (
                          <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', marginTop: '6px', lineHeight: 1.5 }}>
                            {item.desc}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div 
                style={{ 
                  backgroundColor: 'var(--bg-surface)', 
                  border: '1px solid var(--border)', 
                  borderRadius: '16px', 
                  padding: '36px', 
                  boxShadow: '0 4px 20px rgba(0,0,0,0.02)' 
                }}
              >
                <h2 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-chakra)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '16px', color: 'var(--text-1)' }}>
                  Personlig trening & Mental coaching
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--text-2)', marginBottom: '20px' }}>
                  Vi tilbyr skreddersydde pakker for deg som ønsker en reell livsstilsendring, skadeopptrening, vektreduksjon, eller prestasjonsfremmende veiledning. Vi tilpasser oppfølgingen basert på hvem du er og dine personlige mål.
                </p>
                <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-1)', marginBottom: '24px' }}>
                  Kontakt oss i dag for en uforpliktende prat og et tilpasset tilbud!
                </p>
                <a href="/kontakt" className="btn btn-pill btn-black btn-md">
                  Ta kontakt for tilbud
                </a>
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '40px', maxWidth: '900px' }}>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-2)', lineHeight: 1.6 }}>
                💡 <strong>Helseforsikring:</strong> Vi samarbeider tett med de fleste store forsikringsselskapene (If, Storebrand, Gjensidige, Vertikal Helse, Falck). Har du godkjent helseforsikring, kan du få behandlingene dine dekket helt eller delvis. Vennligst ha godkjenningsnummeret ditt klart ved bestilling.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
