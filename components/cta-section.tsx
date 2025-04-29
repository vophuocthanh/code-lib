import * as React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className='relative overflow-hidden py-16 md:py-24 lg:py-32'>
      <div className='absolute inset-0 -z-10 size-full bg-background'>
        <div
          className='absolute bottom-0 left-1/2 -z-10 h-80 w-full max-w-[90rem] -translate-x-1/2 opacity-20 blur-3xl md:h-[30rem]'
          style={{
            background:
              'radial-gradient(circle, rgba(var(--chart-2), 0.8) 0%, rgba(var(--chart-3), 0.6) 25%, rgba(var(--chart-4), 0.4) 50%, rgba(var(--chart-5), 0.2) 75%, transparent 100%)'
          }}
        />
      </div>

      <div className='container mx-auto px-4 sm:px-6'>
        <div className='mx-auto flex w-full max-w-[95%] flex-col items-center gap-5 rounded-lg border border-border bg-card p-4 shadow-lg duration-1000 animate-in slide-in-from-bottom-4 sm:max-w-[95%] sm:gap-6 sm:p-5 md:max-w-3xl md:gap-6 md:p-8 lg:max-w-4xl lg:p-12'>
          <div className='inline-block rounded-full bg-chart-2/10 px-3 py-1 text-sm font-medium text-chart-2'>
            Ready to start building?
          </div>

          <h2 className='text-center text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl'>
            Join thousands of developers using <span className='text-primary'>CodeLib</span> today
          </h2>

          <p className='mx-auto w-full text-center text-sm text-muted-foreground sm:text-base md:text-lg'>
            Get started with our comprehensive documentation and examples. Build your next project faster and better.
          </p>

          <div className='flex flex-wrap items-center justify-center gap-3 md:gap-4'>
            <Button size='lg' className='h-10 gap-2 rounded-full px-4 text-sm md:h-11 md:px-5 md:text-base'>
              <span>Get Started for Free</span>
              <ArrowRight className='size-4' />
            </Button>
            <Link
              href='https://github.com/yourusername/codelib'
              className='inline-flex h-10 items-center justify-center rounded-full border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:h-11 md:px-5 md:text-base'
            >
              View on GitHub
            </Link>
          </div>

          <div className='mt-4 flex flex-col items-center gap-2 text-center text-xs text-muted-foreground sm:text-sm'>
            <p>No credit card required. Free plan available for personal and small projects.</p>
            <p>Enterprise support and custom plans available for larger teams.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
