'use client'

import { useState, useEffect } from 'react'

const ANNOUNCEMENTS = [
  {
    text: 'Få behandlingen dekket av din helseforsikring – Ingen henvisning nødvendig',
    link: '#forsikring',
    badge: 'Forsikring',
  },
]

export default function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    if (ANNOUNCEMENTS.length <= 1) return

    const timer = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length)
        setFade(true)
      }, 300)
    }, 4500)

    return () => clearInterval(timer)
  }, [])

  const current = ANNOUNCEMENTS[currentIndex % ANNOUNCEMENTS.length] || ANNOUNCEMENTS[0]

  if (!current) return null

  return (
    <div className="announcement-bar">
      <div className="announcement-inner">
        <a
          href={current.link || '#'}
          className={`announcement-link ${fade ? 'fade-in' : 'fade-out'}`}
        >
          {current.badge && <span className="announcement-badge">{current.badge}</span>}
          <span className="announcement-text">{current.text}</span>
          <span className="announcement-arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  )
}
