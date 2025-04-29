'use client'

import { motion } from 'framer-motion'
import { cn } from '@/core/lib/utils'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, X } from 'lucide-react'
import { MotionContainer } from '@/components/common/motion-container'
import { usePricingStore } from '@/core/stores/pricing-store'

// Pricing plans data
export const plans = [
  {
    name: 'Starter',
    price: {
      monthly: 0,
      yearly: 0
    },
    description: 'Perfect for trying out CodeLib for your personal projects.',
    features: [
      { name: 'Up to 3 projects', included: true },
      { name: 'Basic components', included: true },
      { name: 'Community support', included: true },
      { name: 'Light/Dark theme', included: true },
      { name: 'Basic documentation', included: true },
      { name: 'Email support', included: false },
      { name: 'Premium components', included: false },
      { name: 'Advanced features', included: false }
    ],
    popular: false,
    color: 'border-chart-3'
  },
  {
    name: 'Pro',
    price: {
      monthly: 49,
      yearly: 39
    },
    description: 'For individuals and small teams building professional apps.',
    features: [
      { name: 'Unlimited projects', included: true },
      { name: 'All components', included: true },
      { name: 'Priority support', included: true },
      { name: 'Custom themes', included: true },
      { name: 'Full documentation', included: true },
      { name: 'Email support', included: true },
      { name: 'Premium components', included: true },
      { name: 'Advanced features', included: false }
    ],
    popular: true,
    color: 'border-primary'
  },
  {
    name: 'Enterprise',
    price: {
      monthly: 99,
      yearly: 89
    },
    description: 'For organizations with advanced needs and larger teams.',
    features: [
      { name: 'Unlimited projects', included: true },
      { name: 'All components', included: true },
      { name: 'Dedicated support', included: true },
      { name: 'Custom themes', included: true },
      { name: 'Full documentation', included: true },
      { name: 'Email support', included: true },
      { name: 'Premium components', included: true },
      { name: 'Advanced features', included: true }
    ],
    popular: false,
    color: 'border-chart-2'
  }
]

export const PricingPlans = () => {
  const { billing } = usePricingStore()

  return (
    <MotionContainer animation='stagger' className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {plans.map((plan, index) => (
        <motion.div
          key={plan.name}
          whileHover={{ y: -5 }}
          className={cn(
            'relative flex flex-col overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition',
            plan.popular ? `border-2 ${plan.color} shadow-md` : 'border-border'
          )}
        >
          {plan.popular && (
            <div className='absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground'>
              Most Popular
            </div>
          )}

          <div className='mb-5'>
            <h3 className='text-xl font-bold'>{plan.name}</h3>
            <p className='mt-2 text-muted-foreground'>{plan.description}</p>
          </div>

          <div className='mb-6'>
            <div className='flex items-baseline'>
              <span className='text-3xl font-bold'>${plan.price[billing]}</span>
              <span className='ml-1 text-muted-foreground'>/ month</span>
            </div>
            {billing === 'yearly' && (
              <p className='mt-1 text-sm text-primary'>
                Save ${(plan.price.monthly - plan.price.yearly) * 12} per year
              </p>
            )}
          </div>

          <ul className='mb-8 space-y-3 text-sm'>
            {plan.features.map((feature, featureIndex) => (
              <li key={featureIndex} className='flex items-center'>
                {feature.included ? (
                  <CheckCircle className='mr-2 size-4 text-primary' />
                ) : (
                  <X className='mr-2 size-4 text-muted-foreground' />
                )}
                <span className={feature.included ? '' : 'text-muted-foreground'}>{feature.name}</span>
              </li>
            ))}
          </ul>

          <div className='mt-auto'>
            <Button
              className={cn('w-full gap-2 rounded-lg', plan.popular ? 'bg-primary text-primary-foreground' : '')}
              variant={plan.popular ? 'default' : 'outline'}
              size='lg'
            >
              <span>Get Started</span>
              <ArrowRight className='size-4' />
            </Button>
          </div>
        </motion.div>
      ))}
    </MotionContainer>
  )
}
