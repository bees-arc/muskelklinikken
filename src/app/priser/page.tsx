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
            <div style={{ textAlign: 'center', maxWidth: '820px', marginInline: 'auto', marginBottom: '60px' }}>
              <span className="overline" style={{ display: 'block', marginBottom: '12px', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-3)', fontWeight: 700 }}>
                Prisliste
              </span>
              <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontFamily: 'var(--font-chakra)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '20px', color: 'var(--text-1)', textTransform: 'uppercase' }}>
                Våre priser
              </h1>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-2)', lineHeight: 1.6, marginInline: 'auto' }}>
                Vi tilbyr tverrfaglige helsetjenester tilpasset dine behov. Nedenfor finner du oversikt over priser for undersøkelser, behandlinger, testing og personlig oppfølging.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '36px', maxWidth: '1050px', marginInline: 'auto', width: '100%', marginBottom: '60px' }}>
              {PRICE_CATEGORIES.map((category) => (
                <div 
                  key={category.title} 
                  style={{ 
                    backgroundColor: 'var(--bg-card)', 
                    border: '1px solid var(--border)', 
                    borderRadius: '20px', 
                    padding: '40px 48px', 
                    boxShadow: '0 4px 24px rgba(0,0,0,0.02)' 
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', borderBottom: '1px solid var(--border)', paddingBottom: '16px', marginBottom: '24px' }}>
                    <h2 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-chakra)', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-1)', margin: 0 }}>
                      {category.title}
                    </h2>
                    {category.description && (
                      <span style={{ fontSize: '0.88rem', color: 'var(--text-3)', fontStyle: 'italic' }}>
                        {category.description}
                      </span>
                    )}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {category.items.map((item) => (
                      <div key={item.name} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '24px', alignItems: 'baseline' }}>
                          <span style={{ fontWeight: 600, color: 'var(--text-1)', fontSize: '1.08rem' }}>{item.name}</span>
                          <span style={{ 
                            fontWeight: 700, 
                            fontFamily: 'var(--font-chakra)', 
                            color: 'var(--text-1)', 
                            fontSize: '1.15rem', 
                            whiteSpace: 'nowrap',
                            backgroundColor: 'var(--bg-surface)',
                            padding: '6px 14px',
                            borderRadius: '8px',
                            border: '1px solid var(--border)'
                          }}>
                            {item.price}
                          </span>
                        </div>
                        {item.desc && (
                          <p style={{ fontSize: '0.92rem', color: 'var(--text-2)', marginTop: '8px', lineHeight: 1.6, maxWidth: '850px' }}>
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
                  borderRadius: '20px', 
                  padding: '40px 48px', 
                  boxShadow: '0 4px 24px rgba(0,0,0,0.02)' 
                }}
              >
                <h2 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-chakra)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '16px', color: 'var(--text-1)' }}>
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

            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '40px', maxWidth: '1050px', marginInline: 'auto' }}>
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
