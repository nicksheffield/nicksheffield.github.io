import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

// const buttonVariants = cva(
//   "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
//   {
//     variants: {
//       variant: {
//         default:
//           "bg-primary text-primary-foreground shadow hover:bg-primary/90",
//         destructive:
//           "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
//         outline:
//           "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
//         secondary:
//           "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
//         ghost: "hover:bg-accent hover:text-accent-foreground",
//         link: "text-primary underline-offset-4 hover:underline",
//       },
//       size: {
//         default: "h-9 px-4 py-2",
//         sm: "h-8 rounded-md px-3 text-xs",
//         lg: "h-10 rounded-md px-8",
//         icon: "h-9 w-9",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   }
// )
const buttonVariants = cva(
	'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold shadow-xs transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer print:shadow-none',
	{
		variants: {
			variant: {
				default:
					'bg-foreground text-background hover:bg-foreground/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground dark:bg-foreground dark:shadow-none dark:hover:bg-foreground/90 dark:focus-visible:outline-foreground',
				secondary:
					'bg-white text-gray-900 inset-ring inset-ring-gray-300 hover:bg-gray-50 dark:bg-white/10 dark:text-white dark:shadow-none dark:inset-ring-white/5 dark:hover:bg-white/20',
				soft: 'bg-primary-50 text-primary-600 hover:bg-primary-100 dark:bg-primary-600/10 dark:text-primary-400 dark:shadow-none dark:hover:bg-primary-500/30',
				link: 'text-primary underline-offset-4 hover:underline shadow-none',
			},
			size: {
				default: 'rounded-md px-2.5 py-1.5 text-sm',
				sm: 'rounded-sm px-2 py-1 text-sm',
				xs: 'rounded-sm px-2 py-1 text-xs',
				lg: 'rounded-md px-3 py-2 text-sm',
				xl: 'rounded-md px-3.5 py-2.5 text-sm',
				icon: 'h-9 w-9 rounded-md',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
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
