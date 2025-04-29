'use client'

import { Moon, Sun } from 'lucide-react'
import * as React from 'react'

import { useTheme } from '@/components/theme-provider'
import { cn } from '@/core/lib/utils'

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()

  const handleToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleToggle()
    }
  }

  return (
    <button
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className={cn(
        'inline-flex h-9 w-9 items-center justify-center rounded-full bg-transparent text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
        className
      )}
      tabIndex={0}
      type='button'
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
    >
      {theme === 'light' ? <Sun className='size-5' /> : <Moon className='size-5' />}
    </button>
  )
}
