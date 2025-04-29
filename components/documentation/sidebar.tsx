'use client'

import { MotionContainer } from '@/components/common/motion-container'
import { Book, Code, FileText } from 'lucide-react'
import { motion } from 'framer-motion'

// Documentation categories
export const docCategories = [
  {
    title: 'Getting Started',
    icon: <Book className='size-5' />,
    links: [
      { title: 'Introduction', href: '#introduction' },
      { title: 'Installation', href: '#installation' },
      { title: 'Quick Start', href: '#quick-start' },
      { title: 'Configuration', href: '#configuration' }
    ]
  },
  {
    title: 'Core Concepts',
    icon: <FileText className='size-5' />,
    links: [
      { title: 'Component Model', href: '#component-model' },
      { title: 'State Management', href: '#state-management' },
      { title: 'Type System', href: '#type-system' },
      { title: 'Performance', href: '#performance' }
    ]
  },
  {
    title: 'API Reference',
    icon: <Code className='size-5' />,
    links: [
      { title: 'Core API', href: '#core-api' },
      { title: 'Hooks', href: '#hooks' },
      { title: 'Utilities', href: '#utilities' },
      { title: 'Advanced', href: '#advanced' }
    ]
  }
]

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
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className='shrink-0 lg:w-64'
    >
      <div className='sticky top-8'>
        <MotionContainer animation='stagger' className='space-y-8'>
          {docCategories.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants} className='space-y-2'>
              <div className='flex items-center gap-2 font-medium text-foreground'>
                {category.icon}
                <span>{category.title}</span>
              </div>
              <ul className='space-y-1 border-l border-border pl-4'>
                {category.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className='block py-1 text-sm text-muted-foreground transition-colors hover:text-foreground'
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
