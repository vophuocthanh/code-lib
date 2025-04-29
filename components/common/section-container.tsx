'use client'

import { motion } from 'framer-motion'
import React from 'react'

import { cn } from '@/core/lib/utils'

type SectionContainerProps = {
  children: React.ReactNode
  className?: string
  background?: 'default' | 'gradient' | 'muted'
  containerClassName?: string
  animation?: boolean
  animationDelay?: number
  fullWidth?: boolean
  noPadding?: boolean
  id?: string
}

export const SectionContainer = ({
  children,
  className,
  background = 'default',
  containerClassName,
  animation = false,
  animationDelay = 0,
  fullWidth = false,
  noPadding = false,
  id
}: SectionContainerProps) => {
  const Container = animation ? motion.section : 'section'
  const ContentContainer = animation ? motion.div : 'div'

  const backgroundClass = {
    default: '',
    gradient: 'bg-gradient-to-b from-background to-muted/20',
    muted: 'bg-muted/20'
  }

  return (
    <Container
      animate={animation ? { opacity: 1 } : undefined}
      className={cn(
        'relative overflow-hidden',
        !noPadding && 'py-16 md:py-24',
        backgroundClass[background],
        className
      )}
      id={id}
      initial={animation ? { opacity: 0 } : undefined}
      transition={animation ? { duration: 0.6, delay: animationDelay } : undefined}
    >
      <ContentContainer
        animate={animation ? { opacity: 1, y: 0 } : undefined}
        className={cn(
          !fullWidth && 'container mx-auto',
          !noPadding && 'px-4 sm:px-6',
          containerClassName
        )}
        initial={animation ? { opacity: 0, y: 20 } : undefined}
        transition={animation ? { duration: 0.5, delay: animationDelay + 0.2 } : undefined}
      >
        {children}
      </ContentContainer>
    </Container>
  )
}
