'use client'

import { useState, useRef, useEffect } from 'react'
import ScrollReveal from './ScrollReveal'

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

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
          paddingInline: `${scrollProgress * 24}px`,
          paddingTop: `${scrollProgress * 16}px`,
          maxWidth: scrollProgress === 0 ? '100%' : '1380px',
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
          </div>
        </div>
      </div>
    </section>
  )
}


