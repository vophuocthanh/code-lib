'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const FeatureCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className='mt-16 text-center'
    >
      <div className='mx-auto max-w-2xl'>
        <h2 className='mb-6 text-3xl font-bold'>Ready to get started?</h2>
        <p className='mb-8 text-muted-foreground'>
          Join thousands of developers already using our library to build amazing apps.
        </p>
        <div className='flex flex-wrap justify-center gap-4'>
          <Button size='lg' className='rounded-full'>
            Get Started For Free
          </Button>
          <Link href='/documentation'>
            <Button size='lg' variant='outline' className='rounded-full'>
              View Documentation
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
