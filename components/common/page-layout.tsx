'use client'

import React from 'react'

import { Footer } from '@/components/home/footer'
import { Navbar } from '@/components/home/navbar'
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
