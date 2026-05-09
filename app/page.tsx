import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import PainPoints from '@/components/PainPoints'
import Solutions from '@/components/Solutions'
import Target from '@/components/Target'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Solutions />
        <Target />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
