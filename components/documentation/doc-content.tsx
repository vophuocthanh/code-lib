'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Github, PlayCircle } from 'lucide-react'

export const DocContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className='lg:flex-1'
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        id='introduction'
        className='prose prose-slate dark:prose-invert max-w-none'
      >
        <h2>Introduction</h2>
        <p>
          CodeLib is a modern UI library designed to help developers build beautiful, accessible, and performant web
          applications with ease. It provides a comprehensive set of components and utilities that work seamlessly
          together.
        </p>
        <p>
          Our library is built with TypeScript and designed to be tree-shakable, ensuring you only include what you need
          in your final bundle.
        </p>

        <div className='not-prose my-8 rounded-lg border border-border bg-muted/20 p-4'>
          <div className='mb-3 flex items-center gap-2'>
            <PlayCircle className='size-5 text-primary' />
            <h3 className='text-lg font-semibold'>Quick example</h3>
          </div>
          <pre className='overflow-x-auto rounded-md bg-muted/70 p-4 font-mono text-sm'>
            <code>{`import { Button } from 'codelib'

function App() {
  return (
    <Button variant="primary">
      Click me
    </Button>
  )
}`}</code>
          </pre>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className='my-8 flex flex-wrap gap-4'
        >
          <Button size='lg'>Get Started</Button>
          <Button size='lg' variant='outline'>
            <Github className='mr-2 size-4' />
            View on GitHub
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
