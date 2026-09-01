import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnnouncementBar from '@/components/AnnouncementBar'

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
    ],
  },
  {
    title: 'Fysikalsk behandling – Øvrige terapeuter',
    description: 'Osteopater, fysioterapeuter, manuellterapeuter og idretts- & muskelterapeuter',
    items: [
      { name: 'Førstegangskonsultasjon (40 minutter)', price: '695 kr' },
      { name: 'Oppfølging (20 minutter)', price: '695 kr' },
      { name: 'Ultralyddiagnostikk / undersøkelse', price: '1 195 kr' },
    ],
  },
  {
    title: 'Priser for Alexander (Muskelterapi & Massasje)',
    items: [
      { name: 'Muskelterapi – 60 minutter', price: '990 kr' },
      { name: 'Muskelterapi – 20 minutter', price: '490 kr' },
      { name: 'Massasje – 30 minutter', price: '650 kr' },
      { name: 'Massasje – 60 minutter', price: '1 300 kr' },
    ],
  },
  {
    title: 'Fysisk testing & Prestasjonsanalyse',
    items: [
      {
        name: 'Fysisk testing – kraft & eksplosivitet',
        price: '3 000 kr',
        desc: 'Inkluderer fysisk testing og analyse, gjennomgang av resultater, samt individuelt kosthold- og treningsprogram for tre måneder.',
      },
      {
        name: 'VO₂-maks-test',
        price: '2 000 kr',
        desc: 'Måling av maksimalt oksygenopptak og aerob kapasitet for presis styring av utholdenhetstrening.',
      },
      {
        name: 'VO₂-maks-test med laktatmåling',
        price: '2 500 kr',
        desc: 'Kombinert test som kartlegger maksimalt oksygenopptak, laktatprofil, terskler og individuelle intensitetssoner.',
      },
      {
        name: 'Komplett fysisk screening – hele pakken',
        price: '5 000 kr',
        desc: 'Inkluderer kraft/eksplosivitetstest, VO₂-maks-test med laktatmåling, analyse samt individuelt trenings- og kostholdsopplegg for 3 måneder. Pakkepris – du sparer 500 kr.',
      },
    ],
  },
  {
    title: 'Gentest – Muskelklinikken',
    items: [
      {
        name: 'Gentest – grunnpakke',
        price: '5 000 kr',
        desc: 'Inkluderer gentest og omfattende genetisk rapport. Personlig oppsummering er ikke inkludert.',
      },
      {
        name: 'Gentest med personlig oppsummering fra Finn-Tore',
        price: '6 500 kr',
        desc: 'Inkluderer gentest, rapport, skriftlig oppsummering og 15 minutters personlig gjennomgang med Finn-Tore Camacho Bjørnsand.',
      },
      {
        name: 'Gentest med ekspertgjennomgang fra Pierpaolo Zollo',
        price: '7 500 kr',
        desc: 'Inkluderer gentest samt grundig rapport og oppsummering fra genetikkekspert Pierpaolo Zollo.',
      },
    ],
  },
  {
    title: 'Rapporter & Epikriser',
    items: [
      {
        name: 'Utfyllende rapport eller epikrise',
        price: '1 000 kr',
        desc: 'Utarbeidelse av faglig rapport til NAV, forsikringsselskap eller annet helsepersonell. Dokumentet tilpasses formålet.',
      },
    ],
  },
]

export default function Priser() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main style={{ paddingTop: '40px', minHeight: '80vh', backgroundColor: 'var(--bg-main)' }}>
        <section style={{ paddingBlock: '60px 100px' }}>
          <div className="container">
            {/* Header */}
            <div style={{ textAlign: 'center', maxWidth: '820px', marginInline: 'auto', marginBottom: '60px' }}>
              <span className="section-tag-cyan" style={{ justifyContent: 'center' }}>
                Prisoversikt
              </span>
              <h1 className="section-title-large">
                Transparente priser — <em className="accent-serif">forankret i kvalitet</em>
              </h1>
              <p className="section-desc-center">
                Vi tilbyr tverrfaglige helsetjenester tilpasset dine behov. Nedenfor finner du en fullstendig oversikt over våre priser for undersøkelser, behandlinger, prestasjonstesting og gentester.
              </p>
            </div>

            {/* Price Category Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '1080px', marginInline: 'auto', width: '100%', marginBottom: '56px' }}>
              {PRICE_CATEGORIES.map((category) => (
                <div
                  key={category.title}
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-card)',
                    borderRadius: '28px',
                    padding: '36px 40px',
                    boxShadow: 'var(--shadow-md)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '18px', marginBottom: '24px' }}>
                    <h2 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                      {category.title}
                    </h2>
                    {category.description && (
                      <span style={{ fontSize: '0.84rem', color: 'var(--accent-coffee)', fontWeight: 600 }}>
                        {category.description}
                      </span>
                    )}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {category.items.map((item) => (
                      <div key={item.name} style={{ borderBottom: '1px solid rgba(255, 245, 235, 0.05)', paddingBottom: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '24px', alignItems: 'baseline' }}>
                          <span style={{ fontWeight: 600, color: 'var(--text-1)', fontSize: '1.05rem' }}>
                            {item.name}
                          </span>
                          <span
                            style={{
                              fontWeight: 700,
                              fontFamily: 'var(--font-heading)',
                              color: 'var(--accent-coffee)',
                              fontSize: '1.15rem',
                              whiteSpace: 'nowrap',
                              backgroundColor: 'rgba(197, 155, 109, 0.12)',
                              padding: '4px 14px',
                              borderRadius: '999px',
                              border: '1px solid rgba(197, 155, 109, 0.3)',
                            }}
                          >
                            {item.price}
                          </span>
                        </div>
                        {item.desc && (
                          <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', marginTop: '8px', lineHeight: 1.6, maxWidth: '900px' }}>
                            {item.desc}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Personal Training & Coaching Card */}
              <div
                style={{
                  background: 'linear-gradient(135deg, #18130f 0%, #201a14 100%)',
                  border: '1px solid rgba(197, 155, 109, 0.35)',
                  borderRadius: '28px',
                  padding: '40px',
                  boxShadow: 'var(--shadow-lg), var(--shadow-coffee)',
                }}
              >
                <div style={{ display: 'inline-block', background: 'rgba(197, 155, 109, 0.18)', color: 'var(--accent-coffee)', padding: '4px 12px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '14px' }}>
                  Skreddersydd Oppfølging
                </div>
                <h2 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)', fontWeight: 700, marginBottom: '14px', color: '#ffffff' }}>
                  Personlig trening, coaching og mentaltrening
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--text-2)', marginBottom: '16px' }}>
                  Vi tilbyr individuell oppfølging for deg som ønsker en reell livsstilsendring, forbedre helsen din, prestere bedre, bygge muskler, redusere vekt eller komme tilbake etter skade. Vi har erfaring med alt fra unge talenter og hverdagsmosjonister til OL-utøvere og landslagsspillere.
                </p>
                <p style={{ fontSize: '1rem', fontWeight: 600, color: '#ffffff', marginBottom: '24px' }}>
                  Ta kontakt i dag for et uforpliktende tilbud tilpasset dine mål.
                </p>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <a
                    href="https://psno-patient-platform-fe.svc.pasientsky.no/embedded/planner/booking?serviceProviderId=fb9771b2-5459-11e9-89e4-96d3108deae4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill-solid"
                  >
                    Book konsultasjon
                  </a>
                  <a href="/kontakt" className="btn-pill-outline">
                    Kontakt oss for tilbud
                  </a>
                </div>
              </div>
            </div>

            {/* Insurance Note Footer */}
            <div
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-card)',
                borderRadius: '20px',
                padding: '24px 32px',
                maxWidth: '1080px',
                marginInline: 'auto',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <span style={{ fontSize: '1.8rem' }}>🛡️</span>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-2)', lineHeight: 1.6, margin: 0 }}>
                <strong style={{ color: '#ffffff' }}>Helseforsikring:</strong> Vi samarbeider tett med flere aktører i forsikringsbransjen (If, Storebrand, Gjensidige, Vertikal Helse, Falck, Fremtind). Har du godkjent helseforsikring, kan du få behandlingen hos oss helt eller delvis dekket – uten lang ventetid.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
