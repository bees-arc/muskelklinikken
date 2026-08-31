import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ARTICLES } from '@/data/articles'

export default function ArtiklerIndex() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '80vh', backgroundColor: 'var(--bg)' }}>
        <section style={{ paddingBlock: '80px' }}>
          <div className="container">
            <span className="overline" style={{ display: 'block', marginBottom: '12px', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-3)', fontWeight: 700 }}>
              Fagstoff & Artikler
            </span>
            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontFamily: 'var(--font-serif)', fontWeight: 700, lineHeight: 1.15, marginBottom: '20px', color: 'var(--text-1)' }}>
              Våre artikler
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-2)', maxWidth: '800px', marginBottom: '60px', lineHeight: 1.6 }}>
              Her deler vi kunnskap, tips, og forskning knyttet til fysioterapi, opptrening, helse og livsstilsendring. Vårt mål er å holde deg oppdatert med evidensbasert fagstoff.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px', marginBottom: '60px' }}>
              {ARTICLES.map((article) => (
                <article 
                  key={article.slug} 
                  style={{ 
                    backgroundColor: 'var(--bg-card)', 
                    border: '1px solid var(--border)', 
                    borderRadius: '16px', 
                    padding: '30px', 
                    display: 'flex', 
                    flexDirection: 'column',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                  }}
                >
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-3)', fontWeight: 600, marginBottom: '12px', display: 'block' }}>
                    📅 {article.date}
                  </span>
                  
                  <h2 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-serif)', fontWeight: 700, lineHeight: 1.3, marginBottom: '16px', color: 'var(--text-1)' }}>
                    <a href={`/artikler/${article.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      {article.title}
                    </a>
                  </h2>
                  
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--text-2)', marginBottom: '24px' }}>
                    {article.excerpt}
                  </p>
                  
                  <a 
                    href={`/artikler/${article.slug}`} 
                    className="btn btn-pill btn-outline btn-sm" 
                    style={{ marginTop: 'auto', alignSelf: 'flex-start', fontWeight: 600 }}
                  >
                    Les mer
                  </a>
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
