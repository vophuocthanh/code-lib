'use client'

import { motion } from 'framer-motion'
import { cn } from '@/core/lib/utils'
import { ReactNode } from 'react'

type BadgeProps = {
  text: string
  icon?: ReactNode
  className?: string
}

type SectionHeadingProps = {
  badge?: BadgeProps
  title: string | ReactNode
  description?: string
  className?: string
  center?: boolean
  animation?: boolean
  titleClassName?: string
  descriptionClassName?: string
}
const SectionHeading = ({
  badge,
  title,
  description,
  className,
  center = false,
  animation = true,
  titleClassName,
  descriptionClassName
}: SectionHeadingProps) => {
  const Container = animation ? motion.div : 'div'
  const Badge = animation ? motion.div : 'div'
  const Title = animation ? motion.h2 : 'h2'
  const Description = animation ? motion.p : 'p'

  return (
    <Container
      initial={animation ? { opacity: 0 } : undefined}
      animate={animation ? { opacity: 1 } : undefined}
      transition={animation ? { duration: 0.5 } : undefined}
      className={cn('space-y-4', center && 'text-center', className)}
    >
      {badge && (
        <Badge
          initial={animation ? { opacity: 0 } : undefined}
          animate={animation ? { opacity: 1 } : undefined}
          transition={animation ? { delay: 0.2, duration: 0.5 } : undefined}
          className={cn(
            'inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground',
            badge.className
          )}
        >
          {badge.icon}
          <span>{badge.text}</span>
        </Badge>
      )}

      <Title
        initial={animation ? { opacity: 0, y: -10 } : undefined}
        animate={animation ? { opacity: 1, y: 0 } : undefined}
        transition={animation ? { delay: 0.3, duration: 0.5 } : undefined}
        className={cn('text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl', titleClassName)}
      >
        {title}
      </Title>

      {description && (
        <Description
          initial={animation ? { opacity: 0 } : undefined}
          animate={animation ? { opacity: 1 } : undefined}
          transition={animation ? { delay: 0.4, duration: 0.5 } : undefined}
          className={cn('mx-auto max-w-[700px] text-muted-foreground', center && 'mx-auto', descriptionClassName)}
        >
          {description}
        </Description>
      )}
    </Container>
  )
}

export default SectionHeading
