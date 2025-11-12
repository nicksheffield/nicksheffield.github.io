import { cn } from '@/lib/utils'
import type { PropsWithChildren, HTMLAttributes } from 'react'
import NextLink from 'next/link'

type LinkProps = PropsWithChildren<HTMLAttributes<HTMLAnchorElement>> & {
	href: string
	external?: boolean
}

export const Link = ({
	children,
	className,
	external,
	...props
}: LinkProps) => {
	const styles = cn(
		'text-indigo-500 hover:text-indigo-400 underline print:no-underline',
		className
	)

	if (external) {
		return (
			<a className={styles} target="_blank" rel="noreferrer" {...props}>
				{children}
			</a>
		)
	}

	return (
		<NextLink className={styles} {...props}>
			{children}
		</NextLink>
	)
}

export const GhostLink = ({
	children,
	className,
	external,
	...props
}: LinkProps) => {
	const styles = cn(
		'flex gap-2 items-center hover:bg-muted px-2 py-1 -mx-2 -my-1 rounded-md hover:text-foreground bg-muted/50 print:bg-transparent',
		className
	)

	if (external) {
		return (
			<a className={styles} target="_blank" rel="noreferrer" {...props}>
				{children}
			</a>
		)
	}

	return (
		<NextLink className={styles} {...props}>
			{children}
		</NextLink>
	)
}

export const GroupLink = ({
	children,
	className,
	external,
	...props
}: LinkProps) => {
	const styles = cn('group', className)

	if (external) {
		return (
			<a className={styles} target="_blank" rel="noreferrer" {...props}>
				{children}
			</a>
		)
	}

	return (
		<NextLink className={styles} {...props}>
			{children}
		</NextLink>
	)
}

export const InnerGhostLink = ({
	children,
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			'flex gap-2 items-center group-hover:bg-muted px-2 py-1 -mx-2 -my-1 rounded-md group-hover:text-foreground bg-muted/50 print:bg-transparent',
			className
		)}
		{...props}
	>
		{children}
	</div>
)
