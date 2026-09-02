import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Pillars from '@/components/Pillars'
import Testimonials from '@/components/Testimonials'
import MapSection from '@/components/MapSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="main-content-layout">
        {/* 1. Hero */}
        <Hero />
        {/* 2. Introduction */}
        <About />
        {/* 3. Services */}
        <Pillars />
        {/* 4. Reviews */}
        <Testimonials />
        {/* 5. Contact */}
        <MapSection />
      </main>
      <Footer />
    </>
  )
}

