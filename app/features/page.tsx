import { PageLayout } from '@/components/common/page-layout'
import { SectionContainer } from '@/components/common/section-container'
import { FeatureList } from '@/components/features/feature-list'
import { FeatureCTA } from '@/components/features/feature-cta'
import SectionHeading from '@/components/common/section-heading'
export default function FeaturesPage() {
  return (
    <PageLayout>
      <SectionContainer>
        <SectionHeading
          badge={{ text: 'Premium Features' }}
          title={
            <>
              Everything you need to{' '}
              <span className='bg-gradient-to-r from-chart-1 via-chart-2 to-chart-3 bg-clip-text text-transparent'>
                build faster
              </span>
            </>
          }
          description='Our library includes all the tools and components you need to create beautiful, performant applications with minimal effort.'
          center
          animation
        />

        <div className='mt-16'>
          <FeatureList />
        </div>

        <FeatureCTA />
      </SectionContainer>
    </PageLayout>
  )
}
