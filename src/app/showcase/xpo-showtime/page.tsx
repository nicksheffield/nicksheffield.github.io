import { buttonVariants } from '@/components/ui/button'
import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'

const Page = () => {
	return (
		<div className="flex flex-col gap-8">
			<div className="flex">
				<Link
					href="/"
					className={buttonVariants({
						variant: 'secondary',
						size: 'sm',
					})}
				>
					<ArrowLeftIcon className="size-4" />
					Back to CV
				</Link>
			</div>

			<div className="text-lg font-semibold">XPO Showtime Showcase</div>
		</div>
	)
}

export default Page
