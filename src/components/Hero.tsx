'use client'

import { useState, useRef, useEffect } from 'react'
import ScrollReveal from './ScrollReveal'

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY
          // Animate shrink over the first 360px of scroll
          const shrinkDistance = 360
          const progress = Math.min(1, Math.max(0, scrollY / shrinkDistance))
          setScrollProgress(progress)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="hero-section">
      <div
        className="hero-outer-container"
        style={{
          paddingInline: `${scrollProgress * 20}px`,
          paddingTop: `${scrollProgress * 16}px`,
          maxWidth: scrollProgress === 0 ? '100%' : '1400px',
        }}
      >
        <div
          className="hero-frame-card"
          style={{
            borderRadius: `${scrollProgress * 36}px`,
            minHeight: scrollProgress === 0 ? 'calc(100vh - 68px)' : '780px',
            transform: `scale(${1 - scrollProgress * 0.025})`,
            transformOrigin: 'top center',
            boxShadow: scrollProgress > 0.05 ? '0 25px 80px rgba(0, 0, 0, 0.75)' : 'none',
            border: scrollProgress > 0.05 ? '1px solid var(--border-card)' : '1px solid transparent',
          }}
        >
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
            </ScrollReveal>

            {/* Scroll Indicator Prompt */}
            <div
              className="hero-scroll-indicator"
              style={{
                opacity: Math.max(0, 1 - scrollProgress * 3),
                transform: `translateY(${scrollProgress * 15}px)`,
                pointerEvents: scrollProgress > 0.3 ? 'none' : 'auto',
              }}
            >
              <span className="hero-scroll-label">Scroll for å utforske</span>
              <div className="hero-scroll-mouse">
                <div className="hero-scroll-wheel" />
              </div>
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

