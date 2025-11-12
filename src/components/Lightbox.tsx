'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useState, type ComponentProps } from 'react'

export const Lightbox = ({
	className,
	alt,
	...props
}: ComponentProps<typeof Image>) => {
	const [open, setOpen] = useState(false)

	return (
		<div
			onClick={() => setOpen((x) => !x)}
			className={cn('cursor-pointer')}
		>
			<div className={cn('', open && 'fixed inset-0 z-50 p-12')}>
				<Image
					className={cn(
						className,
						open && 'w-auto h-auto transition-all duration-100'
					)}
					alt={alt || 'Zoomable Image'}
					{...props}
				/>
			</div>
		</div>
	)
}
