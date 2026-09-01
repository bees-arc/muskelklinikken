'use client'

import { useState, useEffect } from 'react'

const ANNOUNCEMENTS = [
  {
    text: 'Nyhet: Avansert ultralyddiagnostikk og injeksjonsterapi tilgjengelig',
    link: '/ultralyddiagnostikk',
    badge: 'Diagnostikk',
  },
  {
    text: 'Få behandlingen dekket av din helseforsikring – Ingen henvisning nødvendig',
    link: '#forsikring',
    badge: 'Forsikring',
  },
  {
    text: 'Bedriftsavtaler: Skreddersydde helse- og treningsprogrammer for bedrifter',
    link: '/bedriftsavtale',
    badge: 'Bedrift',
  },
]

export default function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length)
        setFade(true)
      }, 300)
    }, 4500)

    return () => clearInterval(timer)
  }, [])

  const current = ANNOUNCEMENTS[currentIndex]

  return (
    <div className="announcement-bar">
      <div className="announcement-inner">
        <a
          href={current.link}
          className={`announcement-link ${fade ? 'fade-in' : 'fade-out'}`}
        >
          <span className="announcement-badge">{current.badge}</span>
          <span className="announcement-text">{current.text}</span>
          <span className="announcement-arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  )
}
