'use client'

import { motion } from 'framer-motion'
import { Search } from 'lucide-react'

import { Input } from '@/components/ui/input'

export const DocSearchBar = () => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className='mx-auto max-w-md'
      initial={{ opacity: 0, y: 10 }}
      transition={{ delay: 0.6, duration: 0.5 }}
    >
      <div className='relative'>
        <Search className='absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground' />
        <Input
          className='w-full rounded-full bg-background pl-10'
          placeholder='Search documentation...'
          type='text'
        />
      </div>
    </motion.div>
  )
}
