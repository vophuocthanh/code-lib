'use client'

import { Github, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import * as React from 'react'

import { ThemeToggle } from '@/components/toggle-mode/theme-toggle'
import { Button } from '@/components/ui/button'
import { cn } from '@/core/lib/utils'

const navItems = [
  { name: 'Features', href: '/features' },
  { name: 'Documentation', href: '/documentation' },
  { name: 'Examples', href: '/examples' },
  { name: 'Pricing', href: '/pricing' }
]

export function Navbar() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const pathname = usePathname()

  const handleRedirectDocument = () => {
    router.push('/documentation')
  }

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleToggleMenu()
    }
  }

  return (
    <header className='sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto'>
        <div className='flex h-16 w-full items-center justify-between'>
          <div className='flex items-center gap-3 sm:gap-6'>
            <Link
              className='flex items-center space-x-2'
              href='/'
            >
              <div className='flex items-center justify-center overflow-hidden'>
                <div className='relative flex size-6 items-center justify-center rounded bg-primary font-bold text-primary-foreground'>
                  <span className='absolute text-[15px] font-bold'>C</span>
                  <div className='absolute size-6 animate-pulse rounded-full bg-primary/50' />
                </div>
              </div>
              <span className='hidden font-bold sm:inline-block'>CodeLib</span>
            </Link>

            <nav className='hidden gap-4 md:flex lg:gap-6'>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  className={cn(
                    'text-sm font-medium text-muted-foreground transition-colors hover:text-foreground',
                    pathname !== '/' && pathname.startsWith(item.href) && 'text-foreground'
                  )}
                  href={item.href}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className='flex items-center gap-2'>
            <div className='hidden items-center gap-2 md:flex'>
              <a
                aria-label='GitHub repository'
                className='inline-flex size-9 items-center justify-center rounded-full bg-transparent text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
                href='https://github.com/vophuocthanh/code-lib'
                rel='noopener noreferrer'
                target='_blank'
              >
                <Github className='size-5' />
              </a>
              <ThemeToggle />
              <Button
                className='ml-2 px-3 sm:ml-4 sm:px-4'
                size='sm'
                onClick={handleRedirectDocument}
              >
                Get Started
              </Button>
            </div>

            <div className='flex items-center gap-2 md:hidden'>
              <ThemeToggle />
              <button
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                className='inline-flex size-9 items-center justify-center rounded-full bg-transparent text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
                type='button'
                onClick={handleToggleMenu}
                onKeyDown={handleKeyDown}
              >
                {isMenuOpen ? <X className='size-5' /> : <Menu className='size-5' />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className='absolute inset-x-0 top-16 z-50 origin-top border-b border-border/40 bg-background p-2 shadow-lg animate-in slide-in-from-top-5 md:hidden'>
          <nav className='flex flex-col gap-2 p-2'>
            {navItems.map((item) => (
              <Link
                key={item.href}
                className='flex w-full rounded-md p-2 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground'
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className='mt-2 flex items-center justify-between border-t border-border/60 pt-4'>
              <a
                className='flex items-center gap-1.5 rounded-md p-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground'
                href='https://github.com/vophuocthanh/code-lib'
                rel='noopener noreferrer'
                target='_blank'
              >
                <Github className='size-4' />
                <span>GitHub</span>
              </a>
              <Button
                className='px-3'
                size='sm'
                onClick={() => {
                  setIsMenuOpen(false)
                  handleRedirectDocument()
                }}
              >
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
