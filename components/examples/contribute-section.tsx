'use client'

import { motion } from 'framer-motion'
import { Github, Heart } from 'lucide-react'

import { Button } from '@/components/ui/button'

export const ContributeSection = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      className='mt-16 text-center'
      initial={{ opacity: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
    >
      <div className='mb-4 inline-flex items-center justify-center gap-2 rounded-full bg-muted/20 px-4 py-1.5 text-sm'>
        <Heart className='size-4 text-destructive' />
        <span>Want to contribute an example?</span>
      </div>
      <h2 className='mb-4 text-2xl font-bold'>Submit your own example</h2>
      <p className='mx-auto mb-8 max-w-2xl text-muted-foreground'>
        Have a great example to share with the community? We&apos;apos;apos;apos;d love to feature
        it here.
      </p>
      <Button
        className='gap-2'
        size='lg'
      >
        <Github className='size-5' />
        <span>Submit on GitHub</span>
      </Button>
    </motion.div>
  )
}
