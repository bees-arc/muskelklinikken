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
      <main style={{ paddingTop: '100px', minHeight: '80vh', backgroundColor: 'var(--bg)' }}>
        <article style={{ paddingBlock: '80px' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <a 
              href="/artikler" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                fontSize: '0.9rem', 
                color: 'var(--text-3)', 
                marginBottom: '32px', 
                fontWeight: 600 
              }}
            >
              ← Tilbake til artikler
            </a>

            <span style={{ fontSize: '0.9rem', color: 'var(--text-3)', fontWeight: 600, display: 'block', marginBottom: '12px' }}>
              📅 {article.date}
            </span>

            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontFamily: 'var(--font-serif)', fontWeight: 700, lineHeight: 1.2, marginBottom: '48px', color: 'var(--text-1)' }}>
              {article.title}
            </h1>

            <div style={{ fontSize: '1.08rem', lineHeight: 1.8, color: 'var(--text-2)' }}>
              {article.paragraphs.map((p, idx) => {
                if (p.startsWith('## ')) {
                  return (
                    <h2 
                      key={idx} 
                      style={{ 
                        fontSize: '1.6rem', 
                        fontFamily: 'var(--font-serif)', 
                        fontWeight: 700, 
                        marginTop: '40px', 
                        marginBottom: '20px', 
                        color: 'var(--text-1)' 
                      }}
                    >
                      {p.substring(3)}
                    </h2>
                  )
                }
                return (
                  <p key={idx} style={{ marginBottom: '24px' }}>
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
