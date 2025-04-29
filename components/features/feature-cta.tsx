'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export const FeatureCTA = () => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className='mt-16 text-center'
      initial={{ opacity: 0, y: 20 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      <div className='mx-auto max-w-2xl'>
        <h2 className='mb-6 text-3xl font-bold'>Ready to get started?</h2>
        <p className='mb-8 text-muted-foreground'>
          Join thousands of developers already using our library to build amazing apps.
        </p>
        <div className='flex flex-wrap justify-center gap-4'>
          <Button
            className='rounded-full'
            size='lg'
          >
            Get Started For Free
          </Button>
          <Link href='/documentation'>
            <Button
              className='rounded-full'
              size='lg'
              variant='outline'
            >
              View Documentation
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
