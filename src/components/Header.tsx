'use client'

import { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}${mobileOpen ? ' mobile-open' : ''}`}>
      <div className="header-inner">
        <a href="/" className="logo-link" aria-label="Muskelklinikken Hjem" onClick={() => setMobileOpen(false)}>
          <img
            src="/images/muskel_logo.webp"
            alt="Muskelklinikken"
            className="logo-img"
            style={{ height: '44px', width: 'auto', flexShrink: 0 }}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-center" aria-label="Hovedmeny">
          <a href="/om-oss" className="nav-link">Om oss</a>
          <div className="nav-dropdown-group">
            <span className="nav-link dropdown-toggle" style={{ cursor: 'pointer' }}>Tjenester ▾</span>
            <div className="nav-dropdown">
              <a href="/ultralyddiagnostikk" className="dropdown-link">Ultralyddiagnostikk</a>
              <a href="/bedriftsavtale" className="dropdown-link">Bedriftsavtale</a>
              <a href="/personlig-trening" className="dropdown-link">Personlig trening</a>
              <a href="/fysikalske-behandling" className="dropdown-link">Fysikalske behandling</a>
              <a href="https://coachcamacho.com/en/" target="_blank" rel="noopener noreferrer" className="dropdown-link">Coaching</a>
            </div>
          </div>
          <a href="/priser" className="nav-link">Priser</a>
          <a href="/artikler" className="nav-link">Artikler</a>
          <a href="/kontakt" className="nav-link">Kontakt</a>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="header-actions">
          <a
            href="https://psno-patient-platform-fe.svc.pasientsky.no/embedded/planner/booking?serviceProviderId=fb9771b2-5459-11e9-89e4-96d3108deae4"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-pill btn-light btn-sm"
          >
            Book behandling
          </a>
          <a
            href="tel:+4791907760"
            className="btn btn-pill btn-light btn-sm"
          >
            Ring oss
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          <div className="hamburger-box">
            <span className={`hamburger-line line-1 ${mobileOpen ? 'active' : ''}`} />
            <span className={`hamburger-line line-2 ${mobileOpen ? 'active' : ''}`} />
            <span className={`hamburger-line line-3 ${mobileOpen ? 'active' : ''}`} />
          </div>
        </button>

        {/* Mobile Navigation Dropdown Overlay */}
        <div className={`mobile-nav-overlay ${mobileOpen ? 'open' : ''}`}>
          <nav className="mobile-nav-menu">
            <a href="/om-oss" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Om oss</a>
            
            <div className="mobile-nav-submenu-title">Tjenester</div>
            <div className="mobile-nav-submenu">
              <a href="/ultralyddiagnostikk" className="mobile-sub-link" onClick={() => setMobileOpen(false)}>Ultralyddiagnostikk</a>
              <a href="/bedriftsavtale" className="mobile-sub-link" onClick={() => setMobileOpen(false)}>Bedriftsavtale</a>
              <a href="/personlig-trening" className="mobile-sub-link" onClick={() => setMobileOpen(false)}>Personlig trening</a>
              <a href="/fysikalske-behandling" className="mobile-sub-link" onClick={() => setMobileOpen(false)}>Fysikalske behandling</a>
              <a href="https://coachcamacho.com/en/" target="_blank" rel="noopener noreferrer" className="mobile-sub-link" onClick={() => setMobileOpen(false)}>Coaching</a>
            </div>

            <a href="/priser" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Priser</a>
            <a href="/artikler" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Artikler</a>
            <a href="/kontakt" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Kontakt</a>
            
            <div className="mobile-nav-buttons">
              <a
                href="https://psno-patient-platform-fe.svc.pasientsky.no/embedded/planner/booking?serviceProviderId=fb9771b2-5459-11e9-89e4-96d3108deae4"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-pill btn-light btn-md"
                onClick={() => setMobileOpen(false)}
              >
                Book behandling
              </a>
              <a
                href="tel:+4791907760"
                className="btn btn-pill btn-outline-light btn-md"
                onClick={() => setMobileOpen(false)}
              >
                Ring oss: 919 07 760
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
