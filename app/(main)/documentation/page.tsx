import { SectionContainer } from '@/components/common/section-container'
import SectionHeading from '@/components/common/section-heading'
import { DocContent } from '@/components/documentation/doc-content'
import { DocSearchBar } from '@/components/documentation/search-bar'
import { DocSidebar } from '@/components/documentation/sidebar'
export default function DocumentationPage() {
  return (
    <>
      <SectionContainer background='gradient'>
        <SectionHeading
          animation
          center
          description='Learn how to get the most out of our library with comprehensive guides and API references.'
          title='Documentation'
        />

        <DocSearchBar />
      </SectionContainer>

      <SectionContainer>
        <div className='flex flex-col space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0'>
          <DocSidebar />
          <DocContent />
        </div>
      </SectionContainer>
    </>
  )
}
