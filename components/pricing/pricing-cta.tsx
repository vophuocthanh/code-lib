'use client'

import { motion } from 'framer-motion'

import { Button } from '@/components/ui/button'

export const PricingCTA = () => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className='mt-16 rounded-xl border bg-card p-8 shadow-sm'
      initial={{ opacity: 0, y: 20 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
        <div>
          <h3 className='text-xl font-bold'>Need a custom plan?</h3>
          <p className='text-muted-foreground'>
            Contact us for custom pricing and requirements for your specific needs.
          </p>
        </div>
        <Button
          className='mt-4 md:mt-0'
          size='lg'
        >
          Contact Sales
        </Button>
      </div>
    </motion.div>
  )
}
