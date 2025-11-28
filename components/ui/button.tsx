import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
	'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold shadow-xs transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer print:shadow-none [corner-shape:superellipse(2)] ',
	{
		variants: {
			variant: {
				default:
					'bg-foreground text-background hover:bg-foreground/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground dark:bg-foreground dark:shadow-none dark:hover:bg-foreground/90 dark:focus-visible:outline-foreground',
				secondary:
					'bg-white text-gray-900 inset-ring inset-ring-gray-300 hover:bg-gray-50 dark:bg-white/10 dark:text-white dark:shadow-none dark:inset-ring-white/5 dark:hover:bg-white/20',
				soft: 'bg-primary-600/20 text-primary-600 hover:bg-primary-100 dark:bg-primary-600/20 dark:text-primary-400 dark:shadow-none dark:hover:bg-primary-500/30',
				ghost: 'bg-foreground/0 text-foreground hover:bg-foreground/10 shadow-none',
				link: 'text-primary underline-offset-4 hover:underline shadow-none! px-0!',
			},
			size: {
				xs: 'not-supports-corner-shape:rounded-sm rounded-md px-2 py-1 text-xs',
				sm: 'not-supports-corner-shape:rounded-sm rounded-md px-2 py-1 text-sm',
				default:
					'not-supports-corner-shape:rounded-md px-2.5 py-1.5 text-sm rounded-2xl',
				lg: 'not-supports-corner-shape:rounded-md px-3 py-2 text-sm rounded-2xl',
				xl: 'not-supports-corner-shape:rounded-md px-3.5 py-2.5 text-sm rounded-2xl',
				icon: 'h-9 w-9 not-supports-corner-shape:rounded-md rounded-2xl',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
)

export interface ButtonProps
	extends React.ComponentProps<'button'>,
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
	},
)
Button.displayName = 'Button'

export { Button, buttonVariants }
