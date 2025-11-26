'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeftIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export const BackButton = () => {
	const router = useRouter()

	return (
		<Link
			href="/"
			onClick={router.back}
			className={cn(
				buttonVariants({
					variant: 'secondary',
					size: 'icon',
				}),
				'rounded-full',
			)}
		>
			<ArrowLeftIcon className="size-4" />
		</Link>
	)
}
