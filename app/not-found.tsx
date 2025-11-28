import { BackLink } from '@/components/BackLink'
import { buttonVariants } from '@/components/ui/button'
import { ArrowLeftIcon } from 'lucide-react'

const NotFound = () => {
	return (
		<div className="bg-muted/50 flex flex-col items-start gap-6 rounded-md px-6 py-4">
			<h2 className="text-xl font-bold">Not Found</h2>

			<p className="text-sm">
				The page you are looking for does not exist or has been moved.
			</p>

			<BackLink
				className={buttonVariants({
					variant: 'link',
				})}
			>
				<ArrowLeftIcon className="size-4" />
				Return Home
			</BackLink>
		</div>
	)
}

export default NotFound
