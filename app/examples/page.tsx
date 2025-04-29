import { PageLayout } from '@/components/common/page-layout'
import { SectionContainer } from '@/components/common/section-container'
import { ExampleCategories } from '@/components/examples/example-categories'
import { ExampleItems } from '@/components/examples/example-items'
import { ContributeSection } from '@/components/examples/contribute-section'
import SectionHeading from '@/components/common/section-heading'

export default function ExamplesPage() {
  return (
    <PageLayout>
      <SectionContainer background='gradient'>
        <SectionHeading
          title='Examples &amp; Templates'
          description='Explore our collection of examples and templates to jumpstart your next project. Copy and paste the code to get started quickly.'
          center
          animation
        />

        <ExampleCategories />
      </SectionContainer>

      <SectionContainer>
        <ExampleItems />

        <ContributeSection />
      </SectionContainer>
    </PageLayout>
  )
}
