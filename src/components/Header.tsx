'use client'

import { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="header-inner">
        <a href="#" className="logo-link" aria-label="Muskelklinikken Hjem">
          <img
            src="/images/muskel_logo.webp"
            alt="Muskelklinikken"
            className="logo-img"
            style={{ height: '44px', width: 'auto' }}
          />
        </a>

        <nav className="nav-center" aria-label="Hovedmeny">
          <a href="#om-oss" className="nav-link">Om oss</a>
          <a href="#coaching" className="nav-link">Coaching</a>
          <a href="#artikler" className="nav-link">Fagstoff</a>
          <a href="#priser" className="nav-link">Priser</a>
          <div className="nav-dropdown-group">
            <a href="#tjenester" className="nav-link dropdown-toggle">Tjenester ▾</a>
            <div className="nav-dropdown">
              <a href="#ultralyd" className="dropdown-link">Ultralyddiagnostikk</a>
              <a href="#injeksjon" className="dropdown-link">Injeksjonsterapi</a>
              <a href="#bedrift" className="dropdown-link">Bedriftstrening</a>
              <a href="#pt" className="dropdown-link">Personlig trening</a>
            </div>
          </div>
          <a href="#kontakt" className="nav-link">Kontakt</a>
        </nav>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
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
      </div>
    </header>
  )
}
