'use client'

import { motion } from 'framer-motion'

import { docCategories } from '@/_mock/data-.mock'
import { MotionContainer } from '@/components/common/motion-container'

export const DocSidebar = () => {
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

  return (
    <motion.aside
      animate={{ opacity: 1, x: 0 }}
      className='shrink-0 lg:w-64'
      initial={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className='sticky top-8'>
        <MotionContainer
          animation='stagger'
          className='space-y-8'
        >
          {docCategories.map((category, idx) => (
            <motion.div
              key={idx}
              className='space-y-2'
              variants={itemVariants}
            >
              <div className='flex items-center gap-2 font-medium text-foreground'>
                {category.icon}
                <span>{category.title}</span>
              </div>
              <ul className='space-y-1 border-l border-border pl-4'>
                {category.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      className='block py-1 text-sm text-muted-foreground transition-colors hover:text-foreground'
                      href={link.href}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </MotionContainer>
      </div>
    </motion.aside>
  )
}
