import { PageLayout } from '@/components/common/page-layout'
import { SectionContainer } from '@/components/common/section-container'
import { PlanSwitcher } from '@/components/pricing/plan-switcher'
import { PricingPlans } from '@/components/pricing/pricing-plans'
import { PricingCTA } from '@/components/pricing/pricing-cta'
import { Sparkles } from 'lucide-react'
import { PricingFAQ } from '@/components/pricing/pricing-faq'
import SectionHeading from '@/components/common/section-heading'

export default function PricingPage() {
  return (
    <PageLayout>
      <SectionContainer>
        <SectionHeading
          badge={{
            text: 'Flexible Pricing',
            icon: <Sparkles className='size-3.5' />,
            className: 'bg-primary/10 text-primary'
          }}
          title='Pick the perfect plan for your project'
          description="Whether you're building a small project or enterprise application, we have a plan that's right for you."
          center
          animation
        />

        <PlanSwitcher />

        <PricingPlans />

        <PricingCTA />

        <PricingFAQ />
      </SectionContainer>
    </PageLayout>
  )
}
