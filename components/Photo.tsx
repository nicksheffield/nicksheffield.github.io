import { cn } from '@/lib/utils'
import Image from 'next/image'
import { ComponentProps } from 'react'

export const Photo = ({ className, ...props }: ComponentProps<'div'>) => {
	return (
		<div
			className={cn(
				'from-primary-600 to-primary-900 size-25 overflow-hidden rounded-[2.5em] bg-radial from-40% [corner-shape:superellipse(2)] not-supports-corner-shape:rounded-md sm:size-30 sm:rounded-[3rem] print:size-[60px] print:rounded-lg print:[corner-shape:none]',
				className,
			)}
			{...props}
		>
			<Image
				// src="/assets/images/nick-removebg-preview.png"
				src="/assets/images/frame-42.png"
				alt="Nick Sheffield"
				width={700}
				height={700}
				preload
			/>
		</div>
	)
}
