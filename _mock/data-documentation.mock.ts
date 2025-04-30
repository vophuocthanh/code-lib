import { Code2, Component, Layout, Palette, Settings, Shapes, Sparkles, Zap } from 'lucide-react'

export interface DocSection {
  id: string
  title: string
  icon: any
  description: string
  sections: {
    id: string
    title: string
    content: string
    code?: string
  }[]
}

export const documentationData: DocSection[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: Sparkles,
    description: 'Start building beautiful applications with CodeLib',
    sections: [
      {
        id: 'installation',
        title: 'Installation',
        content: `To get started with CodeLib, you can install it via npm or yarn:

\`\`\`bash
npm install codelib
# or
yarn add codelib
\`\`\`

After installation, you can import components directly:

\`\`\`tsx
import { Button } from 'codelib'
\`\`\``
      },
      {
        id: 'configuration',
        title: 'Configuration',
        content: `CodeLib is built with customization in mind. You can configure global settings:

\`\`\`tsx
// codelib.config.ts
import { defineConfig } from 'codelib/config'

export default defineConfig({
  theme: {
    colors: {
      primary: '#0070f3',
      secondary: '#7928ca',
    },
    radius: '0.5rem',
  },
})
\`\`\``
      }
    ]
  },
  {
    id: 'components',
    title: 'Components',
    icon: Component,
    description: 'Explore our collection of beautiful and accessible components',
    sections: [
      {
        id: 'button',
        title: 'Button',
        content: `Buttons are used to trigger actions or events. They come in different variants and sizes.

### Usage

\`\`\`tsx
import { Button } from 'codelib'

export default function ButtonDemo() {
  return (
    <div className="space-x-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  )
}
\`\`\`

### Props

- \`variant\`: 'default' | 'secondary' | 'outline' | 'ghost'
- \`size\`: 'sm' | 'md' | 'lg'
- \`isLoading\`: boolean
- \`disabled\`: boolean`
      },
      {
        id: 'input',
        title: 'Input',
        content: `Input components for collecting user data.

### Usage

\`\`\`tsx
import { Input } from 'codelib'

export default function InputDemo() {
  return (
    <div className="space-y-4">
      <Input placeholder="Basic input" />
      <Input type="password" placeholder="Password" />
      <Input disabled placeholder="Disabled" />
    </div>
  )
}
\`\`\`

### Props

- \`type\`: HTML input types
- \`placeholder\`: string
- \`disabled\`: boolean
- \`error\`: boolean
- \`helperText\`: string`
      }
    ]
  },
  {
    id: 'styling',
    title: 'Styling',
    icon: Palette,
    description: 'Learn how to customize and style your components',
    sections: [
      {
        id: 'theming',
        title: 'Theming',
        content: `CodeLib supports both light and dark themes out of the box.

### Custom Theme

\`\`\`tsx
import { createTheme } from 'codelib/theme'

export const theme = createTheme({
  colors: {
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      // ...other shades
    },
    // ...other colors
  },
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Poppins, sans-serif',
  },
})
\`\`\``
      },
      {
        id: 'css-variables',
        title: 'CSS Variables',
        content: `You can customize components using CSS variables:

\`\`\`css
:root {
  --codelib-primary: #0070f3;
  --codelib-radius: 0.5rem;
  --codelib-font: 'Inter', sans-serif;
}
\`\`\``
      }
    ]
  },
  {
    id: 'layouts',
    title: 'Layouts',
    icon: Layout,
    description: 'Pre-built layouts for common UI patterns',
    sections: [
      {
        id: 'grid',
        title: 'Grid System',
        content: `Our flexible grid system helps you create responsive layouts.

\`\`\`tsx
import { Grid, Col } from 'codelib'

export default function GridDemo() {
  return (
    <Grid cols={12} gap={4}>
      <Col span={6}>Column 1</Col>
      <Col span={6}>Column 2</Col>
    </Grid>
  )
}
\`\`\``
      },
      {
        id: 'container',
        title: 'Container',
        content: `Containers help maintain consistent content width.

\`\`\`tsx
import { Container } from 'codelib'

export default function ContainerDemo() {
  return (
    <Container size="md">
      <h1>Centered Content</h1>
      <p>This content will have a max-width and be centered.</p>
    </Container>
  )
}
\`\`\``
      }
    ]
  },
  {
    id: 'hooks',
    title: 'Hooks',
    icon: Code2,
    description: 'Custom React hooks for common functionalities',
    sections: [
      {
        id: 'use-media-query',
        title: 'useMediaQuery',
        content: `Hook for responsive design and media queries.

\`\`\`tsx
import { useMediaQuery } from 'codelib/hooks'

export default function ResponsiveDemo() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  
  return (
    <div>
      {isMobile ? 'Mobile View' : 'Desktop View'}
    </div>
  )
}
\`\`\``
      },
      {
        id: 'use-local-storage',
        title: 'useLocalStorage',
        content: `Hook for persistent local storage state.

\`\`\`tsx
import { useLocalStorage } from 'codelib/hooks'

export default function StorageDemo() {
  const [theme, setTheme] = useLocalStorage('theme', 'light')
  
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle Theme
    </button>
  )
}
\`\`\``
      }
    ]
  },
  {
    id: 'utilities',
    title: 'Utilities',
    icon: Shapes,
    description: 'Helper functions and utility classes',
    sections: [
      {
        id: 'classnames',
        title: 'classNames',
        content: `Utility for conditionally joining class names.

\`\`\`tsx
import { cn } from 'codelib/utils'

export default function Example() {
  const isActive = true
  
  return (
    <div className={cn(
      'base-class',
      isActive && 'active-class',
      'always-applied'
    )}>
      Content
    </div>
  )
}
\`\`\``
      },
      {
        id: 'formatting',
        title: 'Formatting',
        content: `Utilities for formatting text and numbers.

\`\`\`tsx
import { formatNumber, formatDate } from 'codelib/utils'

export default function FormattingDemo() {
  return (
    <div>
      <p>{formatNumber(1234.56, 'currency')}</p>
      <p>{formatDate(new Date(), 'long')}</p>
    </div>
  )
}
\`\`\``
      }
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced',
    icon: Settings,
    description: 'Advanced concepts and best practices',
    sections: [
      {
        id: 'performance',
        title: 'Performance',
        content: `Tips for optimizing your application's performance.

### Code Splitting

\`\`\`tsx
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Spinner />
})
\`\`\`

### Memoization

\`\`\`tsx
import { memo, useMemo } from 'react'

const MemoizedComponent = memo(({ data }) => {
  const processedData = useMemo(() => {
    return heavyComputation(data)
  }, [data])
  
  return <div>{processedData}</div>
})
\`\`\``
      },
      {
        id: 'security',
        title: 'Security',
        content: `Best practices for securing your application.

### XSS Prevention

\`\`\`tsx
import { sanitize } from 'codelib/security'

function Comment({ content }) {
  return <div>{sanitize(content)}</div>
}
\`\`\`

### CSRF Protection

\`\`\`tsx
import { csrf } from 'codelib/security'

async function submitForm(data) {
  await fetch('/api/submit', {
    method: 'POST',
    headers: {
      'X-CSRF-Token': csrf.getToken()
    },
    body: JSON.stringify(data)
  })
}
\`\`\``
      }
    ]
  },
  {
    id: 'animations',
    title: 'Animations',
    icon: Zap,
    description: 'Add beautiful animations to your components',
    sections: [
      {
        id: 'transitions',
        title: 'Transitions',
        content: `Smooth transitions between component states.

\`\`\`tsx
import { Transition } from 'codelib/animation'

export default function TransitionDemo() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <Transition
      show={isOpen}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div>Animated Content</div>
    </Transition>
  )
}
\`\`\``
      },
      {
        id: 'motion',
        title: 'Motion',
        content: `Complex animations with our motion system.

\`\`\`tsx
import { Motion } from 'codelib/animation'

export default function MotionDemo() {
  return (
    <Motion
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring' }}
    >
      <div>Springy Animation</div>
    </Motion>
  )
}
\`\`\``
      }
    ]
  }
]
