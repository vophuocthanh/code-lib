import { SectionContainer } from '@/components/common/section-container'
import SectionHeading from '@/components/common/section-heading'
import { ContributeSection } from '@/components/examples/contribute-section'
import { ExampleCategories } from '@/components/examples/example-categories'
import { ExampleItems } from '@/components/examples/example-items'

export default function ExamplesPage() {
  return (
    <>
      <SectionContainer background='gradient'>
        <SectionHeading
          animation
          center
          description='Explore our collection of examples and templates to jumpstart your next project. Copy and paste the code to get started quickly.'
          title='Examples &amp; Templates'
        />

        <ExampleCategories />
      </SectionContainer>

      <SectionContainer>
        <ExampleItems />

        <ContributeSection />
      </SectionContainer>
    </>
  )
}
