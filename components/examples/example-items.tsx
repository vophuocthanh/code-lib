'use client'

import { motion } from 'framer-motion'
import { Copy, FileIcon, Share2, ThumbsUp } from 'lucide-react'

import { Button } from '@/components/ui/button'
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

export const exampleItems = [
  {
    title: 'Basic Button Group',
    description: 'A simple example of button group with different variants',
    category: 'Basics',
    likes: 128,
    code: `import { Button } from 'codelib'

function ButtonExample() {
  return (
    <div className="flex gap-2">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  )
}`,
    preview: (
      <div className='flex flex-wrap gap-2'>
        <Button variant='default'>Default</Button>
        <Button variant='secondary'>Secondary</Button>
        <Button variant='outline'>Outline</Button>
        <Button variant='ghost'>Ghost</Button>
      </div>
    )
  },
  {
    title: 'Card with Hover Effect',
    description: 'Interactive card with smooth hover animations',
    category: 'Basics',
    likes: 95,
    code: `function HoverCard() {
  return (
    <div className="group rounded-lg border p-4 transition-all hover:shadow-md">
      <h3 className="text-lg font-medium transition-colors group-hover:text-primary">
        Hover Card
      </h3>
      <p className="text-sm text-muted-foreground">
        This card has a nice hover effect
      </p>
    </div>
  )
}`,
    preview: (
      <div className='group rounded-lg border p-4 transition-all hover:shadow-md'>
        <h3 className='text-lg font-medium transition-colors group-hover:text-primary'>
          Hover Card
        </h3>
        <p className='text-sm text-muted-foreground'>This card has a nice hover effect</p>
      </div>
    )
  },
  {
    title: 'Navigation Menu',
    description: 'Responsive navigation menu with mobile support',
    category: 'Navigation',
    likes: 154,
    code: `function NavMenu() {
  return (
    <nav className="flex items-center justify-between border-b p-4">
      <div className="font-bold">Brand</div>
      <div className="hidden md:flex space-x-4">
        <a href="#" className="hover:text-primary">Home</a>
        <a href="#" className="hover:text-primary">About</a>
        <a href="#" className="hover:text-primary">Features</a>
        <a href="#" className="hover:text-primary">Contact</a>
      </div>
      <button className="md:hidden">Menu</button>
    </nav>
  )
}`,
    preview: (
      <nav className='flex w-full items-center justify-between rounded-lg border-b p-4'>
        <div className='font-bold'>Brand</div>
        <div className='hidden space-x-4 md:flex'>
          <a
            className='hover:text-primary'
            href='#'
          >
            Home
          </a>
          <a
            className='hover:text-primary'
            href='#'
          >
            About
          </a>
          <a
            className='hover:text-primary'
            href='#'
          >
            Features
          </a>
          <a
            className='hover:text-primary'
            href='#'
          >
            Contact
          </a>
        </div>
        <button className='md:hidden'>Menu</button>
      </nav>
    )
  },
  {
    title: 'Simple Form Layout',
    description: 'Clean form layout with responsive design',
    category: 'Forms',
    likes: 87,
    code: `function SimpleForm() {
  return (
    <form className="space-y-4 rounded-lg border p-6">
      <div className="space-y-2">
        <label className="text-sm font-medium">Email</label>
        <input 
          type="email" 
          className="w-full rounded-md border px-3 py-2"
          placeholder="email@example.com" 
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Password</label>
        <input 
          type="password" 
          className="w-full rounded-md border px-3 py-2"
          placeholder="••••••••" 
        />
      </div>
      <button 
        type="submit"
        className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
      >
        Sign In
      </button>
    </form>
  )
}`,
    preview: (
      <form className='w-full max-w-sm space-y-4 rounded-lg border p-6'>
        <div className='space-y-2'>
          <label className='text-sm font-medium'>Email</label>
          <input
            className='w-full rounded-md border px-3 py-2'
            placeholder='email@example.com'
            type='email'
          />
        </div>
        <div className='space-y-2'>
          <label className='text-sm font-medium'>Password</label>
          <input
            className='w-full rounded-md border px-3 py-2'
            placeholder='••••••••'
            type='password'
          />
        </div>
        <button
          className='rounded-md bg-primary px-4 py-2 text-primary-foreground'
          type='submit'
        >
          Sign In
        </button>
      </form>
    )
  }
]

export const ExampleItems = () => {
  const { activeCategory, activeTab, setActiveTab } = useExamplesStore()

  const filteredExamples =
    activeCategory === 'All'
      ? exampleItems
      : exampleItems.filter((ex) => ex.category === activeCategory)

  return (
    <motion.div
      animate='visible'
      className='grid gap-8 sm:grid-cols-2 lg:grid-cols-2'
      initial='hidden'
      variants={containerVariants}
    >
      {filteredExamples.map((example, index) => (
        <motion.div
          key={index}
          className='overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-md'
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
                  >
                    <Copy className='size-4' />
                    <span>Copy</span>
                  </Button>
                  <Button
                    size='sm'
                    variant='ghost'
                    onClick={() => {
                      setActiveTab(activeTab === example.title ? null : example.title)
                    }}
                  >
                    <FileIcon className='mr-1.5 size-4' />
                    <span>{activeTab === example.title ? 'Hide code' : 'View code'}</span>
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

              {activeTab === example.title && (
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
      ))}
    </motion.div>
  )
}
