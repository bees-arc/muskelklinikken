'use client'

import ScrollReveal from './ScrollReveal'

export default function MapSection() {
  return (
    <section className="location-section" id="kontakt">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal className="section-head-center">
          <span className="section-tag-cyan">Kontakt & Beliggenhet</span>
          <h2 className="section-title-large">
            Besøk vår klinikk — <em className="accent-serif">midt i Oslo Sentrum</em>
          </h2>
          <p className="section-desc-center">
            Vi holder til i lyse, moderne og innbydende lokaler i Dronningens gate 15, 
            kun et steinkast fra Jernbanetorget og Oslo Sentralstasjon.
          </p>
        </ScrollReveal>

        {/* Location Showcase Card Grid */}
        <div className="location-showcase-grid">
          {/* Location Info Box */}
          <ScrollReveal className="location-info-card">
            <div className="location-card-header">
              <span className="location-badge">Hovedklinikk</span>
              <h3 className="location-card-title">Muskelklinikken Oslo</h3>
              <p className="location-address-text">
                Dronningens gate 15<br />
                0152 Oslo, Norge
              </p>
            </div>

            <div className="location-details-list">
              <div className="location-detail-item">
                <div className="detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                </div>
                <div>
                  <strong>Kollektivtransport:</strong>
                  <span>2 minutter gange fra Oslo S / Jernbanetorget (T-bane, tog, buss, trikk)</span>
                </div>
              </div>

              <div className="location-detail-item">
                <div className="detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <strong>Åpningstider:</strong>
                  <span>Mandag – Fredag: 07:00 – 19:00 (Lørdag etter avtale)</span>
                </div>
              </div>

              <div className="location-detail-item">
                <div className="detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <strong>Direkte kontakt:</strong>
                  <span>Tlf: +47 919 07 760 · post@muskelklinikken.no</span>
                </div>
              </div>
            </div>

            <div className="location-actions">
              <a
                href="https://maps.google.com/?q=Dronningens+gate+15,+0152+Oslo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-solid"
              >
                Åpne i Google Maps
              </a>
              <a
                href="tel:+4791907760"
                className="btn-pill-outline"
              >
                Ring klinikken
              </a>
            </div>
          </ScrollReveal>

          {/* Interactive Map Embed */}
          <ScrollReveal delay={120} className="location-map-card">
            <iframe
              src="https://maps.google.com/maps?q=Dronningens%20gt.%2015%2C%200152%20Oslo%20Norway&t=m&z=15&output=embed&iwloc=near"
              title="Muskelklinikken - Dronningens gate 15, Oslo"
              aria-label="Muskelklinikken beliggenhet"
              className="location-iframe"
              loading="lazy"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
