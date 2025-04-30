'use client'

import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/core/lib/utils'

const features = ['TypeScript Support', 'Modern API Design', 'Fully Documented', 'Tree-shakable']

export function HeroSection() {
  const router = useRouter()
  const handleRedirectDocument = () => {
    router.push('/documentation')
  }
  return (
    <section className='relative overflow-hidden py-16 md:py-24 lg:py-32'>
      <div className='absolute inset-0 -z-10 size-full bg-background'>
        <div
          className='absolute left-1/2 top-0 -z-10 h-[60rem] w-[90rem] -translate-x-1/2 opacity-20 blur-3xl'
          style={{
            background:
              'radial-gradient(circle, rgba(var(--chart-1), 0.8) 0%, rgba(var(--chart-2), 0.6) 25%, rgba(var(--chart-3), 0.4) 50%, rgba(var(--chart-4), 0.2) 75%, transparent 100%)'
          }}
        />
      </div>

      <div className='container mx-auto'>
        <div className='flex flex-col items-center space-y-8 text-center md:space-y-10'>
          <div className='inline-block rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground transition-colors duration-1000 animate-in slide-in-from-bottom-5'>
            Introducing CodeLib v1.0
          </div>

          <div className='mx-auto max-w-4xl space-y-3 delay-300 duration-1000 animate-in slide-in-from-bottom-6 md:space-y-4'>
            <h1 className='text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl xl:text-6xl'>
              The next-gen{' '}
              <span className='bg-gradient-to-r from-chart-1 via-chart-2 to-chart-3 bg-clip-text text-transparent'>
                code library
              </span>{' '}
              for modern apps
            </h1>
            <p className='mx-auto max-w-[700px] text-sm text-muted-foreground sm:text-base md:text-lg'>
              Build elegant, performant applications with our intuitive, type-safe library designed
              for developers who care about code quality.
            </p>
          </div>

          <div className='flex flex-wrap items-center justify-center gap-3 delay-500 duration-1000 animate-in slide-in-from-bottom-7 md:gap-4'>
            <Button
              className='h-10 gap-2 rounded-full px-4 text-sm md:h-11 md:px-5 md:text-base'
              size='lg'
              onClick={handleRedirectDocument}
            >
              <span>Get Started</span>
              <ArrowRight className='size-4' />
            </Button>
            <Link
              className='inline-flex h-10 items-center justify-center rounded-full border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:h-11 md:px-5 md:text-base'
              href='/documentation'
            >
              Read the docs
            </Link>
          </div>

          <div className='mx-auto grid w-full max-w-xs grid-cols-2 gap-2 pt-6 delay-700 duration-1000 animate-in slide-in-from-bottom-8 sm:max-w-lg sm:gap-4 md:max-w-2xl md:grid-cols-4 md:pt-8'>
            {features.map((feature, index) => (
              <div
                key={feature}
                className={cn(
                  'flex items-center justify-center gap-1 sm:gap-1.5 rounded-full border border-border bg-background px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm',
                  index % 2 === 0 ? 'animate-pulse-slow' : ''
                )}
              >
                <CheckCircle2 className='size-3 text-primary sm:size-3.5' />
                <span className='text-xs'>{feature}</span>
              </div>
            ))}
          </div>

          <div className='mx-auto mt-10 w-full max-w-full overflow-hidden rounded-xl border border-border/50 bg-card shadow-lg delay-1000 duration-1000 animate-in slide-in-from-bottom-10 sm:max-w-lg md:mt-16 md:max-w-2xl lg:max-w-3xl'>
            <div className='flex items-center border-b border-border/60 bg-muted/30 px-3 py-1.5 sm:px-4 sm:py-2'>
              <div className='flex gap-1'>
                <div className='size-2 rounded-full bg-destructive/80 sm:size-2.5' />
                <div className='size-2 rounded-full bg-chart-4/80 sm:size-2.5' />
                <div className='size-2 rounded-full bg-chart-3/80 sm:size-2.5' />
              </div>
              <div className='ml-3 text-xs text-muted-foreground sm:ml-4'>Example.tsx</div>
            </div>
            <pre className='overflow-x-auto p-3 font-mono text-xs sm:p-4 sm:text-sm'>
              <code className='text-foreground'>
                <span className='text-chart-2'>import</span>{' '}
                <span className='text-chart-5'>{'{'}</span>{' '}
                <span className='text-chart-3'>CodeLib</span>{' '}
                <span className='text-chart-5'>{'}'}</span>{' '}
                <span className='text-chart-2'>from</span>{' '}
                <span className='text-chart-1'>&quot;codelib&quot;</span>
                <br />
                <br />
                <span className='text-chart-2'>function</span>{' '}
                <span className='text-chart-4'>Example</span>
                <span className='text-foreground'>()</span>{' '}
                <span className='text-chart-5'>{'{'}</span>
                <br />
                {'  '}
                <span className='text-chart-2'>return</span> <span className='text-chart-5'>(</span>
                <br />
                {'    '}
                <span className='text-chart-5'>{'<'}</span>
                <span className='text-chart-3'>CodeLib.Container</span>
                <span className='text-chart-5'>{'>'}</span>
                <br />
                {'      '}
                <span className='text-chart-5'>{'<'}</span>
                <span className='text-chart-3'>CodeLib.Title</span>
                <span className='text-chart-5'>{'>'}</span>
                <span className='text-foreground'>Hello, World!</span>
                <span className='text-chart-5'>{'</'}</span>
                <span className='text-chart-3'>CodeLib.Title</span>
                <span className='text-chart-5'>{'>'}</span>
                <br />
                {'      '}
                <span className='text-chart-5'>{'<'}</span>
                <span className='text-chart-3'>CodeLib.Button</span>{' '}
                <span className='text-chart-4'>variant</span>
                <span className='text-foreground'>=</span>
                <span className='text-chart-1'>&quot;primary&quot;</span>
                <span className='text-chart-5'>{'>'}</span>
                <span className='text-foreground'>Click me</span>
                <span className='text-chart-5'>{'</'}</span>
                <span className='text-chart-3'>CodeLib.Button</span>
                <span className='text-chart-5'>{'>'}</span>
                <br />
                {'    '}
                <span className='text-chart-5'>{'</'}</span>
                <span className='text-chart-3'>CodeLib.Container</span>
                <span className='text-chart-5'>{'>'}</span>
                <br />
                {'  '}
                <span className='text-chart-5'>)</span>
                <br />
                <span className='text-chart-5'>{'}'}</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
