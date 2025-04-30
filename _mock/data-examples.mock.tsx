import { Button } from '@/components/ui/button'

export const exampleItems = [
  {
    title: 'Basic Button Group',
    description: 'A simple example of button group with different variants',
    category: 'Basics',
    likes: 128,
    code: `import { Button } from 'codelib'

function ButtonExample() {
  return (
    <div className="flex gap-2">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  )
}`,
    preview: (
      <div className='flex flex-wrap gap-2'>
        <Button variant='default'>Default</Button>
        <Button variant='secondary'>Secondary</Button>
        <Button variant='outline'>Outline</Button>
        <Button variant='ghost'>Ghost</Button>
      </div>
    )
  },
  {
    title: 'Card with Hover Effect',
    description: 'Interactive card with smooth hover animations',
    category: 'Basics',
    likes: 95,
    code: `function HoverCard() {
  return (
    <div className="group rounded-lg border p-4 transition-all hover:shadow-md">
      <h3 className="text-lg font-medium transition-colors group-hover:text-primary">
        Hover Card
      </h3>
      <p className="text-sm text-muted-foreground">
        This card has a nice hover effect
      </p>
    </div>
  )
}`,
    preview: (
      <div className='group rounded-lg border p-4 transition-all hover:shadow-md'>
        <h3 className='text-lg font-medium transition-colors group-hover:text-primary'>
          Hover Card
        </h3>
        <p className='text-sm text-muted-foreground'>This card has a nice hover effect</p>
      </div>
    )
  },
  {
    title: 'Navigation Menu',
    description: 'Responsive navigation menu with mobile support',
    category: 'Navigation',
    likes: 154,
    code: `function NavMenu() {
  return (
    <nav className="flex items-center justify-between border-b p-4">
      <div className="font-bold">Brand</div>
      <div className="hidden md:flex space-x-4">
        <a href="#" className="hover:text-primary">Home</a>
        <a href="#" className="hover:text-primary">About</a>
        <a href="#" className="hover:text-primary">Features</a>
        <a href="#" className="hover:text-primary">Contact</a>
      </div>
      <button className="md:hidden">Menu</button>
    </nav>
  )
}`,
    preview: (
      <nav className='flex w-full items-center justify-between rounded-lg border-b p-4'>
        <div className='font-bold'>Brand</div>
        <div className='hidden space-x-4 md:flex'>
          <a
            className='hover:text-primary'
            href='#'
          >
            Home
          </a>
          <a
            className='hover:text-primary'
            href='#'
          >
            About
          </a>
          <a
            className='hover:text-primary'
            href='#'
          >
            Features
          </a>
          <a
            className='hover:text-primary'
            href='#'
          >
            Contact
          </a>
        </div>
        <button className='md:hidden'>Menu</button>
      </nav>
    )
  },
  {
    title: 'Simple Form Layout',
    description: 'Clean form layout with responsive design',
    category: 'Forms',
    likes: 87,
    code: `function SimpleForm() {
  return (
    <form className="space-y-4 rounded-lg border p-6">
      <div className="space-y-2">
        <label className="text-sm font-medium">Email</label>
        <input 
          type="email" 
          className="w-full rounded-md border px-3 py-2"
          placeholder="email@example.com" 
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Password</label>
        <input 
          type="password" 
          className="w-full rounded-md border px-3 py-2"
          placeholder="••••••••" 
        />
      </div>
      <button 
        type="submit"
        className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
      >
        Sign In
      </button>
    </form>
  )
}`,
    preview: (
      <form className='w-full max-w-sm space-y-4 rounded-lg border p-6'>
        <div className='space-y-2'>
          <label className='text-sm font-medium'>Email</label>
          <input
            className='w-full rounded-md border px-3 py-2'
            placeholder='email@example.com'
            type='email'
          />
        </div>
        <div className='space-y-2'>
          <label className='text-sm font-medium'>Password</label>
          <input
            className='w-full rounded-md border px-3 py-2'
            placeholder='••••••••'
            type='password'
          />
        </div>
        <button
          className='rounded-md bg-primary px-4 py-2 text-primary-foreground'
          type='submit'
        >
          Sign In
        </button>
      </form>
    )
  }
]
