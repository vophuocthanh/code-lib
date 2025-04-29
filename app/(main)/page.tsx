import { CTASection } from '@/components/home/cta-section'
import { FeaturesSection } from '@/components/home/features-section'
import { HeroSection } from '@/components/home/hero-section'
import { TestimonialsSection } from '@/components/home/testimonials-section'

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col'>
      <main className='grow'>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
    </div>
  )
}
