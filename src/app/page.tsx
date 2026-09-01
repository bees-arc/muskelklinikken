import AnnouncementBar from '@/components/AnnouncementBar'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import InsuranceAccreditation from '@/components/InsuranceAccreditation'
import Pillars from '@/components/Pillars'
import ClinicalOutcomes from '@/components/ClinicalOutcomes'
import ServiceTiers from '@/components/ServiceTiers'
import MapSection from '@/components/MapSection'
import FAQ from '@/components/FAQ'
import ConversionBanner from '@/components/ConversionBanner'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="main-content-layout">
        <Hero />
        <About />
        <HowItWorks />
        <Testimonials />
        <InsuranceAccreditation />
        <Pillars />
        <ClinicalOutcomes />
        <ServiceTiers />
        <MapSection />
        <FAQ />
        <ConversionBanner />
      </main>
      <Footer />
    </>
  )
}
