'use client'

import { motion } from 'framer-motion'
import { cn } from '@/core/lib/utils'
import { useExamplesStore } from '@/core/stores/examples-store'

export const categories = ['All', 'Basics', 'Forms', 'Layouts', 'Navigation', 'Advanced']

export const ExampleCategories = () => {
  const { activeCategory, setActiveCategory } = useExamplesStore()

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className='mb-12 flex flex-wrap justify-center gap-2'
    >
      {categories.map((category, index) => (
        <motion.button
          key={category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3 + index * 0.1 }
          }}
          onClick={() => setActiveCategory(category)}
          className={cn(
            'px-4 py-2 rounded-full text-sm font-medium transition-colors',
            activeCategory === category
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted/50 hover:bg-muted/80 text-foreground'
          )}
        >
          {category}
        </motion.button>
      ))}
    </motion.div>
  )
}
