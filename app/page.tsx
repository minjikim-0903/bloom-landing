import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import PainPoints from '@/components/PainPoints'
import AppFeatures from '@/components/AppFeatures'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <AppFeatures />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
