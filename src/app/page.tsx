import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Steps from '@/components/Steps'
import Pillars from '@/components/Pillars'
import Testimonials from '@/components/Testimonials'
import VideoCTA from '@/components/VideoCTA'
import Ticker from '@/components/Ticker'
import FAQ from '@/components/FAQ'
import MapSection from '@/components/MapSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Steps />
        <Pillars />
        <Testimonials />
        <VideoCTA />
        <Ticker />
        <FAQ />
        <MapSection />
      </main>
      <Footer />
    </>
  )
}
