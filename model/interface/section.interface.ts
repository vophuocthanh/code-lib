export interface CodeProps {
  node?: any
  inline?: boolean
  className?: string
  children?: React.ReactNode
  [key: string]: any
}

export interface Section {
  id: string
  title: string
  content: string
}

export interface NavigationState {
  prev: Section | null
  next: Section | null
}
