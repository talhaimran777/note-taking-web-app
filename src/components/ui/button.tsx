import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '~/lib/utils'

const buttonVariants = cva(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-neutral-400 disabled:pointer-events-none disabled:bg-neutral-100 disabled:text-neutral-300 disabled:border-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
    {
        variants: {
            variant: {
                primary:
                    'bg-blue-500 text-primary-foreground hover:bg-blue-700',
                secondary:
                    'bg-neutral-100 text-neutral-600 hover:bg-white hover:border-neutral-300 hover:border hover:text-neutral-950 focus-visible:ring-neutral-400 focus-visible:border focus-visible:text-neutral-950 focus-visible:border-neutral-950',
                border: 'bg-white border border-neutral-300 text-neutral-950 hover:bg-neutral-100 hover:text-neutral-600 hover:border-none focus-visible:border-neutral-950 focus-visible:ring-neutral-400',
                destructive:
                    'bg-destructive text-destructive-foreground hover:bg-destructive/90',
            },
            size: {
                primary: 'h-10 px-4 py-3',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'primary',
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button'
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
