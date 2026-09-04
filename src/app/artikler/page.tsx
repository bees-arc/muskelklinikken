import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ARTICLES } from '@/data/articles'

export default function ArtiklerIndex() {
  return (
    <>
      <Header />
      <main className="subpage-container">
        <section>
          <div className="container">
            {/* Header / Intro */}
            <div className="subpage-header-wrap">
              <span className="section-tag-cyan">Fagstoff & Kunnskap</span>
              <h1 className="subpage-title">
                Våre artikler
              </h1>
              <p className="subpage-subtitle">
                Her deler vi kunnskap, tips og forskning knyttet til fysioterapi, opptrening, helse og livsstilsendring. Vårt mål er å holde deg oppdatert med evidensbasert fagstoff.
              </p>
            </div>

            {/* Articles Grid */}
            <div className="responsive-grid-3" style={{ marginBottom: '60px' }}>
              {ARTICLES.map((article) => (
                <article 
                  key={article.slug} 
                  className="subpage-detail-card"
                  style={{ 
                    padding: 0,
                    overflow: 'hidden',
                  }}
                >
                  {article.image && (
                    <div style={{ width: '100%', height: '200px', overflow: 'hidden', borderBottom: '1px solid var(--border-card)' }}>
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                    </div>
                  )}
                  <div style={{ padding: '24px 20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-coffee)', fontWeight: 700, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {article.date}
                    </span>
                    
                    <h2 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', fontWeight: 700, lineHeight: 1.35, marginBottom: '12px', color: 'var(--text-pure)' }}>
                      <a href={`/artikler/${article.slug}`} style={{ color: 'inherit' }}>
                        {article.title}
                      </a>
                    </h2>
                    
                    <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-2)', marginBottom: '20px', flexGrow: 1 }}>
                      {article.excerpt}
                    </p>
                    
                    <a 
                      href={`/artikler/${article.slug}`} 
                      className="btn-pill-outline btn-sm" 
                      style={{ alignSelf: 'flex-start', fontWeight: 600 }}
                    >
                      Les mer
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
