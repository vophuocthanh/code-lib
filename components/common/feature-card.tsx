'use client'

import { motion } from 'framer-motion'
import React from 'react'

import { cn } from '@/core/lib/utils'

type FeatureCardProps = {
  title: string
  description: string
  icon?: React.ReactNode
  color?: string
  className?: string
  animation?: boolean
  index?: number
}

export const FeatureCard = ({
  title,
  description,
  icon,
  color = 'from-primary to-primary/60',
  className,
  animation = true
}: FeatureCardProps) => {
  const Card = animation ? motion.div : 'div'

  return (
    <Card
      className={cn(
        'relative rounded-xl border border-border bg-card p-6 shadow-sm transition-all',
        className
      )}
      variants={
        animation
          ? {
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: 'spring',
                  stiffness: 50,
                  damping: 10
                }
              }
            }
          : undefined
      }
      whileHover={animation ? { scale: 1.03 } : undefined}
    >
      <div className={`absolute inset-x-0 top-0 h-1 rounded-t-xl bg-gradient-to-r ${color}`} />
      <div className='mb-4 flex items-center'>
        {icon && (
          <div className='mr-3 inline-flex items-center justify-center rounded-full bg-muted/80 p-2'>
            {icon}
          </div>
        )}
        <h3 className='text-xl font-bold'>{title}</h3>
      </div>
      <p className='text-muted-foreground'>{description}</p>
    </Card>
  )
}
