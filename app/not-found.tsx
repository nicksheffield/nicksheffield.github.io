'use client'

import { buttonVariants } from '@/components/ui/button'
import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const NotFound = () => {
	const router = useRouter()
	return (
		<div className="bg-muted/50 flex flex-col items-start gap-6 rounded-md px-6 py-4">
			<h2 className="text-xl font-bold">Not Found</h2>

			<div className="flex flex-col gap-4">
				<p className="text-sm">
					The page you are looking for does not exist or has been
					moved.
				</p>
			</div>

			<Link
				href="/"
				onClick={router.back}
				className={buttonVariants({
					variant: 'link',
				})}
			>
				<ArrowLeftIcon className="size-4" />
				Return Home
			</Link>
		</div>
	)
}

export default NotFound
