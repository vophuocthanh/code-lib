import { PageLayout } from '@/components/common/page-layout'
import { SectionContainer } from '@/components/common/section-container'
import { DocSidebar } from '@/components/documentation/sidebar'
import { DocContent } from '@/components/documentation/doc-content'
import { DocSearchBar } from '@/components/documentation/search-bar'
import SectionHeading from '@/components/common/section-heading'
export default function DocumentationPage() {
  return (
    <PageLayout>
      <SectionContainer background='gradient'>
        <SectionHeading
          title='Documentation'
          description='Learn how to get the most out of our library with comprehensive guides and API references.'
          center
          animation
        />

        <DocSearchBar />
      </SectionContainer>

      <SectionContainer>
        <div className='flex flex-col space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0'>
          <DocSidebar />
          <DocContent />
        </div>
      </SectionContainer>
    </PageLayout>
  )
}
