'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, X } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { dataPlans } from '@/_mock/data-plans.mock'
import { MotionContainer } from '@/components/common/motion-container'
import { Button } from '@/components/ui/button'
import { cn } from '@/core/lib/utils'
import { usePricingStore } from '@/core/stores/pricing-store'

export const PricingPlans = () => {
  const { billing } = usePricingStore()
  const router = useRouter()
  const handleRedirectDocument = () => {
    router.push('/documentation')
  }

  return (
    <MotionContainer
      animation='stagger'
      className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
    >
      {dataPlans.map((plan) => (
        <motion.div
          key={plan.name}
          className={cn(
            'relative flex flex-col overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition',
            plan.popular ? `border-2 ${plan.color} shadow-md` : 'border-border'
          )}
          whileHover={{ y: -5 }}
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
              <li
                key={featureIndex}
                className='flex items-center'
              >
                {feature.included ? (
                  <CheckCircle className='mr-2 size-4 text-primary' />
                ) : (
                  <X className='mr-2 size-4 text-muted-foreground' />
                )}
                <span className={feature.included ? '' : 'text-muted-foreground'}>
                  {feature.name}
                </span>
              </li>
            ))}
          </ul>

          <div className='mt-auto'>
            <Button
              className={cn(
                'w-full gap-2 rounded-lg',
                plan.popular ? 'bg-primary text-primary-foreground' : ''
              )}
              size='lg'
              variant={plan.popular ? 'default' : 'outline'}
              onClick={handleRedirectDocument}
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
