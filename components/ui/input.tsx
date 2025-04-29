import { cn } from '@/core/lib/utils'
import { ComponentProps, forwardRef, ReactNode } from 'react'

interface InputProps extends ComponentProps<'input'> {
  icon?: ReactNode
  label?: string
  onClickIcon?: () => void
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, label, onClickIcon, ...props }, ref) => {
    return (
      <div className='relative flex items-center'>
        {label && <label htmlFor={props.id}>{label}</label>}
        <input
          type={type}
          className={cn(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            className
          )}
          ref={ref}
          {...props}
        />
        {icon && (
          <div className='absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3' onClick={onClickIcon}>
            {icon}
          </div>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
