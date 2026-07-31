import Image from 'next/image'
import ScrollReveal from './ScrollReveal'



export default function Footer() {
  return (
    <footer className="site-footer" id="kontakt">
      <div className="container">
        <ScrollReveal className="footer-cta">
          <span className="overline">Ta kontakt med oss</span>
          <h2 className="footer-heading" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)' }}>
            Velkommen til<br />
            Muskelklinikken
          </h2>
          <p 
            style={{ 
              maxWidth: '600px', 
              marginInline: 'auto', 
              marginBottom: '32px', 
              color: 'var(--text-2)', 
              fontSize: '1.05rem' 
            }}
          >
            Ditt kompetansesenter for helse og velvære! Har du spørsmål eller ønsker mer informasjon? Ring oss gjerne eller send en e-post.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
            <a 
              href="mailto:post@muskelklinikken.no" 
              className="btn btn-pill btn-black btn-lg"
            >
              Send e-post
            </a>
            <a 
              href="tel:+4791907760" 
              className="btn btn-pill btn-outline btn-lg"
            >
              Ring tlf: +47 919 07 760
            </a>
          </div>

          <div 
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              gap: '8px',
              fontSize: '0.95rem',
              color: 'var(--text-1)',
              fontWeight: 500,
              textAlign: 'center',
              padding: '16px 28px',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              backgroundColor: 'var(--bg-card)'
            }}
          >
            <span>📍 <strong>Adresse:</strong> Dronningens gt. 15, 0152 Oslo, Norway</span>
          </div>
        </ScrollReveal>



        <div className="footer-bar">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Muskelklinikken | <a href="#" style={{ textDecoration: 'underline' }}>Personvernerklæring</a>
          </p>
          <p className="footer-copy" style={{ fontSize: '0.78rem' }}>
            Design og utvikling inspirert av TheWeb
          </p>
          <nav className="footer-social" aria-label="Sosiale medier">
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
