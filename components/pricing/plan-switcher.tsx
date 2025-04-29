'use client'

import { motion } from 'framer-motion'
import { cn } from '@/core/lib/utils'
import { usePricingStore } from '@/core/stores/pricing-store'

export const PlanSwitcher = () => {
  const { billing, setBilling } = usePricingStore()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className='mx-auto mb-16 inline-flex items-center justify-center rounded-full bg-muted p-1'
    >
      <button
        onClick={() => setBilling('monthly')}
        className={cn(
          'rounded-full px-4 py-2 text-sm font-medium transition-colors',
          billing === 'monthly' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted-foreground/10'
        )}
      >
        Monthly
      </button>
      <button
        onClick={() => setBilling('yearly')}
        className={cn(
          'rounded-full px-4 py-2 text-sm font-medium transition-colors',
          billing === 'yearly' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted-foreground/10'
        )}
      >
        Yearly
      </button>
    </motion.div>
  )
}
