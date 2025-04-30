/* eslint-disable tailwindcss/no-custom-classname */
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import { documentationData } from '@/_mock/data-documentation.mock'
import { cn } from '@/core/lib/utils'

const sidebarVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut'
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0
  }
}

const listVariants = {
  visible: {
    transition: {
      staggerChildren: 0.06
    }
  }
}

export const DocSidebar = () => {
  const searchParams = useSearchParams()
  const currentSection = searchParams.get('section') || documentationData[0].sections[0].id

  return (
    <motion.div
      animate='visible'
      className='h-full border-r'
      initial='hidden'
      variants={sidebarVariants}
    >
      <nav className='space-y-4 p-4'>
        <motion.div
          animate='visible'
          className='space-y-4'
          initial='hidden'
          variants={listVariants}
        >
          {documentationData.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
            >
              <div className='flex items-center gap-2 py-2'>
                <category.icon className='size-4 text-muted-foreground' />
                <h3 className='text-sm font-medium text-foreground'>{category.title}</h3>
              </div>
              <div className='ml-6 space-y-1'>
                {category.sections.map((section) => (
                  <Link
                    key={section.id}
                    className={cn(
                      'block rounded-md px-3 py-1.5 text-sm transition-colors hover:bg-muted',
                      currentSection === section.id
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                    href={`/documentation?section=${section.id}`}
                  >
                    {section.title}
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </nav>
    </motion.div>
  )
}
