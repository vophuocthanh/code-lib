'use client'

import { motion } from 'framer-motion'
import { Check, Copy, Github, ChevronLeft, ChevronRight } from 'lucide-react'
import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
  vscDarkPlus,
  vs,
  dracula,
  atomDark,
  materialDark,
  materialLight
} from 'react-syntax-highlighter/dist/cjs/styles/prism'

import { documentationData } from '@/_mock/data-documentation.mock'
import LoadingFallback from '@/components/loading/loading-fallback'
import { Button } from '@/components/ui/button'
import { useCopyToClipboard } from '@/core/hooks/use-copy-to-clipboard'
import { cn } from '@/core/lib/utils'
import type { NavigationState, CodeProps } from '@/model/interface/section.interface'

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
}
const codeThemes = {
  vscDarkPlus,
  vs,
  dracula,
  atomDark,
  materialDark,
  materialLight
} as const

type ThemeType = keyof typeof codeThemes

const DocContentInner = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [currentContent, setCurrentContent] = useState<string>('')
  const [currentTitle, setCurrentTitle] = useState<string>('')
  const [navigation, setNavigation] = useState<NavigationState>({ prev: null, next: null })
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('dracula')
  const [isLoading, setIsLoading] = useState(true)

  const { isCopied, copyToClipboard } = useCopyToClipboard()

  useEffect(() => {
    const sectionId = searchParams.get('section') || documentationData[0].sections[0].id
    const allSections = documentationData.flatMap((cat) => cat.sections)
    const currentIndex = allSections.findIndex((s) => s.id === sectionId)
    const currentSection = allSections[currentIndex]

    if (currentSection) {
      setCurrentContent(currentSection.content)
      setCurrentTitle(currentSection.title)
      setNavigation({
        prev: currentIndex > 0 ? allSections[currentIndex - 1] : null,
        next: currentIndex < allSections.length - 1 ? allSections[currentIndex + 1] : null
      })
    }
    setIsLoading(false)
  }, [searchParams])

  if (isLoading) {
    return <LoadingFallback />
  }

  const handleCopyCode = (code: string) => {
    copyToClipboard(code)
  }

  const handleNavigation = (sectionId: string) => {
    router.push(`/documentation?section=${sectionId}`)
  }

  return (
    <div className='mx-auto flex w-full max-w-6xl justify-center px-4 py-8 md:px-8'>
      <motion.div
        animate='visible'
        className='prose prose-slate dark:prose-invert w-full'
        initial='hidden'
        variants={contentVariants}
      >
        <h1 className='mb-8 text-4xl font-bold tracking-tight'>{currentTitle}</h1>
        <ReactMarkdown
          components={{
            code: ({ node, inline, className, children, ...props }: CodeProps) => {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <div className='group relative'>
                  <div className='absolute right-2 top-2 z-10 flex items-center gap-2 rounded-md bg-white opacity-0 transition-opacity group-hover:opacity-100 dark:bg-gray-800'>
                    <select
                      className='rounded-md border bg-transparent px-2 py-1 text-sm'
                      value={currentTheme}
                      onChange={(e) => setCurrentTheme(e.target.value as ThemeType)}
                    >
                      <option value='vscDarkPlus'>VSCode Dark+</option>
                      <option value='vs'>VSCode Light</option>
                      <option value='dracula'>Dracula</option>
                      <option value='atomDark'>Atom Dark</option>
                      <option value='materialDark'>Material Dark</option>
                      <option value='materialLight'>Material Light</option>
                    </select>
                    <Button
                      className='size-8 p-0'
                      size='icon'
                      variant='ghost'
                      onClick={() => handleCopyCode(String(children))}
                    >
                      {isCopied ? <Check className='size-4' /> : <Copy className='size-4' />}
                      <span className='sr-only'>Copy code</span>
                    </Button>
                  </div>
                  {/* @ts-expect-error - react-syntax-highlighter type issue */}
                  <SyntaxHighlighter
                    className='!rounded-lg'
                    language={match[1]}
                    PreTag='div'
                    style={codeThemes[currentTheme]}
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                </div>
              ) : (
                <code
                  className={cn('rounded-md bg-muted px-1.5 py-0.5 font-mono text-sm', className)}
                  {...props}
                >
                  {children}
                </code>
              )
            }
          }}
        >
          {currentContent}
        </ReactMarkdown>

        <nav className='mt-16 flex items-center justify-between border-t pt-8'>
          <div>
            {navigation.prev && (
              <Button
                className='flex items-center gap-2'
                variant='ghost'
                onClick={() => navigation.prev && handleNavigation(navigation.prev.id)}
              >
                <ChevronLeft className='size-4' />
                {navigation.prev.title}
              </Button>
            )}
          </div>

          <div>
            {navigation.next && (
              <Button
                className='flex items-center gap-2'
                variant='ghost'
                onClick={() => navigation.next && handleNavigation(navigation.next.id)}
              >
                {navigation.next.title}
                <ChevronRight className='size-4' />
              </Button>
            )}
          </div>
        </nav>

        <motion.div
          animate={{ opacity: 1 }}
          className='mt-8 flex flex-wrap gap-4'
          initial={{ opacity: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <Button size='lg'>Get Started</Button>
          <Button
            size='lg'
            variant='outline'
          >
            <Github className='mr-2 size-4' />
            View on GitHub
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export const DocContent = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <DocContentInner />
    </Suspense>
  )
}
