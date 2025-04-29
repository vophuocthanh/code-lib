import React from 'react'

import { PageLayout } from '@/components/common/page-layout'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <PageLayout>{children}</PageLayout>
}
