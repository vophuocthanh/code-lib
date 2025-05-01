'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'

export function ButtonPreview() {
  const [isLoading, setIsLoading] = useState(false)

  const handleLoadingClick = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className='flex flex-col gap-8 rounded-lg border bg-background p-6'>
      {/* Variants */}
      <div className='space-y-4'>
        <h3 className='text-lg font-medium'>Button Variants</h3>
        <div className='flex flex-wrap gap-4'>
          <Button variant='default'>Default</Button>
          <Button variant='secondary'>Secondary</Button>
          <Button variant='outline'>Outline</Button>
          <Button variant='ghost'>Ghost</Button>
        </div>
      </div>

      {/* Sizes */}
      <div className='space-y-4'>
        <h3 className='text-lg font-medium'>Button Sizes</h3>
        <div className='flex flex-wrap items-center gap-4'>
          <Button size='sm'>Small</Button>
          <Button size='default'>Medium</Button>
          <Button size='lg'>Large</Button>
        </div>
      </div>

      {/* States */}
      <div className='space-y-4'>
        <h3 className='text-lg font-medium'>Button States</h3>
        <div className='flex flex-wrap gap-4'>
          <Button disabled>Disabled</Button>
          <Button
            isLoading={isLoading}
            onClick={handleLoadingClick}
          >
            {isLoading ? 'Loading...' : 'Click to Load'}
          </Button>
        </div>
      </div>
    </div>
  )
}
