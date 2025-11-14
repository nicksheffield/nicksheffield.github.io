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
	const [closing, setClosing] = useState(false)

	const handleClick = () => {
		if (open) {
			setClosing(true)
			setTimeout(() => {
				setOpen(false)
				setClosing(false)
			}, 200)
		} else {
			setOpen(true)
			setClosing(false)
		}
	}

	return (
		<div onClick={handleClick} className="cursor-pointer">
			<Image
				className={cn(className, 'w-auto h-auto')}
				alt={alt || 'Zoomable Image'}
				{...props}
			/>

			{open && (
				<div
					className={cn(
						'duration-200 fixed inset-0 z-50 p-12 flex items-center justify-center',
						closing ? 'animate-out fade-out' : 'animate-in fade-in'
					)}
				>
					<Image
						className={cn(
							'w-auto h-auto rounded-md duration-200 relative shadow-xl',
							closing
								? 'animate-out zoom-out-90'
								: 'animate-in zoom-in-90'
						)}
						alt={alt || 'Zoomable Image'}
						{...props}
					/>
				</div>
			)}
		</div>
	)
}
