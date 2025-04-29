import { SectionContainer } from '@/components/common/section-container'
import SectionHeading from '@/components/common/section-heading'
import { FeatureCTA } from '@/components/features/feature-cta'
import { FeatureList } from '@/components/features/feature-list'
export default function FeaturesPage() {
  return (
    <>
      <SectionContainer>
        <SectionHeading
          animation
          center
          badge={{ text: 'Premium Features' }}
          description='Our library includes all the tools and components you need to create beautiful, performant applications with minimal effort.'
          title={
            <>
              Everything you need to{' '}
              <span className='bg-gradient-to-r from-chart-1 via-chart-2 to-chart-3 bg-clip-text text-transparent'>
                build faster
              </span>
            </>
          }
        />

        <div className='mt-16'>
          <FeatureList />
        </div>

        <FeatureCTA />
      </SectionContainer>
    </>
  )
}
