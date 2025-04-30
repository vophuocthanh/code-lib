'use client'

import { motion } from 'framer-motion'
import { Check, Copy, FileIcon, Share2, ThumbsUp } from 'lucide-react'
import { useState } from 'react'

import { exampleItems } from '@/_mock/data-examples.mock'
import { Button } from '@/components/ui/button'
import { useCopyToClipboard } from '@/core/hooks/use-copy-to-clipboard'
import { useExamplesStore } from '@/core/stores/examples-store'

// Motion animation variants
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 100
    }
  }
}

interface ExampleItemProps {
  example: (typeof exampleItems)[0]
  index: number
}

const ExampleItem = ({ example, index }: ExampleItemProps) => {
  const [isCodeVisible, setIsCodeVisible] = useState(false)
  const { isCopied, copyToClipboard } = useCopyToClipboard()

  const handleCopyCode = (code: string) => {
    copyToClipboard(code)
  }

  const handleToggleCode = () => {
    setIsCodeVisible(!isCodeVisible)
  }

  return (
    <motion.div
      key={index}
      className='relative flex h-fit flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-md'
      variants={itemVariants}
    >
      <div className='flex h-full flex-col'>
        <div className='border-b p-6'>
          <h3 className='mb-2 text-xl font-bold'>{example.title}</h3>
          <p className='text-muted-foreground'>{example.description}</p>
        </div>

        <div className='flex flex-1 items-center justify-center bg-muted/20 p-6'>
          <div className='w-full rounded-lg border bg-card p-6'>{example.preview}</div>
        </div>

        <div className='border-t'>
          <div className='flex flex-col justify-between gap-4 p-4 sm:flex-row sm:items-center'>
            <div className='flex items-center gap-2'>
              <Button
                className='gap-1.5'
                size='sm'
                variant='ghost'
                onClick={() => handleCopyCode(example.code)}
              >
                {isCopied ? (
                  <>
                    <Check className='size-4' />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className='size-4' />
                    <span>Copy</span>
                  </>
                )}
              </Button>
              <Button
                size='sm'
                variant='ghost'
                onClick={handleToggleCode}
              >
                <FileIcon className='mr-1.5 size-4' />
                <span>{isCodeVisible ? 'Hide code' : 'View code'}</span>
              </Button>
            </div>
            <div className='flex items-center gap-2'>
              <Button
                size='icon'
                variant='ghost'
              >
                <ThumbsUp className='size-4' />
              </Button>
              <span className='text-sm text-muted-foreground'>{example.likes}</span>
              <Button
                size='icon'
                variant='ghost'
              >
                <Share2 className='size-4' />
              </Button>
            </div>
          </div>

          {isCodeVisible && (
            <motion.div
              animate={{ opacity: 1, height: 'auto' }}
              className='border-t'
              exit={{ opacity: 0, height: 0 }}
              initial={{ opacity: 0, height: 0 }}
            >
              <pre className='overflow-x-auto p-4 font-mono text-sm'>
                <code>{example.code}</code>
              </pre>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export const ExampleItems = () => {
  const { activeCategory } = useExamplesStore()

  const filteredExamples =
    activeCategory === 'All'
      ? exampleItems
      : exampleItems.filter((ex) => ex.category === activeCategory)

  return (
    <motion.div
      animate='visible'
      className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 [&>*]:h-fit'
      initial='hidden'
      variants={containerVariants}
    >
      {filteredExamples.map((example, index) => (
        <ExampleItem
          key={index}
          example={example}
          index={index}
        />
      ))}
    </motion.div>
  )
}
