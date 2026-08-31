'use client'

import { useRef } from 'react'
import ScrollReveal from './ScrollReveal'

export default function VideoCTA() {
  return (
    <section className="video-cta" id="forsikring">
      <div
        className="video-cta-bg"
        style={{ backgroundImage: "url('/images/about_team.webp')" }}
        aria-hidden="true"
      />
      <div className="video-cta-overlay" aria-hidden="true" />

      <div className="container video-cta-content">
        <ScrollReveal>
          <span className="overline" style={{ color: 'var(--text-2)' }}>Sømløst samarbeid</span>
          <h2 className="video-cta-heading" style={{ color: 'var(--text-1)', fontSize: 'clamp(2rem, 4.5vw, 3.6rem)' }}>
            Få behandlingen dekket<br />
            av din helseforsikring
          </h2>

          <div
            style={{
              cursor: 'default',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'rgba(250, 250, 248, 0.85)',
              backdropFilter: 'blur(12px)',
              border: '1px solid var(--border-md)',
              borderRadius: '20px',
              marginBlock: '32px',
            }}
          >
            <p
              style={{
                fontSize: '1.12rem',
                lineHeight: 1.7,
                color: 'var(--text-1)',
                maxWidth: '600px',
                textAlign: 'center',
                marginBottom: '28px',
                fontWeight: 500,
              }}
            >
              Vi samarbeider tett med flere aktører i forsikringsbransjen. Dersom du har en helseforsikring, kan du få behandlingen hos oss helt eller delvis dekket – uten lang ventetid. Dette gjør det enklere og mer tilgjengelig å få den hjelpen du trenger.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '24px',
                flexWrap: 'wrap',
                justifyContent: 'center',
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: 'var(--text-2)',
                letterSpacing: '0.08em',
              }}
            >
              <span>Storebrand</span>
              <span>·</span>
              <span>Gjensidige</span>
              <span>·</span>
              <span>If Forsikring</span>
              <span>·</span>
              <span>Vertikal Helse</span>
              <span>·</span>
              <span>Falck</span>
            </div>
          </div>

          <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', marginBottom: '20px', fontWeight: 600 }}>
            ⚠️ Merk: Finn-Tore tar ikke imot forsikringspasienter, kun private kunder.
          </p>

          <a
            href="https://psno-patient-platform-fe.svc.pasientsky.no/embedded/planner/booking?serviceProviderId=fb9771b2-5459-11e9-89e4-96d3108deae4"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-pill btn-black btn-lg"
          >
            Bestill time med forsikring
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
