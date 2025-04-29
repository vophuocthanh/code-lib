'use client'

import { FeatureCard } from '@/components/common/feature-card'
import { MotionContainer } from '@/components/common/motion-container'
import { CheckCircle, Code, Database, Globe, Lock, Settings, Zap } from 'lucide-react'
import React from 'react'

export const features = [
  {
    icon: <Zap className='size-6' />,
    title: 'Lightning Fast Performance',
    description: 'Optimized for speed with minimal bundle size and efficient rendering.',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: <Lock className='size-6' />,
    title: 'Built-in Security',
    description: 'Enterprise-grade security with automatic XSS protection and sanitization.',
    color: 'from-blue-400 to-indigo-500'
  },
  {
    icon: <Code className='size-6' />,
    title: 'Developer Experience',
    description: 'TypeScript support, extensive documentation, and intuitive API design.',
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: <Globe className='size-6' />,
    title: 'Internationalization',
    description: 'Full i18n support with right-to-left languages and pluralization.',
    color: 'from-purple-400 to-pink-500'
  },
  {
    icon: <Database className='size-6' />,
    title: 'Data Management',
    description: 'Built-in state management with powerful query capabilities and caching.',
    color: 'from-red-400 to-rose-500'
  },
  {
    icon: <Settings className='size-6' />,
    title: 'Customization',
    description: 'Fully customizable themes, components, and behaviors to match your brand.',
    color: 'from-sky-400 to-cyan-500'
  }
]

export const FeatureList = () => {
  return (
    <MotionContainer animation='stagger' className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
      {features.map((feature, index) => (
        <FeatureCard
          key={feature.title}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
          color={feature.color}
          index={index}
        />
      ))}
    </MotionContainer>
  )
}
