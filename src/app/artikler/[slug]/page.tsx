import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ARTICLES } from '@/data/articles'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }))
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = ARTICLES.find((a) => a.slug === slug)

  if (!article) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="subpage-container">
        <article>
          <div className="container" style={{ maxWidth: '840px' }}>
            <a 
              href="/artikler" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                fontSize: '0.88rem', 
                color: 'var(--accent-coffee)', 
                marginBottom: '24px', 
                fontWeight: 600 
              }}
            >
              ← Tilbake til artikler
            </a>

            <div className="subpage-header-wrap">
              <span style={{ fontSize: '0.82rem', color: 'var(--accent-coffee)', fontWeight: 700, display: 'block', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                {article.date}
              </span>

              <h1 className="subpage-title" style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', marginBottom: '32px' }}>
                {article.title}
              </h1>
            </div>

            {article.image && (
              <div className="subpage-banner-card" style={{ height: '340px', marginBottom: '40px' }}>
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="subpage-banner-img"
                />
              </div>
            )}

            <div style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-2)' }}>
              {article.paragraphs.map((p, idx) => {
                if (p.startsWith('## ')) {
                  return (
                    <h2 
                      key={idx} 
                      style={{ 
                        fontSize: '1.35rem', 
                        fontFamily: 'var(--font-heading)', 
                        fontWeight: 700, 
                        marginTop: '36px', 
                        marginBottom: '16px', 
                        color: 'var(--text-pure)' 
                      }}
                    >
                      {p.substring(3)}
                    </h2>
                  )
                }
                return (
                  <p key={idx} style={{ marginBottom: '20px' }}>
                    {p}
                  </p>
                )
              })}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
