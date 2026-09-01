'use client'

import { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesDropdown, setServicesDropdown] = useState(false)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}${mobileOpen ? ' is-mobile-open' : ''}`}>
      <div className="header-container">
        {/* Brand Logo */}
        <a href="/" className="header-brand" aria-label="Muskelklinikken Hjem" onClick={() => setMobileOpen(false)}>
          <img
            src="/images/muskel_logo.webp"
            alt="Muskelklinikken"
            className="brand-logo-img"
            width={170}
            height={40}
            decoding="async"
            style={{ height: '38px', width: 'auto' }}
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="header-nav" aria-label="Hovedmeny">
          <a href="/om-oss" className="nav-item">Om oss</a>

          {/* Services Dropdown */}
          <div
            className="nav-item-dropdown"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <button
              className="nav-dropdown-trigger"
              onClick={() => setServicesDropdown(!servicesDropdown)}
              aria-expanded={servicesDropdown}
            >
              <span>Tjenester</span>
              <svg className="dropdown-caret" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className={`nav-dropdown-panel ${servicesDropdown ? 'is-visible' : ''}`}>
              <div className="dropdown-panel-inner">
                <div className="dropdown-grid">
                  <a href="/fysikalske-behandling" className="dropdown-card" onClick={() => setServicesDropdown(false)}>
                    <div className="dropdown-card-title">Fysikalsk Behandling</div>
                    <div className="dropdown-card-desc">Osteopati, manuellterapi og helhetlig rehabilitering.</div>
                  </a>

                  <a href="/ultralyddiagnostikk" className="dropdown-card" onClick={() => setServicesDropdown(false)}>
                    <div className="dropdown-card-title">Ultralyddiagnostikk</div>
                    <div className="dropdown-card-desc">Høyoppløselig billeddiagnostikk og veiledet injeksjonsterapi.</div>
                  </a>

                  <a href="/personlig-trening" className="dropdown-card" onClick={() => setServicesDropdown(false)}>
                    <div className="dropdown-card-title">Personlig Trening</div>
                    <div className="dropdown-card-desc">Skreddersydde PT-pakker for prestasjon og rehabilitering.</div>
                  </a>

                  <a href="/bedriftsavtale" className="dropdown-card" onClick={() => setServicesDropdown(false)}>
                    <div className="dropdown-card-title">Bedriftsavtaler</div>
                    <div className="dropdown-card-desc">Forebyggende helse, ergonomi og bedriftstrening.</div>
                  </a>

                  <a href="/#tjenester" className="dropdown-card" onClick={() => setServicesDropdown(false)}>
                    <div className="dropdown-card-title">PRP & Injeksjonsterapi</div>
                    <div className="dropdown-card-desc">Regenerativ medisin i samarbeid med legespesialist.</div>
                  </a>

                  <a href="https://coachcamacho.com/en/" target="_blank" rel="noopener noreferrer" className="dropdown-card">
                    <div className="dropdown-card-title">Coaching & Livsstil ↗</div>
                    <div className="dropdown-card-desc">Ernæringsveiledning og mental prestasjonscoaching.</div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <a href="/priser" className="nav-item">Priser</a>
          <a href="/artikler" className="nav-item">Fagstoff</a>
          <a href="/kontakt" className="nav-item">Kontakt</a>
        </nav>

        {/* Desktop CTA Action Buttons */}
        <div className="header-ctas">
          <a
            href="tel:+4791907760"
            className="btn-pill-outline"
          >
            Ring 919 07 760
          </a>
          <a
            href="https://psno-patient-platform-fe.svc.pasientsky.no/embedded/planner/booking?serviceProviderId=fb9771b2-5459-11e9-89e4-96d3108deae4"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-solid"
          >
            Book time
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Meny"
        >
          <span className={`mobile-bar ${mobileOpen ? 'bar-top' : ''}`} />
          <span className={`mobile-bar ${mobileOpen ? 'bar-mid' : ''}`} />
          <span className={`mobile-bar ${mobileOpen ? 'bar-bot' : ''}`} />
        </button>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-drawer ${mobileOpen ? 'is-open' : ''}`}>
          <div className="mobile-drawer-content">
            <nav className="mobile-nav-list">
              <a href="/om-oss" className="mobile-link" onClick={() => setMobileOpen(false)}>Om oss</a>
              
              <div className="mobile-group-title">Tjenester</div>
              <div className="mobile-sublinks">
                <a href="/fysikalske-behandling" className="mobile-sublink" onClick={() => setMobileOpen(false)}>Fysikalsk Behandling</a>
                <a href="/ultralyddiagnostikk" className="mobile-sublink" onClick={() => setMobileOpen(false)}>Ultralyddiagnostikk & PRP</a>
                <a href="/personlig-trening" className="mobile-sublink" onClick={() => setMobileOpen(false)}>Personlig Trening</a>
                <a href="/bedriftsavtale" className="mobile-sublink" onClick={() => setMobileOpen(false)}>Bedriftsavtale</a>
                <a href="https://coachcamacho.com/en/" target="_blank" rel="noopener noreferrer" className="mobile-sublink">Coaching</a>
              </div>

              <a href="/priser" className="mobile-link" onClick={() => setMobileOpen(false)}>Priser</a>
              <a href="/artikler" className="mobile-link" onClick={() => setMobileOpen(false)}>Fagstoff</a>
              <a href="/kontakt" className="mobile-link" onClick={() => setMobileOpen(false)}>Kontakt</a>
            </nav>

            <div className="mobile-drawer-footer">
              <a
                href="https://psno-patient-platform-fe.svc.pasientsky.no/embedded/planner/booking?serviceProviderId=fb9771b2-5459-11e9-89e4-96d3108deae4"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-solid btn-full"
                onClick={() => setMobileOpen(false)}
              >
                Book time online
              </a>
              <a
                href="tel:+4791907760"
                className="btn-pill-outline btn-full"
                onClick={() => setMobileOpen(false)}
              >
                Ring: 919 07 760
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
