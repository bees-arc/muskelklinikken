import ScrollReveal from './ScrollReveal'

export default function Hero() {
  return (
    <section className="hero">
      <div
        className="hero-bg-img"
        aria-hidden="true"
      />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-bg-video"
        aria-hidden="true"
      >
        <source src="/videos/hero_bg.mp4" type="video/mp4" />
      </video>
      <div className="hero-bg-overlay" aria-hidden="true" />
      <div className="container">
        <ScrollReveal className="hero-content">
          <p className="hero-eyebrow">Holistisk behandling. Forankret i vitenskap.</p>

          <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', letterSpacing: '-0.04em' }}>
            Muskelklinikken
          </h1>

          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.82)', marginBottom: '16px', maxWidth: '600px', marginInline: 'auto', lineHeight: 1.65 }}>
            Ditt kompetansesenter for helse og velvære
          </p>

          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', marginBottom: '40px', fontWeight: 600 }}>
            Merk: Finn-Tore tar ikke imot forsikringspasienter, kun private kunder.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://psno-patient-platform-fe.svc.pasientsky.no/embedded/planner/booking?serviceProviderId=fb9771b2-5459-11e9-89e4-96d3108deae4"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-pill btn-light btn-lg"
            >
              Book behandling
            </a>
            <a
              href="#coaching"
              className="btn btn-pill btn-outline-light btn-lg"
            >
              Coaching
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
