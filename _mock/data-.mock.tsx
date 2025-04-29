import { Book, Code, FileText } from 'lucide-react'

export const docCategories = [
  {
    title: 'Getting Started',
    icon: <Book className='size-5' />,
    links: [
      { title: 'Introduction', href: '#introduction' },
      { title: 'Installation', href: '#installation' },
      { title: 'Quick Start', href: '#quick-start' },
      { title: 'Configuration', href: '#configuration' }
    ]
  },
  {
    title: 'Core Concepts',
    icon: <FileText className='size-5' />,
    links: [
      { title: 'Component Model', href: '#component-model' },
      { title: 'State Management', href: '#state-management' },
      { title: 'Type System', href: '#type-system' },
      { title: 'Performance', href: '#performance' }
    ]
  },
  {
    title: 'API Reference',
    icon: <Code className='size-5' />,
    links: [
      { title: 'Core API', href: '#core-api' },
      { title: 'Hooks', href: '#hooks' },
      { title: 'Utilities', href: '#utilities' },
      { title: 'Advanced', href: '#advanced' }
    ]
  }
]
