import { Sparkles } from 'lucide-react'

import { SectionContainer } from '@/components/common/section-container'
import SectionHeading from '@/components/common/section-heading'
import { PlanSwitcher } from '@/components/pricing/plan-switcher'
import { PricingCTA } from '@/components/pricing/pricing-cta'
import { PricingFAQ } from '@/components/pricing/pricing-faq'
import { PricingPlans } from '@/components/pricing/pricing-plans'

export default function PricingPage() {
  return (
    <>
      <SectionContainer>
        <SectionHeading
          animation
          center
          badge={{
            text: 'Flexible Pricing',
            icon: <Sparkles className='size-3.5' />,
            className: 'bg-primary/10 text-primary'
          }}
          description="Whether you're building a small project or enterprise application, we have a plan that's right for you."
          title='Pick the perfect plan for your project'
        />

        <PlanSwitcher />

        <PricingPlans />

        <PricingCTA />

        <PricingFAQ />
      </SectionContainer>
    </>
  )
}
