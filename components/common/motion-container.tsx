'use client'

import { motion } from 'framer-motion'
import React from 'react'

// Container motion variants
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
}

// Item motion variants
export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 70,
      damping: 15
    }
  }
}

// Fade in animation
export const fadeInVariants = (delay: number = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, delay }
  }
})

// Slide in animation
export const slideInVariants = (
  delay: number = 0,
  direction: 'up' | 'down' | 'left' | 'right' = 'up'
) => {
  const directions = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 }
  }

  return {
    hidden: { opacity: 0, ...directions[direction] },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.5, delay }
    }
  }
}

type MotionContainerProps = {
  children: React.ReactNode
  className?: string
  animation?: 'stagger' | 'fade' | 'slide'
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  as?: 'div' | 'section' | 'article' | 'ul' | 'li'
}

export const MotionContainer = ({
  children,
  className,
  animation = 'stagger',
  delay = 0,
  direction = 'up'
}: MotionContainerProps) => {
  // Dynamic variants based on animation type
  if (animation === 'fade') {
    return (
      <motion.div
        animate={{ opacity: 1 }}
        className={className}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.div>
    )
  }

  if (animation === 'slide') {
    const directions = {
      up: { y: 20, x: 0 },
      down: { y: -20, x: 0 },
      left: { x: 20, y: 0 },
      right: { x: -20, y: 0 }
    }

    return (
      <motion.div
        animate={{ opacity: 1, y: 0, x: 0 }}
        className={className}
        initial={{ opacity: 0, ...directions[direction] }}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.div>
    )
  }

  // Default stagger animation
  return (
    <motion.div
      animate='visible'
      className={className}
      initial='hidden'
      variants={containerVariants}
    >
      {children}
    </motion.div>
  )
}

type MotionItemProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  as?: keyof typeof motion
}

export const MotionItem = ({ children, className, as = 'div' }: MotionItemProps) => {
  const Component = motion[as] as any

  return (
    <Component
      className={className}
      variants={itemVariants}
    >
      {children}
    </Component>
  )
}
