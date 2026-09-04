'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Kontakt() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormState({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <>
      <Header />
      <main className="subpage-container">
        <section>
          <div className="container">
            {/* Page Header */}
            <div className="subpage-header-wrap">
              <span className="section-tag-cyan">Kontakt oss</span>
              <h1 className="subpage-title">
                Ta kontakt med Muskelklinikken
              </h1>
              <p className="subpage-subtitle">
                Velkommen til Muskelklinikken! Hos oss er terskelen lav, og vi ønsker alle hjertelig velkommen til å ta kontakt. Uansett om du har spørsmål, ønsker informasjon om våre tjenester, eller vil diskutere dine helsemål, er vi her for deg.
              </p>
            </div>

            {/* 2-Column Responsive Grid */}
            <div className="responsive-grid-2" style={{ marginBottom: '60px' }}>
              
              {/* Left Column: Contact info & Map */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div className="subpage-detail-card">
                  <div className="subpage-card-header">
                    <div>
                      <span className="subpage-card-badge">Klinikk i Sentrum</span>
                      <h2 className="subpage-card-title">Kontaktinformasjon</h2>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '1rem', color: 'var(--text-2)' }}>
                    <div>
                      <strong style={{ color: 'var(--text-pure)' }}>Adresse:</strong> Dronningens gt. 15, 0152 Oslo, Norway
                    </div>
                    <div>
                      <strong style={{ color: 'var(--text-pure)' }}>Telefon:</strong>{' '}
                      <a href="tel:+4791907760" style={{ color: 'var(--accent-coffee)', textDecoration: 'underline' }}>
                        +47 919 07 760
                      </a>
                    </div>
                    <div>
                      <strong style={{ color: 'var(--text-pure)' }}>E-post:</strong>{' '}
                      <a href="mailto:post@muskelklinikken.no" style={{ color: 'var(--accent-coffee)', textDecoration: 'underline' }}>
                        post@muskelklinikken.no
                      </a>
                    </div>
                    <div>
                      <strong style={{ color: 'var(--text-pure)' }}>Åpningstider:</strong> Mandag – Fredag: 07:00 – 19:00
                    </div>
                  </div>
                </div>

                <div 
                  style={{
                    width: '100%',
                    height: '300px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '1px solid var(--border-card)',
                    boxShadow: 'var(--shadow-md)',
                    position: 'relative'
                  }}
                >
                  <iframe 
                    src="https://maps.google.com/maps?q=Dronningens%20gt.%2015%2C%200152%20Oslo%20Norway&t=m&z=15&output=embed&iwloc=near" 
                    title="Muskelklinikken - Dronningens gate 15, Oslo" 
                    aria-label="Muskelklinikken beliggenhet"
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 'none'
                    }}
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right Column: Contact form */}
              <div className="subpage-detail-card">
                <div className="subpage-card-header">
                  <div>
                    <span className="subpage-card-badge">Direkte Henvendelse</span>
                    <h2 className="subpage-card-title">Send oss en melding</h2>
                  </div>
                </div>

                {submitted ? (
                  <div style={{ backgroundColor: 'rgba(197, 155, 109, 0.12)', border: '1px solid rgba(197, 155, 109, 0.35)', padding: '24px', borderRadius: '16px', textAlign: 'center' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-pure)' }}>Takk for din melding!</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-2)' }}>Vi har mottatt meldingen din og vil svare deg så fort som mulig.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label htmlFor="name" style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-2)' }}>Navn *</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="responsive-input"
                        placeholder="Ditt fulle navn"
                      />
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label htmlFor="email" style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-2)' }}>E-post *</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="responsive-input"
                        placeholder="din.epost@adresse.no"
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label htmlFor="phone" style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-2)' }}>Telefon</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="responsive-input"
                        placeholder="+47"
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label htmlFor="subject" style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-2)' }}>Emne</label>
                      <input 
                        type="text" 
                        id="subject" 
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className="responsive-input"
                        placeholder="Hva gjelder henvendelsen?"
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label htmlFor="message" style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-2)' }}>Melding *</label>
                      <textarea 
                        id="message" 
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="responsive-input"
                        placeholder="Skriv din melding her..."
                        style={{ resize: 'vertical' }}
                      />
                    </div>

                    <button type="submit" className="btn-pill-solid" style={{ marginTop: '8px', alignSelf: 'flex-start', width: '100%' }}>
                      Send melding
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
