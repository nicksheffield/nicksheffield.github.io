import { cn } from '@/lib/utils'
import type { HTMLAttributes, PropsWithChildren } from 'react'

export const Badge = ({
	className,
	...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
	return (
		<div
			className={cn(
				'inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 inset-ring inset-ring-indigo-700/10 dark:bg-indigo-400/10 dark:text-indigo-400 dark:inset-ring-indigo-400/30',
				className
			)}
			{...props}
		/>
	)
}
