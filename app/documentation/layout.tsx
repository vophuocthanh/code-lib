import { Suspense } from 'react'

import { DocSidebar } from '@/components/documentation/sidebar'
import LoadingFallback from '@/components/loading/loading-fallback'

export default function DocumentationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex min-h-screen flex-col'>
      <div className='flex flex-1 pt-[65px]'>
        <div className='fixed hidden h-full w-64 border-r bg-white dark:bg-gray-900 md:block'>
          <div className='sticky top-[65px] h-[calc(100vh-65px)] overflow-y-auto'>
            <DocSidebar />
          </div>
        </div>

        <div className='flex-1 md:ml-64'>
          <Suspense fallback={<LoadingFallback />}>{children}</Suspense>
        </div>
      </div>
    </div>
  )
}
