'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import React from 'react'
import { cn } from '@/core/lib/utils'

type PageLayoutProps = {
  children: React.ReactNode
  className?: string
}

export const PageLayout = ({ children, className }: PageLayoutProps) => {
  return (
    <div className={cn('flex min-h-screen flex-col', className)}>
      <Navbar />
      <main className='grow'>{children}</main>
      <Footer />
    </div>
  )
}
