'use client'

import ScrollReveal from './ScrollReveal'

export default function Footer() {
  return (
    <footer className="fountain-footer" id="kontakt">
      <div className="container">
        {/* Main Footer Navigation Grid */}
        <div className="footer-main-grid">
          {/* Brand & Identity Column */}
          <div className="footer-col-brand">
            <a href="/" className="footer-logo-link" aria-label="Muskelklinikken Hjem">
              <img
                src="/images/muskel_logo.webp"
                alt="Muskelklinikken"
                className="footer-logo-img"
                width={170}
                height={40}
                style={{ height: '40px', width: 'auto' }}
              />
            </a>
            <p className="footer-brand-desc">
              Ditt kompetansesenter for helse, bevegelse og velvære i Oslo Sentrum. 
              Vitenskapelig forankret behandling, avansert diagnostikk og persontilpasset oppfølging.
            </p>

            <div className="footer-trust-pills">
              <span className="footer-pill">Autorisert helsepersonell</span>
              <span className="footer-pill">Ultralyddiagnostikk</span>
              <span className="footer-pill">Direkte forsikringsoppgjør</span>
            </div>

            <div className="footer-brand-contact-btn">
              <a href="tel:+4791907760" className="btn-pill-solid btn-sm">
                Ring 919 07 760
              </a>
            </div>
          </div>

          {/* Column 2: Tjenester */}
          <div className="footer-nav-col">
            <h4 className="footer-col-heading">Tjenester</h4>
            <ul className="footer-links-list">
              <li><a href="/fysikalske-behandling">Fysikalsk Behandling</a></li>
              <li><a href="/ultralyddiagnostikk">Ultralyddiagnostikk</a></li>
              <li><a href="/#tjenester">PRP & Injeksjonsterapi</a></li>
              <li><a href="/personlig-trening">Personlig Trening</a></li>
              <li><a href="/bedriftsavtale">Bedriftsavtaler</a></li>
              <li><a href="https://coachcamacho.com/en/" target="_blank" rel="noopener noreferrer">Coaching & Livsstil ↗</a></li>
            </ul>
          </div>

          {/* Column 3: Muskelklinikken */}
          <div className="footer-nav-col">
            <h4 className="footer-col-heading">Muskelklinikken</h4>
            <ul className="footer-links-list">
              <li><a href="/om-oss">Om oss</a></li>
              <li><a href="/om-oss#team">Vårt team</a></li>
              <li><a href="/priser">Priser & Pakker</a></li>
              <li><a href="/artikler">Fagstoff & Artikler</a></li>
              <li><a href="#forsikring">Forsikringspartnere</a></li>
              <li><a href="#pakker">Behandlingsforløp</a></li>
            </ul>
          </div>

          {/* Column 4: Kontakt & Lokasjon */}
          <div className="footer-nav-col">
            <h4 className="footer-col-heading">Kontakt & Beliggenhet</h4>
            <div className="footer-contact-info">
              <p>
                <strong>Adresse:</strong><br />
                Dronningens gate 15<br />
                0152 Oslo, Norge
              </p>
              <p>
                <strong>Åpningstider:</strong><br />
                Man – Fre: 07:00 – 19:00<br />
                Lørdag: Etter avtale
              </p>
              <p>
                <strong>E-post:</strong> <a href="mailto:post@muskelklinikken.no" className="footer-inline-link">post@muskelklinikken.no</a><br />
                <strong>Telefon:</strong> <a href="tel:+4791907760" className="footer-inline-link">+47 919 07 760</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="footer-bottom-bar">
          <div className="footer-copy-text">
            © {new Date().getFullYear()} Muskelklinikken AS. Alle rettigheter reservert.
          </div>

          <div className="footer-legal-links">
            <a href="#">Personvernerklæring</a>
            <span>·</span>
            <a href="#">Brukervilkår</a>
            <span>·</span>
            <a href="#">Pasientrettigheter</a>
          </div>

          <div className="footer-social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
