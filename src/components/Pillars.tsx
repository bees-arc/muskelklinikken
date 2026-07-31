import ScrollReveal from './ScrollReveal'

const PILLARS = [
  {
    bg: '/images/service_physical.webp',
    name: 'FYSIKALSK BEHANDLING',
    desc: 'Helhetlig rehabilitering og manuell behandling av muskel- og leddplager utført av erfarne terapeuter med fokus på evidensbaserte metoder.',
  },
  {
    bg: '/images/service_pt.webp',
    name: 'PERSONLIG TRENING',
    desc: 'Skreddersydde treningsprogrammer tilpasset din funksjon, ditt nivå og dine mål – enten det gjelder styrke, vekttap eller rehabilitering.',
  },
  {
    bg: '/images/service_bedrift.webp',
    name: 'BEDRIFTSTRENING',
    desc: 'Forebyggende helsetiltak, trening og ergonomisk veiledning for dine ansatte som reduserer sykefravær og styrker samholdet på arbeidsplassen.',
  },
  {
    bg: '/images/service_coaching.webp',
    name: 'COACHING',
    desc: 'Veiledning innen ernæring, stressmestring og livsstilsendringer som gir deg verktøyene du trenger for å fungere best mulig i hverdagen.',
  },
]

export default function Pillars() {
  return (
    <section className="pillars-section" id="tjenester">
      <div className="container">
        <ScrollReveal className="section-intro">
          <span className="overline">Tjenester</span>
          <h2 className="section-heading" style={{ marginBottom: '24px' }}>
            Våre tjenester
          </h2>
          <p
            style={{
              maxWidth: '760px',
              fontSize: '1.08rem',
              lineHeight: 1.65,
              color: 'var(--text-2)',
              marginTop: '16px'
            }}
          >
            Vi er stolte av å tilby en rekke tjenester som er skreddersydd for å hjelpe deg å oppnå dine helsemål og bli den beste versjonen av deg selv. Vårt dedikerte team av eksperter innen fysikalsk behandling, personlig trening, bedriftstrening, coaching og mental trening står klare til å veilede deg på reisen mot et bedre og mer smertefritt liv.
          </p>
        </ScrollReveal>

        <div className="pillars-grid">
          {PILLARS.map((pillar, i) => (
            <ScrollReveal key={pillar.name} delay={i * 80}>
              <div
                className="pillar"
                style={{ backgroundImage: `url('${pillar.bg}')` }}
              >
                <div className="pillar-inner">
                  <h3 className="pillar-name">{pillar.name}</h3>
                  <p className="pillar-desc">{pillar.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
