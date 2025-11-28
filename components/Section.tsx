import { cn } from '@/lib/utils'
import { ComponentProps, PropsWithChildren } from 'react'

export const Section = ({
	children,
	className,
	...props
}: PropsWithChildren<ComponentProps<'div'>>) => {
	return (
		<div className={cn('flex flex-col gap-8', className)} {...props}>
			{children}
		</div>
	)
}

export const SectionHeading = ({
	children,
	className,
	...props
}: PropsWithChildren<ComponentProps<'div'>>) => {
	return (
		<div className={cn('text-2xl font-semibold', className)} {...props}>
			{children}
		</div>
	)
}

export const SectionBody = ({
	children,
	className,
	...props
}: PropsWithChildren<ComponentProps<'div'>>) => {
	return (
		<div className={cn('flex flex-col gap-12', className)} {...props}>
			{children}
		</div>
	)
}
