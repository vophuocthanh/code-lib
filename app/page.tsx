import { CTASection } from '@/components/cta-section'
import { FeaturesSection } from '@/components/features-section'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { Navbar } from '@/components/navbar'
import { TestimonialsSection } from '@/components/testimonials-section'

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Navbar />
      <main className='grow'>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
