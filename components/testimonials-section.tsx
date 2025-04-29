'use client'

import * as React from 'react'
import { cn } from '@/core/lib/utils'
import { Star, User } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Frontend Developer',
    company: 'TechCorp',
    content:
      'CodeLib has transformed our development workflow. The TypeScript integration is flawless, and the performance gains are remarkable. Our team has been able to deliver features twice as fast.',
    stars: 5
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    company: 'StartupX',
    content:
      'After evaluating several libraries, we chose CodeLib for our new product. The documentation is outstanding, and the community support is excellent. Highly recommended!',
    stars: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Senior Developer',
    company: 'InnovateLabs',
    content:
      'The API design is intuitive and consistent. CodeLib made it easy to onboard new team members and accelerate our development cycle. The tree-shaking capabilities keep our bundle size optimized.',
    stars: 4
  },
  {
    name: 'David Wilson',
    role: 'Lead Engineer',
    company: 'EnterpriseApp',
    content:
      "We've been using CodeLib in production for over a year now, and it's proven to be reliable and performant. The updates are always backward compatible, which we appreciate.",
    stars: 5
  }
]

export function TestimonialsSection() {
  return (
    <section className='bg-muted/30 py-16 md:py-24 lg:py-32'>
      <div className='container mx-auto'>
        <div className='mb-10 flex flex-col items-center justify-center space-y-3 text-center md:mb-16 md:space-y-4'>
          <div className='inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary'>
            Testimonials
          </div>
          <h2 className='mx-auto max-w-3xl text-2xl font-bold tracking-tighter md:text-3xl lg:text-4xl'>
            Loved by developers <span className='text-primary'>worldwide</span>
          </h2>
          <p className='mx-auto max-w-[700px] text-sm text-muted-foreground sm:text-base md:text-lg'>
            Don&apos;t just take our word for it. See what others have to say about their experience with CodeLib.
          </p>
        </div>

        <div className='mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4'>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                'group relative overflow-hidden rounded-xl border border-border/60 bg-card p-4 md:p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl',
                index % 2 === 0
                  ? 'animate-in fade-in-10 duration-1000'
                  : 'animate-in fade-in-10 duration-1000 delay-300'
              )}
            >
              <div className='mb-3 flex items-center space-x-1 sm:space-x-2 md:mb-4'>
                {Array(testimonial.stars)
                  .fill(null)
                  .map((_, i) => (
                    <Star key={i} className='size-3.5 fill-chart-1 text-chart-1 md:size-4' />
                  ))}
              </div>

              <blockquote className='mb-4 text-sm font-medium text-foreground md:mb-6 md:text-base'>
                &quot;{testimonial.content}&quot;
              </blockquote>

              <div className='flex items-center space-x-3'>
                <div className='relative flex size-8 items-center justify-center overflow-hidden rounded-full bg-primary/10 text-primary md:size-10'>
                  <User className='size-4 md:size-6' />
                </div>
                <div>
                  <div className='text-sm font-semibold md:text-base'>{testimonial.name}</div>
                  <div className='text-xs text-muted-foreground md:text-sm'>
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>

              <div className='absolute -bottom-1 -right-1 size-12 rotate-12 rounded-full bg-primary/10 transition-all duration-300 group-hover:scale-150 md:size-16'></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
