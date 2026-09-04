import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Bedriftsavtaler & Bedriftstrening – Muskelklinikken',
  description:
    'Friske ansatte yter bedre. Vi tilbyr skreddersydd bedriftstrening, bedriftsbehandling på arbeidsplassen og mentaltrening i Oslo.',
}

export default function Bedriftsavtale() {
  return (
    <>
      <Header />
      <main className="subpage-container">
        <section>
          <div className="container">
            {/* Header / Intro */}
            <div className="subpage-header-wrap">
              <span className="section-tag-cyan">Bedriftshelse & Prestasjon</span>
              <h1 className="subpage-title">
                Bedriftsavtaler & Trening
              </h1>
              <p className="subpage-subtitle">
                Invester i dine ansattes helse, trivsel og prestasjonsevne. Vi tilbyr skreddersydde bedriftsløsninger direkte på deres arbeidsplass eller i våre moderne lokaler i Oslo Sentrum.
              </p>
            </div>

            {/* Featured Image Banner */}
            <div className="subpage-banner-card">
              <img
                src="/images/service_bedrift.webp"
                alt="Bedriftstrening og bedriftsbehandling hos Muskelklinikken"
                className="subpage-banner-img"
              />
            </div>

            {/* Core Services Grid */}
            <div className="subpage-grid-2">
              {/* Card 1: Bedriftstrening */}
              <div className="subpage-detail-card">
                <div className="subpage-card-header">
                  <div>
                    <span className="subpage-card-badge">Fysisk Aktivitet & Kultur</span>
                    <h2 className="subpage-card-title">Bedriftstrening</h2>
                  </div>
                </div>

                <p className="subpage-card-body">
                  Friske ansatte yter bedre – og trives mer. Vi tilbyr skreddersydd bedriftstrening både på Muskelklinikken, ute hos bedriften eller utendørs. Våre erfarne terapeuter og trenere leder alt fra sirkeltrening, løpegrupper og styrkeøkter, til spesialtilpasset opptrening mot arrangementer som Holmenkollstafetten og Sentrumsløpet. Vi tilbyr også effektive jobbstrekk og mikropauser på arbeidsplassen, som kan bidra til redusert sykefravær og økt energi i arbeidshverdagen. Treningstilbudet er fleksibelt og kan tilpasses ulike grupper, behov og ambisjonsnivå – fra enkle helseøkter til prestasjonsfremmende treningsopplegg. Vi hjelper dere å bygge en aktiv og motiverende bedriftskultur.
                </p>

                <ul className="subpage-feature-list">
                  <li className="subpage-feature-item">
                    <span>Sirkeltrening, løpegrupper og felles styrkeøkter</span>
                  </li>
                  <li className="subpage-feature-item">
                    <span>Opptrening mot Holmenkollstafetten og Sentrumsløpet</span>
                  </li>
                  <li className="subpage-feature-item">
                    <span>Effektive jobbstrekk og energigivende mikropauser</span>
                  </li>
                  <li className="subpage-feature-item">
                    <span>På kontoret, utendørs eller i våre treningslokaler</span>
                  </li>
                </ul>
              </div>

              {/* Card 2: Bedriftsbehandling */}
              <div className="subpage-detail-card">
                <div className="subpage-card-header">
                  <div>
                    <span className="subpage-card-badge">Behandling på Arbeidsplassen</span>
                    <h2 className="subpage-card-title">Bedriftsbehandling</h2>
                  </div>
                </div>

                <p className="subpage-card-body">
                  Vi vet at muskel- og skjelettplager er en av de vanligste årsakene til sykefravær. Med våre bedriftsavtaler kan dere tilby behandling direkte på arbeidsplassen. Våre terapeuter kommer til dere med alt nødvendig utstyr, slik at ansatte slipper å bruke tid på reise og venting. Vi tilbyr fysioterapi, idretts- og muskelterapi og behandlinger tilpasset både akutte og langvarige plager. Bedriftsbehandling øker tilgjengeligheten, forbedrer trivselen og kan være en kostnadseffektiv måte å investere i ansattes helse og velvære.
                </p>

                <ul className="subpage-feature-list">
                  <li className="subpage-feature-item">
                    <span>Terapeutene kommer til dere med komplett behandlingsutstyr</span>
                  </li>
                  <li className="subpage-feature-item">
                    <span>Fysioterapi, osteopati, muskel- og idrettsterapi</span>
                  </li>
                  <li className="subpage-feature-item">
                    <span>Ingen reisetid eller venting for dine ansatte</span>
                  </li>
                  <li className="subpage-feature-item">
                    <span>Dokumentert forebygging og rask hjelp ved akutte smerter</span>
                  </li>
                </ul>
              </div>

              {/* Card 3: Coaching og Mentaltrening (Full width) */}
              <div className="subpage-detail-card is-fullwidth">
                <div className="subpage-card-header">
                  <div>
                    <span className="subpage-card-badge">Mental Trivsel & Ledelse</span>
                    <h2 className="subpage-card-title">Coaching og Mentaltrening</h2>
                  </div>
                </div>

                <p className="subpage-card-body">
                  Vi tilbyr foredrag, workshops og individuell coaching for å styrke mental trivsel, forebygge stress og utvikle gode relasjoner på arbeidsplassen. Vår tilnærming passer like godt for ledere som ønsker å utvikle sitt potensial, som for team og ansatte som trenger støtte i endringsprosesser eller utfordrende situasjoner. Vi hjelper dere å bygge en sterk, motstandsdyktig og prestasjonsfremmende kultur, med fokus på både produktivitet og menneskelig utvikling.
                </p>

                <ul className="subpage-feature-list responsive-grid-2" style={{ gap: '14px', borderTop: '1px solid var(--border-subtle)', paddingTop: '20px' }}>
                  <li className="subpage-feature-item">
                    <span>Leder- og prestasjonscoaching med Coach Camacho</span>
                  </li>
                  <li className="subpage-feature-item">
                    <span>Stressmestring og verktøy for mental robusthet</span>
                  </li>
                  <li className="subpage-feature-item">
                    <span>Interaktive workshops og faglige helseforedrag</span>
                  </li>
                  <li className="subpage-feature-item">
                    <span>Styrking av samhold, motivasjon og felles måloppnåelse</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom CTA Box */}
            <div className="subpage-cta-box">
              <div className="subpage-cta-content">
                <h3>Klar for å løfte helsen i din bedrift?</h3>
                <p>Ta kontakt i dag for en uforpliktende prat og et skreddersydd tilbud tilpasset deres behov.</p>
              </div>
              <div className="subpage-cta-actions">
                <a href="/kontakt" className="btn-pill-solid">
                  Få et uforpliktende tilbud
                </a>
                <a href="tel:+4791907760" className="btn-pill-outline">
                  Ring oss: 919 07 760
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
