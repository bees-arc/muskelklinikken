'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Kontakt() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulated form submission
    setSubmitted(true)
    setFormState({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '80vh', backgroundColor: 'var(--bg)' }}>
        <section style={{ paddingBlock: '80px' }}>
          <div className="container">
            <span className="overline" style={{ display: 'block', marginBottom: '12px', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-3)', fontWeight: 700 }}>
              Kontakt oss
            </span>
            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontFamily: 'var(--font-serif)', fontWeight: 700, lineHeight: 1.15, marginBottom: '20px', color: 'var(--text-1)' }}>
              Ta kontakt med Muskelklinikken
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-2)', maxWidth: '900px', marginBottom: '60px', lineHeight: 1.7 }}>
              Velkommen til Muskelklinikken! Vi gleder oss til å høre fra deg. Hos oss er terskelen lav, og vi ønsker alle hjertelig velkommen til å ta kontakt. Uansett om du har spørsmål, ønsker informasjon om våre tjenester, eller vil diskutere dine helsemål, er vi her for deg. Vi er et inkluderende sted hvor du kan føle deg trygg og ivaretatt.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', marginBottom: '60px' }}>
              
              {/* Left Column: Contact details & Map */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                <div 
                  style={{ 
                    backgroundColor: 'var(--bg-card)', 
                    border: '1px solid var(--border)', 
                    borderRadius: '16px', 
                    padding: '36px', 
                    boxShadow: '0 4px 20px rgba(0,0,0,0.02)' 
                  }}
                >
                  <h2 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', fontWeight: 700, marginBottom: '24px', color: 'var(--text-1)' }}>
                    Kontaktinformasjon
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '1.05rem', color: 'var(--text-2)' }}>
                    <div>
                      📍 <strong>Adresse:</strong> Dronningens gt. 15, 0152 Oslo, Norway
                    </div>
                    <div>
                      📞 <strong>Telefon:</strong> <a href="tel:+4791907760" style={{ textDecoration: 'underline' }}>+47 919 07 760</a>
                    </div>
                    <div>
                      ✉️ <strong>E-post:</strong> <a href="mailto:post@muskelklinikken.no" style={{ textDecoration: 'underline' }}>post@muskelklinikken.no</a>
                    </div>
                  </div>
                </div>

                <div 
                  style={{
                    width: '100%',
                    height: '350px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid var(--border)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
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
              <div 
                style={{ 
                  backgroundColor: 'var(--bg-card)', 
                  border: '1px solid var(--border)', 
                  borderRadius: '16px', 
                  padding: '36px', 
                  boxShadow: '0 4px 20px rgba(0,0,0,0.02)' 
                }}
              >
                <h2 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', fontWeight: 700, marginBottom: '24px', color: 'var(--text-1)' }}>
                  Send oss en melding
                </h2>
                {submitted ? (
                  <div style={{ backgroundColor: 'rgba(74, 234, 220, 0.08)', border: '1px solid rgba(74, 234, 220, 0.3)', padding: '24px', borderRadius: '12px', textAlign: 'center' }}>
                    <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '12px' }}>✉️</span>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-1)' }}>Takk for din melding!</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-2)' }}>Vi har mottatt meldingen din og vil svare deg så fort som mulig.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label htmlFor="name" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-2)' }}>Navn *</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '1rem', outline: 'none', background: 'var(--bg)' }} 
                      />
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label htmlFor="email" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-2)' }}>E-post *</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '1rem', outline: 'none', background: 'var(--bg)' }} 
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label htmlFor="phone" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-2)' }}>Telefon</label>
                      <input 
                        type="tel" 
                        id="phone"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '1rem', outline: 'none', background: 'var(--bg)' }} 
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label htmlFor="subject" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-2)' }}>Emne</label>
                      <input 
                        type="text" 
                        id="subject"
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '1rem', outline: 'none', background: 'var(--bg)' }} 
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label htmlFor="message" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-2)' }}>Melding *</label>
                      <textarea 
                        id="message" 
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '1rem', outline: 'none', background: 'var(--bg)', resize: 'vertical' }} 
                      />
                    </div>

                    <button type="submit" className="btn btn-pill btn-black btn-md" style={{ marginTop: '10px' }}>
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
