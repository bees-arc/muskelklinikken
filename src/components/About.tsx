import ScrollReveal from './ScrollReveal'

// About section matching the live muskelklinikken.no content
export default function About() {
  return (
    <section className="about-section" id="om-oss">
      <div className="container">
        <div className="about-grid">
          <ScrollReveal className="about-image-col">
            <img
              src="/images/hero_wallpaper.webp"
              alt="Muskelklinikken team"
              className="about-img"
            />
          </ScrollReveal>

          <ScrollReveal className="about-text-col">
            <span className="overline">Om oss</span>
            <h2 className="section-heading" style={{ marginBottom: '24px' }}>
              Velkommen til Muskelklinikken – ditt kompetansesenter for helse og velvære!
            </h2>
            <p style={{ fontSize: '1.02rem', lineHeight: 1.75, color: 'var(--text-2)', marginBottom: '18px' }}>
              Som autorisert helsepersonell er vi dedikerte til å gi deg den beste behandlingen. Vi holder oss oppdatert ved å delta på flere kurs årlig og samarbeide med anerkjente institutter og professorer. Vi tror på evidensbasert kunnskap for å gi deg det beste resultatet.
            </p>
            <p style={{ fontSize: '1.02rem', lineHeight: 1.75, color: 'var(--text-2)', marginBottom: '18px' }}>
              Vår kultur er hjertet av bedriften. Fellesskap, samarbeid og å løfte hverandre opp er verdiene vi dyrker. Vi er drevet av en intens indre motivasjon for å utvikle oss og heve nivået for alle våre kunder.
            </p>
            <p style={{ fontSize: '1.02rem', lineHeight: 1.75, color: 'var(--text-2)', marginBottom: '32px' }}>
              Varm service og fremtidsrettet fokus er kjernen i vår tilnærming. Vi ser hele mennesket og ønsker å hjelpe til med en smertefri og bedre hverdag. Du er i trygge hender hos oss.
            </p>
            <a
              href="#coaching"
              className="btn btn-pill btn-black btn-md"
            >
              Coaching
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
