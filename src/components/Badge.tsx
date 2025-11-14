import { cn } from '@/lib/utils'
import type { HTMLAttributes, PropsWithChildren } from 'react'

export const Badge = ({
	className,
	children,
	...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
	return (
		<div
			className={cn(
				'inline-flex items-center rounded-sm bg-indigo-600/20 px-2 py-1 text-xs font-medium text-indigo-600 print:px-0 print:mr-2',
				className
			)}
			{...props}
		>
			{children}
		</div>
	)
}
