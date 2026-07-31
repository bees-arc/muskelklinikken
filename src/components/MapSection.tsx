import ScrollReveal from './ScrollReveal'

export default function MapSection() {
  return (
    <section className="map-section" id="kart" style={{ paddingBlock: '100px', backgroundColor: 'var(--bg)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <ScrollReveal className="section-intro">
          <span className="overline">Beliggenhet</span>
          <h2 className="section-heading">Finn oss i Oslo Sentrum</h2>
          <p 
            style={{ 
              maxWidth: '600px', 
              marginInline: 'auto', 
              marginTop: '16px', 
              fontSize: '1.05rem', 
              color: 'var(--text-2)', 
              lineHeight: 1.6 
            }}
          >
            Vi holder til i lyse og innbydende lokaler i Dronningens gate 15. Det er kort gangavstand fra både Jernbanetorget og Oslo Sentralstasjon.
          </p>
        </ScrollReveal>
        </div>

        <ScrollReveal>
          <div 
            style={{
              width: '100%',
              height: '450px',
              borderRadius: '24px',
              overflow: 'hidden',
              border: '1px solid var(--border-md)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)',
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
        </ScrollReveal>
      </div>
    </section>
  )
}
