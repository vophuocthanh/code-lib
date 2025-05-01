import {
  Code2,
  Component,
  Layout,
  Palette,
  Settings,
  Shapes,
  Sparkles,
  Zap,
  Shield,
  Database,
  Globe,
  Terminal,
  Laptop,
  Cloud,
  Box,
  Layers
} from 'lucide-react'

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

### Live Preview

<ButtonPreview />

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
      },
      {
        id: 'modal',
        title: 'Modal Dialog',
        content: `Create a reusable modal dialog component.

### Implementation

\`\`\`tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

interface ModalProps {
  trigger: React.ReactNode
  title: string
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function Modal({ 
  trigger, 
  title, 
  children, 
  open, 
  onOpenChange 
}: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  )
}

// Usage
export function ExampleModal() {
  return (
    <Modal
      trigger={<Button>Open Modal</Button>}
      title="Example Modal"
    >
      <div className="grid gap-4 py-4">
        <p>Modal content goes here</p>
      </div>
    </Modal>
  )
}
\`\`\``
      },
      {
        id: 'dropdown-menu',
        title: 'Dropdown Menu',
        content: `Create a reusable dropdown menu component.

### Implementation

\`\`\`tsx
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { MoreVertical } from 'lucide-react'

interface DropdownItem {
  label: string
  icon?: React.ReactNode
  onClick: () => void
  disabled?: boolean
}

interface DropdownProps {
  items: DropdownItem[]
  trigger?: React.ReactNode
  align?: 'start' | 'center' | 'end'
}

export function Dropdown({ 
  items, 
  trigger, 
  align = 'end' 
}: DropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {trigger || (
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-4 w-4" />
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align}>
        {items.map((item, index) => (
          <DropdownMenuItem
            key={index}
            onClick={item.onClick}
            disabled={item.disabled}
          >
            {item.icon && <span className="mr-2">{item.icon}</span>}
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

// Usage
export function ExampleDropdown() {
  const items = [
    {
      label: 'Edit',
      onClick: () => console.log('Edit clicked')
    },
    {
      label: 'Delete',
      onClick: () => console.log('Delete clicked'),
      disabled: true
    }
  ]

  return <Dropdown items={items} />
}
\`\`\``
      },
      {
        id: 'table',
        title: 'Table Component',
        content: `Create a reusable table component.

### Implementation

\`\`\`tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

interface Column {
  key: string
  label: string
  render?: (value: any) => React.ReactNode
}

interface TableProps {
  columns: Column[]
  data: any[]
  className?: string
}

export function TableComponent({ 
  columns, 
  data,
  className 
}: TableProps) {
  return (
    <div className="rounded-md border">
      <Table className={className}>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.key}>
                {column.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((column) => (
                <TableCell key={column.key}>
                  {column.render 
                    ? column.render(row[column.key])
                    : row[column.key]
                  }
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

// Usage
export function ExampleTable() {
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { 
      key: 'status', 
      label: 'Status',
      render: (value: string) => (
        <span className={\`px-2 py-1 rounded-full \${
          value === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }\`}>
          {value}
        </span>
      )
    }
  ]

  const data = [
    { name: 'John Doe', email: 'john@example.com', status: 'active' },
    { name: 'Jane Smith', email: 'jane@example.com', status: 'inactive' }
  ]

  return <TableComponent columns={columns} data={data} />
}
\`\`\``
      },
      {
        id: 'pagination',
        title: 'Pagination Component',
        content: `Create a reusable pagination component.

### Implementation

\`\`\`tsx
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

export function PaginationComponent({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  const maxVisiblePages = 5

  const getVisiblePages = () => {
    if (totalPages <= maxVisiblePages) {
      return pages
    }

    const start = Math.max(
      Math.min(
        currentPage - Math.floor(maxVisiblePages / 2),
        totalPages - maxVisiblePages + 1
      ),
      1
    )

    return pages.slice(start - 1, start + maxVisiblePages - 1)
  }

  return (
    <Pagination className={className}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
        </PaginationItem>

        {getVisiblePages().map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              onClick={() => onPageChange(page)}
              isActive={currentPage === page}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {totalPages > maxVisiblePages && currentPage < totalPages - 2 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

// Usage
export function ExamplePagination() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10

  return (
    <PaginationComponent
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
    />
  )
}
\`\`\``
      },
      {
        id: 'loading',
        title: 'Loading Components',
        content: `Create reusable loading components.

### Implementation

\`\`\`tsx
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function LoadingSpinner({ 
  size = 'md', 
  className 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
  }

  return (
    <Loader2 
      className={cn(
        'animate-spin',
        sizeClasses[size],
        className
      )} 
    />
  )
}

interface SkeletonProps {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div 
      className={cn(
        'animate-pulse rounded-md bg-muted',
        className
      )} 
    />
  )
}

// Usage
export function ExampleLoading() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[90%]" />
        <Skeleton className="h-4 w-[80%]" />
      </div>
    </div>
  )
}
\`\`\``
      },
      {
        id: 'form-components',
        title: 'Form Components',
        content: `Collection of form components with validation.

### Form with Validation

\`\`\`tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.'
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.'
  }),
  password: z.string()
    .min(8, { message: 'Password must be at least 8 characters' })
    .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
    .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
    .regex(/[0-9]/, { message: 'Password must contain at least one number' })
})

export function SignupForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      password: ''
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="johndoe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">Sign Up</Button>
      </form>
    </Form>
  )
}
\`\`\`

### Select Component

\`\`\`tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Option {
  value: string
  label: string
  disabled?: boolean
}

interface SelectProps {
  options: Option[]
  value?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  disabled?: boolean
  className?: string
}

export function SelectComponent({
  options,
  value,
  onValueChange,
  placeholder = "Select an option",
  disabled = false,
  className
}: SelectProps) {
  return (
    <Select value={value} onValueChange={onValueChange} disabled={disabled}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

// Usage
export function CountrySelect() {
  const countries = [
    { value: "us", label: "United States" },
    { value: "uk", label: "United Kingdom" },
    { value: "ca", label: "Canada" },
    { value: "au", label: "Australia", disabled: true }
  ]

  return (
    <SelectComponent
      options={countries}
      placeholder="Select a country"
      onValueChange={(value) => console.log(value)}
    />
  )
}
\`\`\`

### Checkbox Group

\`\`\`tsx
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

interface CheckboxOption {
  id: string
  label: string
  disabled?: boolean
}

interface CheckboxGroupProps {
  options: CheckboxOption[]
  values: string[]
  onChange: (values: string[]) => void
  className?: string
}

export function CheckboxGroup({
  options,
  values,
  onChange,
  className
}: CheckboxGroupProps) {
  const handleCheckboxChange = (checked: boolean, id: string) => {
    if (checked) {
      onChange([...values, id])
    } else {
      onChange(values.filter((value) => value !== id))
    }
  }

  return (
    <div className={cn("space-y-3", className)}>
      {options.map((option) => (
        <div key={option.id} className="flex items-center space-x-2">
          <Checkbox
            id={option.id}
            checked={values.includes(option.id)}
            onCheckedChange={(checked) => 
              handleCheckboxChange(checked as boolean, option.id)
            }
            disabled={option.disabled}
          />
          <Label htmlFor={option.id}>{option.label}</Label>
        </div>
      ))}
    </div>
  )
}

// Usage
export function NotificationPreferences() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  
  const notificationTypes = [
    { id: "email", label: "Email notifications" },
    { id: "push", label: "Push notifications" },
    { id: "sms", label: "SMS notifications" },
    { id: "in-app", label: "In-app notifications" }
  ]

  return (
    <CheckboxGroup
      options={notificationTypes}
      values={selectedTypes}
      onChange={setSelectedTypes}
    />
  )
}
\`\`\``
      },
      {
        id: 'layout-components',
        title: 'Layout Components',
        content: `Collection of layout components for structuring your application.

### Card Component

\`\`\`tsx
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface CardProps {
  title?: string
  description?: string
  children: React.ReactNode
  footer?: React.ReactNode
  className?: string
}

export function CardComponent({
  title,
  description,
  children,
  footer,
  className
}: CardProps) {
  return (
    <Card className={className}>
      {(title || description) && (
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent>{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  )
}

// Usage
export function PricingCard() {
  return (
    <CardComponent
      title="Pro Plan"
      description="Perfect for growing businesses"
      footer={
        <div className="flex justify-between items-center w-full">
          <span className="text-2xl font-bold">$29/mo</span>
          <Button>Get Started</Button>
        </div>
      }
    >
      <ul className="space-y-2">
        <li className="flex items-center">
          <Check className="mr-2 h-4 w-4" /> Unlimited projects
        </li>
        <li className="flex items-center">
          <Check className="mr-2 h-4 w-4" /> Priority support
        </li>
        <li className="flex items-center">
          <Check className="mr-2 h-4 w-4" /> Custom domain
        </li>
      </ul>
    </CardComponent>
  )
}
\`\`\`

### Tabs Component

\`\`\`tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Tab {
  value: string
  label: string
  content: React.ReactNode
  disabled?: boolean
}

interface TabsProps {
  tabs: Tab[]
  defaultValue?: string
  onChange?: (value: string) => void
  className?: string
}

export function TabsComponent({
  tabs,
  defaultValue,
  onChange,
  className
}: TabsProps) {
  return (
    <Tabs
      defaultValue={defaultValue || tabs[0]?.value}
      onValueChange={onChange}
      className={className}
    >
      <TabsList className="grid grid-cols-{tabs.length}">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            disabled={tab.disabled}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  )
}

// Usage
export function ProfileTabs() {
  const tabs = [
    {
      value: "general",
      label: "General",
      content: <div>General settings content</div>
    },
    {
      value: "password",
      label: "Password",
      content: <div>Password settings content</div>
    },
    {
      value: "notifications",
      label: "Notifications",
      content: <div>Notification preferences</div>
    },
    {
      value: "billing",
      label: "Billing",
      content: <div>Billing information</div>,
      disabled: true
    }
  ]

  return (
    <TabsComponent
      tabs={tabs}
      defaultValue="general"
      onChange={(value) => console.log(value)}
    />
  )
}
\`\`\`

### Accordion Component

\`\`\`tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface AccordionSection {
  value: string
  trigger: React.ReactNode
  content: React.ReactNode
  disabled?: boolean
}

interface AccordionProps {
  sections: AccordionSection[]
  type?: "single" | "multiple"
  defaultValue?: string | string[]
  collapsible?: boolean
  className?: string
}

export function AccordionComponent({
  sections,
  type = "single",
  defaultValue,
  collapsible = true,
  className
}: AccordionProps) {
  return (
    <Accordion
      type={type}
      defaultValue={defaultValue}
      collapsible={collapsible}
      className={cn("w-full", className)}
    >
      {sections.map((section) => (
        <AccordionItem
          key={section.value}
          value={section.value}
          disabled={section.disabled}
        >
          <AccordionTrigger>{section.trigger}</AccordionTrigger>
          <AccordionContent>{section.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

// Usage
export function FAQAccordion() {
  const faqs = [
    {
      value: "q1",
      trigger: "What is CodeLib?",
      content: "CodeLib is a modern component library for building beautiful applications."
    },
    {
      value: "q2",
      trigger: "How do I get started?",
      content: "Install CodeLib via npm or yarn and start importing components."
    },
    {
      value: "q3",
      trigger: "Is it free to use?",
      content: "Yes, CodeLib is open source and free to use in any project."
    }
  ]

  return (
    <AccordionComponent
      sections={faqs}
      defaultValue="q1"
      className="max-w-md mx-auto"
    />
  )
}
\`\`\``
      },
      {
        id: 'feedback-components',
        title: 'Feedback Components',
        content: `Collection of components for user feedback and notifications.

### Toast Notifications

\`\`\`tsx
import { useToast } from "@/components/ui/use-toast"
import { Toast, ToastAction } from "@/components/ui/toast"
import { Button } from "@/components/ui/button"

interface ToastProps {
  title: string
  description?: string
  action?: {
    label: string
    onClick: () => void
  }
  variant?: 'default' | 'destructive' | 'success'
  duration?: number
}

export function useToastNotification() {
  const { toast } = useToast()

  const showToast = ({
    title,
    description,
    action,
    variant = 'default',
    duration = 5000
  }: ToastProps) => {
    toast({
      title,
      description,
      action: action ? (
        <ToastAction altText={action.label} onClick={action.onClick}>
          {action.label}
        </ToastAction>
      ) : undefined,
      variant,
      duration
    })
  }

  return { showToast }
}

// Usage
export function ToastExample() {
  const { showToast } = useToastNotification()

  const handleSuccess = () => {
    showToast({
      title: "Successfully saved!",
      description: "Your changes have been saved.",
      variant: "success",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo clicked")
      }
    })
  }

  const handleError = () => {
    showToast({
      title: "Error occurred",
      description: "Failed to save changes.",
      variant: "destructive",
      action: {
        label: "Try again",
        onClick: () => console.log("Retry clicked")
      }
    })
  }

  return (
    <div className="space-x-4">
      <Button onClick={handleSuccess}>Show Success Toast</Button>
      <Button onClick={handleError} variant="destructive">
        Show Error Toast
      </Button>
    </div>
  )
}
\`\`\`

### Progress Bar

\`\`\`tsx
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

interface ProgressBarProps {
  value: number
  max?: number
  size?: 'sm' | 'md' | 'lg'
  showValue?: boolean
  className?: string
}

export function ProgressBar({
  value,
  max = 100,
  size = 'md',
  showValue = false,
  className
}: ProgressBarProps) {
  const percentage = Math.round((value / max) * 100)

  const sizeClasses = {
    sm: 'h-2',
    md: 'h-4',
    lg: 'h-6'
  }

  return (
    <div className="space-y-2">
      <Progress
        value={percentage}
        className={cn(sizeClasses[size], className)}
      />
      {showValue && (
        <p className="text-sm text-muted-foreground text-right">
          {percentage}%
        </p>
      )}
    </div>
  )
}

// Usage
export function UploadProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <ProgressBar
      value={progress}
      size="md"
      showValue
      className="w-full max-w-md"
    />
  )
}
\`\`\`

### Loading Spinner

\`\`\`tsx
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Spinner({ size = 'md', className }: SpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8'
  }

  return (
    <Loader2
      className={cn(
        'animate-spin',
        sizeClasses[size],
        className
      )}
    />
  )
}

// With loading state wrapper
interface LoadingStateProps {
  loading: boolean
  children: React.ReactNode
  spinnerSize?: 'sm' | 'md' | 'lg'
  className?: string
}

export function LoadingState({
  loading,
  children,
  spinnerSize = 'md',
  className
}: LoadingStateProps) {
  if (loading) {
    return (
      <div className={cn('flex items-center justify-center', className)}>
        <Spinner size={spinnerSize} />
      </div>
    )
  }

  return children
}

// Usage
export function LoadingExample() {
  const [loading, setLoading] = useState(true)

  return (
    <LoadingState loading={loading} className="h-32">
      <div>Content loaded!</div>
    </LoadingState>
  )
}
\`\`\``
      },
      {
        id: 'navigation-components',
        title: 'Navigation Components',
        content: `Collection of components for navigation and routing.

### Breadcrumb Navigation

\`\`\`tsx
import { ChevronRight, Home } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface BreadcrumbItem {
  label: string
  href: string
  icon?: React.ReactNode
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav className={cn("flex items-center space-x-1", className)}>
      <Link
        href="/"
        className="flex items-center text-muted-foreground hover:text-foreground"
      >
        <Home className="h-4 w-4" />
      </Link>
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center">
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <Link
            href={item.href}
            className={cn(
              "flex items-center px-2 py-1 text-sm font-medium",
              index === items.length - 1
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {item.icon && <span className="mr-2">{item.icon}</span>}
            {item.label}
          </Link>
        </div>
      ))}
    </nav>
  )
}

// Usage
export function BreadcrumbExample() {
  const items = [
    { label: "Projects", href: "/projects" },
    { label: "Web App", href: "/projects/web-app" },
    { label: "Settings", href: "/projects/web-app/settings" }
  ]

  return <Breadcrumb items={items} />
}
\`\`\`

### Navigation Menu

\`\`\`tsx
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

interface MenuItem {
  label: string
  href?: string
  description?: string
  icon?: React.ReactNode
  children?: MenuItem[]
}

interface NavMenuProps {
  items: MenuItem[]
  className?: string
}

export function NavMenu({ items, className }: NavMenuProps) {
  return (
    <NavigationMenu className={className}>
      <NavigationMenuList>
        {items.map((item) => (
          <NavigationMenuItem key={item.label}>
            {item.children ? (
              <>
                <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <NavigationMenuLink asChild>
                          <a
                            href={child.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            {child.icon && <span className="mb-2">{child.icon}</span>}
                            <div className="text-sm font-medium leading-none">
                              {child.label}
                            </div>
                            {child.description && (
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {child.description}
                              </p>
                            )}
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <a
                  href={item.href}
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  {item.icon && <span className="mr-2">{item.icon}</span>}
                  {item.label}
                </a>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

// Usage
export function NavMenuExample() {
  const items = [
    {
      label: "Features",
      children: [
        {
          label: "Analytics",
          description: "View detailed analytics and reports",
          href: "/features/analytics",
          icon: <BarChart className="h-6 w-6" />
        },
        {
          label: "Automation",
          description: "Automate your workflow",
          href: "/features/automation",
          icon: <Zap className="h-6 w-6" />
        }
      ]
    },
    {
      label: "Resources",
      children: [
        {
          label: "Documentation",
          description: "Learn how to use our platform",
          href: "/docs",
          icon: <FileText className="h-6 w-6" />
        },
        {
          label: "Blog",
          description: "Read our latest updates",
          href: "/blog",
          icon: <BookOpen className="h-6 w-6" />
        }
      ]
    },
    {
      label: "Pricing",
      href: "/pricing"
    }
  ]

  return <NavMenu items={items} />
}
\`\`\`

### Pagination

\`\`\`tsx
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  maxVisible?: number
  className?: string
}

export function PaginationComponent({
  currentPage,
  totalPages,
  onPageChange,
  maxVisible = 5,
  className
}: PaginationProps) {
  const getVisiblePages = () => {
    if (totalPages <= maxVisible) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    const halfVisible = Math.floor(maxVisible / 2)
    let start = currentPage - halfVisible
    let end = currentPage + halfVisible

    if (start < 1) {
      end += Math.abs(start) + 1
      start = 1
    }

    if (end > totalPages) {
      start -= end - totalPages
      end = totalPages
    }

    return Array.from(
      { length: end - start + 1 },
      (_, i) => start + i
    )
  }

  const visiblePages = getVisiblePages()

  return (
    <Pagination className={className}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
        </PaginationItem>

        {visiblePages[0] > 1 && (
          <>
            <PaginationItem>
              <PaginationLink onClick={() => onPageChange(1)}>
                1
              </PaginationLink>
            </PaginationItem>
            {visiblePages[0] > 2 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
          </>
        )}

        {visiblePages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              onClick={() => onPageChange(page)}
              isActive={currentPage === page}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {visiblePages[visiblePages.length - 1] < totalPages && (
          <>
            {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationLink onClick={() => onPageChange(totalPages)}>
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        <PaginationItem>
          <PaginationNext
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

// Usage
export function PaginationExample() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10

  return (
    <PaginationComponent
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
      maxVisible={5}
    />
  )
}
\`\`\``
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
  },
  {
    id: 'state-management',
    title: 'State Management',
    icon: Database,
    description: 'Advanced state management patterns and best practices',
    sections: [
      {
        id: 'zustand',
        title: 'Zustand Integration',
        content: `Learn how to integrate Zustand with CodeLib components.

### Basic Store Setup

\`\`\`tsx
import create from 'zustand'

interface Store {
  count: number
  increment: () => void
  decrement: () => void
}

const useStore = create<Store>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 }))
}))

export default function Counter() {
  const { count, increment, decrement } = useStore()
  
  return (
    <div className="flex items-center gap-4">
      <Button onClick={decrement}>-</Button>
      <span>{count}</span>
      <Button onClick={increment}>+</Button>
    </div>
  )
}
\`\`\`

### Persisted Store

\`\`\`tsx
import { persist } from 'zustand/middleware'

const useStore = create(
  persist(
    (set) => ({
      theme: 'light',
      toggleTheme: () => 
        set((state) => ({ 
          theme: state.theme === 'light' ? 'dark' : 'light' 
        }))
    }),
    {
      name: 'theme-storage'
    }
  )
)
\`\`\``
      },
      {
        id: 'context',
        title: 'Context API Patterns',
        content: `Best practices for using React Context with CodeLib.

### Creating a Context

\`\`\`tsx
import { createContext, useContext, useState } from 'react'

interface ThemeContextType {
  theme: string
  setTheme: (theme: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
\`\`\``
      }
    ]
  },
  {
    id: 'authentication',
    title: 'Authentication',
    icon: Shield,
    description: 'Implement secure authentication in your applications',
    sections: [
      {
        id: 'next-auth',
        title: 'NextAuth.js Integration',
        content: `Integrate NextAuth.js with CodeLib components.

### Setup

\`\`\`tsx
// pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
})

// Component usage
import { useSession, signIn, signOut } from 'next-auth/react'

export default function AuthButton() {
  const { data: session } = useSession()

  if (session) {
    return (
      <Button onClick={() => signOut()}>
        Sign out
      </Button>
    )
  }
  return (
    <Button onClick={() => signIn()}>
      Sign in
    </Button>
  )
}
\`\`\``
      },
      {
        id: 'protected-routes',
        title: 'Protected Routes',
        content: `Implement protected routes in your application.

### Middleware Approach

\`\`\`tsx
// middleware.ts
import { withAuth } from 'next-auth/middleware'

export default withAuth({
  callbacks: {
    authorized: ({ token }) => token !== null,
  },
})

export const config = {
  matcher: ['/dashboard/:path*', '/settings/:path*'],
}

// Protected Component
import { useSession } from 'next-auth/react'

export default function ProtectedPage() {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/auth/signin')
    },
  })

  if (status === 'loading') {
    return <LoadingSpinner />
  }

  return <div>Protected Content</div>
}
\`\`\``
      }
    ]
  },
  {
    id: 'internationalization',
    title: 'Internationalization',
    icon: Globe,
    description: 'Add multi-language support to your applications',
    sections: [
      {
        id: 'next-intl',
        title: 'next-intl Setup',
        content: `Implement internationalization with next-intl.

### Configuration

\`\`\`tsx
// next.config.js
const withNextIntl = require('next-intl/plugin')()

module.exports = withNextIntl({
  // Your Next.js config
})

// messages/en.json
{
  "Index": {
    "title": "Welcome to CodeLib",
    "description": "Build beautiful applications with ease"
  }
}

// app/[locale]/layout.tsx
import { useLocale } from 'next-intl'
import { notFound } from 'next/navigation'

export default function LocaleLayout({ children, params }) {
  const locale = useLocale()

  if (params.locale !== locale) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  )
}
\`\`\``
      },
      {
        id: 'language-switcher',
        title: 'Language Switcher',
        content: `Create a language switcher component.

\`\`\`tsx
import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'

export default function LanguageSwitcher() {
  const router = useRouter()
  const locale = useLocale()

  const handleChange = (newLocale: string) => {
    router.push(\`/\${newLocale}\`)
  }

  return (
    <Select
      value={locale}
      onValueChange={handleChange}
    >
      <SelectTrigger>
        <SelectValue placeholder="Select language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="fr">Français</SelectItem>
        <SelectItem value="de">Deutsch</SelectItem>
      </SelectContent>
    </Select>
  )
}
\`\`\``
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    icon: Terminal,
    description: 'Learn how to test your CodeLib components',
    sections: [
      {
        id: 'unit-testing',
        title: 'Unit Testing',
        content: `Write unit tests for your components using Vitest and Testing Library.

### Component Testing

\`\`\`tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('handles click events', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    
    fireEvent.click(screen.getByText('Click me'))
    expect(handleClick).toHaveBeenCalled()
  })

  it('supports different variants', () => {
    render(<Button variant="outline">Outline</Button>)
    expect(screen.getByText('Outline')).toHaveClass('outline')
  })
})
\`\`\``
      },
      {
        id: 'e2e-testing',
        title: 'E2E Testing',
        content: `End-to-end testing with Playwright.

### Setup

\`\`\`tsx
// playwright.config.ts
import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  testDir: './e2e',
  use: {
    baseURL: 'http://localhost:3000',
    screenshot: 'only-on-failure',
  },
}

export default config

// e2e/navigation.spec.ts
import { test, expect } from '@playwright/test'

test('navigation works correctly', async ({ page }) => {
  await page.goto('/')
  
  // Click the about link
  await page.click('text=About')
  
  // Verify URL changed
  expect(page.url()).toContain('/about')
  
  // Verify content loaded
  await expect(page.locator('h1')).toContainText('About Us')
})
\`\`\``
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    icon: Cloud,
    description: 'Deploy your CodeLib applications to production',
    sections: [
      {
        id: 'vercel',
        title: 'Vercel Deployment',
        content: `Deploy your application to Vercel.

### Configuration

\`\`\`json
// vercel.json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    }
  ],
  "env": {
    "NEXT_PUBLIC_API_URL": "@api_url"
  }
}

// Build Commands
{
  "scripts": {
    "build": "next build",
    "vercel-build": "prisma generate && next build"
  }
}
\`\`\`

### Environment Variables

Set up your environment variables in Vercel:

1. Go to Project Settings
2. Navigate to Environment Variables
3. Add your variables:
   - \`DATABASE_URL\`
   - \`NEXTAUTH_SECRET\`
   - \`NEXTAUTH_URL\`
   - Other app-specific variables`
      },
      {
        id: 'docker',
        title: 'Docker Deployment',
        content: `Containerize your CodeLib application.

### Dockerfile

\`\`\`dockerfile
# Dockerfile
FROM node:18-alpine AS base

# Dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Builder
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

# Runner
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
\`\`\`

### Docker Compose

\`\`\`yaml
# docker-compose.yml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://user:password@db:5432/mydb
    depends_on:
      - db
  db:
    image: postgres:14
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=mydb
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
\`\`\``
      }
    ]
  },
  {
    id: 'performance-optimization',
    title: 'Performance',
    icon: Laptop,
    description: 'Optimize your application for better performance',
    sections: [
      {
        id: 'image-optimization',
        title: 'Image Optimization',
        content: `Optimize images in your CodeLib application.

### Next.js Image Component

\`\`\`tsx
import Image from 'next/image'

export default function OptimizedImage() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero image"
      width={1200}
      height={600}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,..."
      priority
    />
  )
}

// Responsive images
export function ResponsiveImage() {
  return (
    <Image
      src="/banner.jpg"
      alt="Responsive banner"
      fill
      sizes="(max-width: 768px) 100vw,
             (max-width: 1200px) 50vw,
             33vw"
      className="object-cover"
    />
  )
}
\`\`\``
      },
      {
        id: 'code-splitting',
        title: 'Code Splitting',
        content: `Implement effective code splitting strategies.

### Dynamic Imports

\`\`\`tsx
import dynamic from 'next/dynamic'

// Component level code splitting
const HeavyChart = dynamic(() => import('@/components/HeavyChart'), {
  loading: () => <LoadingSpinner />,
  ssr: false
})

// Library level code splitting
const MarkdownEditor = dynamic(
  () => import('@/components/MarkdownEditor').then((mod) => mod.Editor),
  {
    loading: () => <LoadingPlaceholder />,
    ssr: false
  }
)

// Route level code splitting
export default function AdminDashboard() {
  const [showAnalytics, setShowAnalytics] = useState(false)

  return (
    <div>
      <Button onClick={() => setShowAnalytics(true)}>
        Show Analytics
      </Button>
      
      {showAnalytics && (
        <Suspense fallback={<LoadingSpinner />}>
          <HeavyChart />
        </Suspense>
      )}
    </div>
  )
}
\`\`\``
      }
    ]
  },
  {
    id: 'data-fetching',
    title: 'Data Fetching',
    icon: Box,
    description: 'Learn different data fetching patterns',
    sections: [
      {
        id: 'server-actions',
        title: 'Server Actions',
        content: `Use Next.js Server Actions for data mutations.

### Form Handling

\`\`\`tsx
// actions.ts
'use server'

export async function createPost(formData: FormData) {
  const title = formData.get('title')
  const content = formData.get('content')
  
  try {
    await prisma.post.create({
      data: {
        title: title as string,
        content: content as string
      }
    })
    revalidatePath('/posts')
    return { success: true }
  } catch (error) {
    return { error: 'Failed to create post' }
  }
}

// PostForm.tsx
export default function PostForm() {
  return (
    <form action={createPost}>
      <Input name="title" placeholder="Post title" />
      <Textarea name="content" placeholder="Post content" />
      <SubmitButton>Create Post</SubmitButton>
    </form>
  )
}
\`\`\``
      },
      {
        id: 'tanstack-query',
        title: 'TanStack Query',
        content: `Implement data fetching with TanStack Query (React Query).

### Basic Setup

\`\`\`tsx
import { 
  QueryClient, 
  QueryClientProvider,
  useQuery,
  useMutation
} from '@tanstack/react-query'

const queryClient = new QueryClient()

// Fetch posts
function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const res = await fetch('/api/posts')
      return res.json()
    }
  })
}

// Create post mutation
function useCreatePost() {
  return useMutation({
    mutationFn: async (newPost) => {
      const res = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify(newPost)
      })
      return res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    }
  })
}

// Usage in component
export default function Posts() {
  const { data: posts, isLoading } = usePosts()
  const createPost = useCreatePost()

  if (isLoading) return <LoadingSpinner />

  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
\`\`\``
      }
    ]
  },
  {
    id: 'architecture',
    title: 'Architecture',
    icon: Layers,
    description: 'Learn about CodeLib architectural patterns',
    sections: [
      {
        id: 'project-structure',
        title: 'Project Structure',
        content: `Recommended project structure for scalable applications.

### Directory Structure

\`\`\`
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── register/
│   ├── (dashboard)/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── layout.tsx
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   └── input.tsx
│   └── features/
│       ├── auth/
│       └── dashboard/
├── lib/
│   ├── utils.ts
│   └── constants.ts
├── hooks/
│   ├── use-auth.ts
│   └── use-theme.ts
└── types/
    └── index.ts
\`\`\`

### Feature-based Organization

\`\`\`tsx
// features/auth/components/login-form.tsx
export function LoginForm() {
  return (
    <Form>
      <Input name="email" type="email" />
      <Input name="password" type="password" />
      <Button type="submit">Login</Button>
    </Form>
  )
}

// features/auth/api/auth.ts
export async function login(credentials: Credentials) {
  // Implementation
}

// features/auth/hooks/use-auth.ts
export function useAuth() {
  // Implementation
}
\`\`\``
      },
      {
        id: 'error-handling',
        title: 'Error Handling',
        content: `Implement robust error handling patterns.

### Error Boundary

\`\`\`tsx
import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="error-container">
          <h2>Something went wrong</h2>
          <Button onClick={() => this.setState({ hasError: false })}>
            Try again
          </Button>
        </div>
      )
    }

    return this.props.children
  }
}

// Usage
export default function App() {
  return (
    <ErrorBoundary
      fallback={
        <div className="error-page">
          <h1>Oops!</h1>
          <p>Something went wrong</p>
        </div>
      }
    >
      <YourApp />
    </ErrorBoundary>
  )
}
\`\`\``
      }
    ]
  },
  {
    id: 'performance-optimization',
    title: 'Performance',
    icon: Laptop,
    description: 'Optimize your application for better performance',
    sections: [
      {
        id: 'image-optimization',
        title: 'Image Optimization',
        content: `Optimize images in your CodeLib application.

### Next.js Image Component

\`\`\`tsx
import Image from 'next/image'

export default function OptimizedImage() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero image"
      width={1200}
      height={600}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,..."
      priority
    />
  )
}

// Responsive images
export function ResponsiveImage() {
  return (
    <Image
      src="/banner.jpg"
      alt="Responsive banner"
      fill
      sizes="(max-width: 768px) 100vw,
             (max-width: 1200px) 50vw,
             33vw"
      className="object-cover"
    />
  )
}
\`\`\``
      },
      {
        id: 'code-splitting',
        title: 'Code Splitting',
        content: `Implement effective code splitting strategies.

### Dynamic Imports

\`\`\`tsx
import dynamic from 'next/dynamic'

// Component level code splitting
const HeavyChart = dynamic(() => import('@/components/HeavyChart'), {
  loading: () => <LoadingSpinner />,
  ssr: false
})

// Library level code splitting
const MarkdownEditor = dynamic(
  () => import('@/components/MarkdownEditor').then((mod) => mod.Editor),
  {
    loading: () => <LoadingPlaceholder />,
    ssr: false
  }
)

// Route level code splitting
export default function AdminDashboard() {
  const [showAnalytics, setShowAnalytics] = useState(false)

  return (
    <div>
      <Button onClick={() => setShowAnalytics(true)}>
        Show Analytics
      </Button>
      
      {showAnalytics && (
        <Suspense fallback={<LoadingSpinner />}>
          <HeavyChart />
        </Suspense>
      )}
    </div>
  )
}
\`\`\``
      }
    ]
  },
  {
    id: 'data-fetching',
    title: 'Data Fetching',
    icon: Box,
    description: 'Learn different data fetching patterns',
    sections: [
      {
        id: 'server-actions',
        title: 'Server Actions',
        content: `Use Next.js Server Actions for data mutations.

### Form Handling

\`\`\`tsx
// actions.ts
'use server'

export async function createPost(formData: FormData) {
  const title = formData.get('title')
  const content = formData.get('content')
  
  try {
    await prisma.post.create({
      data: {
        title: title as string,
        content: content as string
      }
    })
    revalidatePath('/posts')
    return { success: true }
  } catch (error) {
    return { error: 'Failed to create post' }
  }
}

// PostForm.tsx
export default function PostForm() {
  return (
    <form action={createPost}>
      <Input name="title" placeholder="Post title" />
      <Textarea name="content" placeholder="Post content" />
      <SubmitButton>Create Post</SubmitButton>
    </form>
  )
}
\`\`\``
      },
      {
        id: 'tanstack-query',
        title: 'TanStack Query',
        content: `Implement data fetching with TanStack Query (React Query).

### Basic Setup

\`\`\`tsx
import { 
  QueryClient, 
  QueryClientProvider,
  useQuery,
  useMutation
} from '@tanstack/react-query'

const queryClient = new QueryClient()

// Fetch posts
function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const res = await fetch('/api/posts')
      return res.json()
    }
  })
}

// Create post mutation
function useCreatePost() {
  return useMutation({
    mutationFn: async (newPost) => {
      const res = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify(newPost)
      })
      return res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    }
  })
}

// Usage in component
export default function Posts() {
  const { data: posts, isLoading } = usePosts()
  const createPost = useCreatePost()

  if (isLoading) return <LoadingSpinner />

  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
\`\`\``
      }
    ]
  },
  {
    id: 'architecture',
    title: 'Architecture',
    icon: Layers,
    description: 'Learn about CodeLib architectural patterns',
    sections: [
      {
        id: 'project-structure',
        title: 'Project Structure',
        content: `Recommended project structure for scalable applications.

### Directory Structure

\`\`\`
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── register/
│   ├── (dashboard)/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── layout.tsx
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   └── input.tsx
│   └── features/
│       ├── auth/
│       └── dashboard/
├── lib/
│   ├── utils.ts
│   └── constants.ts
├── hooks/
│   ├── use-auth.ts
│   └── use-theme.ts
└── types/
    └── index.ts
\`\`\`

### Feature-based Organization

\`\`\`tsx
// features/auth/components/login-form.tsx
export function LoginForm() {
  return (
    <Form>
      <Input name="email" type="email" />
      <Input name="password" type="password" />
      <Button type="submit">Login</Button>
    </Form>
  )
}

// features/auth/api/auth.ts
export async function login(credentials: Credentials) {
  // Implementation
}

// features/auth/hooks/use-auth.ts
export function useAuth() {
  // Implementation
}
\`\`\``
      },
      {
        id: 'error-handling',
        title: 'Error Handling',
        content: `Implement robust error handling patterns.

### Error Boundary

\`\`\`tsx
import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="error-container">
          <h2>Something went wrong</h2>
          <Button onClick={() => this.setState({ hasError: false })}>
            Try again
          </Button>
        </div>
      )
    }

    return this.props.children
  }
}

// Usage
export default function App() {
  return (
    <ErrorBoundary
      fallback={
        <div className="error-page">
          <h1>Oops!</h1>
          <p>Something went wrong</p>
        </div>
      }
    >
      <YourApp />
    </ErrorBoundary>
  )
}
\`\`\``
      }
    ]
  }
]
