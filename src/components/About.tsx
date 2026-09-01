'use client'

import ScrollReveal from './ScrollReveal'

export default function About() {
  return (
    <section className="about-custom-section" id="om-oss">
      <div className="container">
        {/* Top 2-Column Grid: Image Card + Header & CTA */}
        <div className="about-custom-top-grid">
          {/* Left Media Box */}
          <ScrollReveal className="about-custom-media-wrap">
            <div className="about-custom-media-card">
              <img
                src="/images/om_oss_team_banner.jpg"
                alt="Muskelklinikken team"
                className="about-custom-img"
                loading="lazy"
              />
            </div>
          </ScrollReveal>

          {/* Right Header & Action */}
          <ScrollReveal className="about-custom-header-col" delay={100}>
            <span className="about-custom-overline">OM OSS</span>
            <h2 className="about-custom-title">
              Velkommen til Muskelklinikken – ditt kompetansesenter for helse og velvære!
            </h2>
            <div className="about-custom-btn-wrap">
              <a
                href="https://coachcamacho.com/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="about-coaching-btn"
              >
                Coaching
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom 3 Detailed Paragraphs */}
        <ScrollReveal className="about-custom-paragraphs" delay={150}>
          <p className="about-custom-p">
            Som autorisert helsepersonell er vi dedikerte til å gi deg den beste behandlingen. 
            Vi holder oss oppdatert ved å delta på flere kurs årlig og samarbeide med anerkjente 
            institutter og professorer. Vi tror på evidensbasert kunnskap for å gi deg det beste resultatet.
          </p>

          <p className="about-custom-p">
            Vår kultur er hjertet av bedriften. Fellesskap, samarbeid og det å løfte hverandre opp er verdiene vi dyrker. 
            Vi er drevet av en sterk indre motivasjon for å utvikle oss og heve nivået for alle våre kunder.
          </p>

          <p className="about-custom-p">
            Varm service og et fremtidsrettet fokus er kjernen i vår tilnærming. Vi ser hele mennesket og 
            ønsker å hjelpe deg til en smertefri og bedre hverdag. Du er i trygge hender hos oss.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
