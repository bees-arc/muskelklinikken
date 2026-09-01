'use client'

import { useState, useRef } from 'react'
import ScrollReveal from './ScrollReveal'

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  return (
    <section className="hero-section">
      <div className="hero-outer-container">
        <div className="hero-frame-card">
          {/* Background Video with Dark Cinematic Overlay */}
          <div className="hero-video-wrap" aria-hidden="true">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="/images/om_oss_team_banner.jpg"
              className="hero-video"
            >
              <source src="/videos/hero_bg.mp4" type="video/mp4" />
              <source src="/videos/Muskelklinikken_commercial_produ…_202608312136.mp4" type="video/mp4" />
            </video>
            <div className="hero-dark-overlay" />
            <div className="hero-ambient-glow" />
          </div>

          {/* Main Hero Content Area */}
          <div className="hero-inner-content">
            <ScrollReveal>
              {/* Award / Clinic Credential Eyebrow */}
              <div className="hero-award-badge">
                <div className="award-badge-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                  </svg>
                </div>
                <div className="award-badge-text">
                  <em>Tverrfaglig kompetansesenter for helse i Oslo Sentrum</em>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="hero-main-title">
                Behandling i verdensklasse, <br />
                <em className="hero-accent-serif">forankret i vitenskap</em>
              </h1>

              {/* Subheadline */}
              <p className="hero-subtitle">
                Avansert ultralyddiagnostikk, evidensbasert manuellterapi og skreddersydd 
                opptrening. Vi hjelper deg til en smertefri hverdag og optimal funksjon.
              </p>

              {/* Call-to-Action Action Buttons */}
              <div className="hero-actions-group">
                <a
                  href="https://psno-patient-platform-fe.svc.pasientsky.no/embedded/planner/booking?serviceProviderId=fb9771b2-5459-11e9-89e4-96d3108deae4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hero-primary"
                >
                  Book behandling
                </a>
                <a
                  href="#prosess"
                  className="btn-hero-glass"
                >
                  Slik jobber vi
                </a>
                <a
                  href="tel:+4791907760"
                  className="hero-phone-link"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>Ring 919 07 760</span>
                </a>
              </div>
            </ScrollReveal>

            {/* Bottom Metrics / Feature Cards Overlay (Fountain Life style) */}
            <div className="hero-feature-bar">
              <div className="feature-bar-card">
                <div className="feature-card-label">15+ års erfaring</div>
                <div className="feature-card-title">Evidensbasert Behandling</div>
              </div>

              <div className="feature-bar-card">
                <div className="feature-card-label">Høyoppløselig</div>
                <div className="feature-card-title">Ultralyddiagnostikk & PRP</div>
              </div>

              <a href="/personlig-trening" className="feature-bar-card is-interactive">
                <div className="feature-card-label">Skreddersydd</div>
                <div className="feature-card-title-link">
                  <span>Rehabilitering & PT</span>
                  <svg className="feature-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>
            </div>

            {/* Sound Toggle Button */}
            <button
              onClick={toggleSound}
              className="hero-sound-toggle"
              aria-label={isMuted ? 'Slå på lyd' : 'Slå av lyd'}
              title={isMuted ? 'Slå på lyd' : 'Slå av lyd'}
            >
              {isMuted ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
