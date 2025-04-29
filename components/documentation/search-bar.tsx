'use client'

import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

export const DocSearchBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className='mx-auto max-w-md'
    >
      <div className='relative'>
        <Search className='absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground' />
        <Input type='text' placeholder='Search documentation...' className='w-full rounded-full bg-background pl-10' />
      </div>
    </motion.div>
  )
}
