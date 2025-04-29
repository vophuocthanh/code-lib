'use client'

import { motion } from 'framer-motion'

export const PricingFAQ = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      className='mx-auto mt-24 max-w-3xl text-center'
      initial={{ opacity: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <h2 className='mb-4 text-2xl font-bold'>Frequently Asked Questions</h2>
      <div className='mt-8 grid gap-6 sm:grid-cols-2'>
        <div className='rounded-lg border p-5'>
          <h3 className='font-medium'>Can I change plans later?</h3>
          <p className='mt-1.5 text-sm text-muted-foreground'>
            Yes, you can upgrade or downgrade your plan at any time from your account settings.
          </p>
        </div>
        <div className='rounded-lg border p-5'>
          <h3 className='font-medium'>What payment methods do you accept?</h3>
          <p className='mt-1.5 text-sm text-muted-foreground'>
            We accept all major credit cards, PayPal, and bank transfers for yearly plans.
          </p>
        </div>
        <div className='rounded-lg border p-5'>
          <h3 className='font-medium'>Do you offer refunds?</h3>
          <p className='mt-1.5 text-sm text-muted-foreground'>
            Yes, we offer a 14-day money-back guarantee for all paid plans.
          </p>
        </div>
        <div className='rounded-lg border p-5'>
          <h3 className='font-medium'>Can I try before I buy?</h3>
          <p className='mt-1.5 text-sm text-muted-foreground'>
            Yes, the Starter plan is free to use with limited features.
          </p>
        </div>
      </div>
    </motion.div>
  )
}
