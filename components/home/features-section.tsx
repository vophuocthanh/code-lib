import * as React from 'react'

import { dataFeatureMock } from '@/_mock/data-feature.mock'
import { cn } from '@/core/lib/utils'

export function FeaturesSection() {
  return (
    <section
      className='py-16 md:py-24 lg:py-32'
      id='features'
    >
      <div className='container mx-auto'>
        <div className='mb-10 flex flex-col items-center justify-center space-y-3 text-center md:mb-16 md:space-y-4'>
          <div className='inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary'>
            Features
          </div>
          <h2 className='mx-auto max-w-3xl text-2xl font-bold tracking-tighter md:text-3xl lg:text-4xl'>
            Everything you need to build <span className='text-primary'>amazing</span> applications
          </h2>
          <p className='mx-auto max-w-[700px] text-sm text-muted-foreground sm:text-base md:text-lg'>
            Our library provides all the tools you need to build modern, performant applications
            that your users will love.
          </p>
        </div>

        <div className='mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4'>
          {dataFeatureMock.map((feature, index) => (
            <div
              key={index}
              className={cn(
                'group relative space-y-3 md:space-y-4 rounded-lg border border-border/50 bg-background p-4 md:p-6 shadow-sm transition-all hover:shadow-md hover:border-border/80',
                index % 3 === 0
                  ? 'animate-in slide-in-from-bottom-3 duration-700'
                  : index % 3 === 1
                    ? 'animate-in slide-in-from-bottom-5 duration-700 delay-150'
                    : 'animate-in slide-in-from-bottom-7 duration-700 delay-300'
              )}
            >
              <div className='inline-flex items-center justify-center rounded-lg border border-border bg-muted/50 p-1.5 md:p-2'>
                <div className='text-primary'>
                  {React.cloneElement(feature.icon as React.ReactElement, {
                    className: 'h-7 w-7 md:h-8 md:w-8 lg:h-10 lg:w-10'
                  })}
                </div>
              </div>
              <div className='space-y-1.5 md:space-y-2'>
                <h3 className='text-lg font-bold md:text-xl'>{feature.title}</h3>
                <p className='text-sm text-muted-foreground md:text-base'>{feature.description}</p>
              </div>
              <div className='absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-chart-4 transition-all duration-300 group-hover:w-full' />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
