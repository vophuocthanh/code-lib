import { Menu } from 'lucide-react'

import { SectionContainer } from '@/components/common/section-container'
import SectionHeading from '@/components/common/section-heading'
import { DocContent } from '@/components/documentation/doc-content'
import { DocSearchBar } from '@/components/documentation/search-bar'
import { DocSidebar } from '@/components/documentation/sidebar'
import { Footer } from '@/components/home/footer'
import { Navbar } from '@/components/home/navbar'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export default function DocumentationPage() {
  return (
    <>
      <div className='fixed inset-x-0 top-0 z-50'>
        <Navbar />
      </div>

      <div className='fixed bottom-4 right-4 z-40 md:hidden'>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              className='size-10 rounded-full p-0'
              variant='default'
            >
              <Menu className='size-6' />
            </Button>
          </SheetTrigger>
          <SheetContent
            className='w-80 p-0'
            side='left'
          >
            <div className='h-full overflow-y-auto pt-[65px]'>
              <DocSidebar />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className='w-full'>
        <SectionContainer background='gradient'>
          <SectionHeading
            animation
            center
            description='Learn how to get the most out of our library with comprehensive guides and API references.'
            title='Documentation'
          />
          <DocSearchBar />
        </SectionContainer>
      </div>

      <div className='w-full'>
        <DocContent />
      </div>
      <Footer />
    </>
  )
}
