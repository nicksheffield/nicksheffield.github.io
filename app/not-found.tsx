import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

const NotFound = () => {
	return (
		<div className="bg-muted/50 flex flex-col gap-6 rounded-md px-6 py-4">
			<h2 className="text-lg font-semibold">Not Found</h2>

			<div className="flex flex-col gap-4">
				<p className="text-sm">
					The page you are looking for does not exist or has been
					moved.
				</p>
				<Link
					href="/"
					className={buttonVariants({
						variant: 'secondary',
						size: 'sm',
					})}
				>
					Return Home
				</Link>
			</div>
		</div>
	)
}

export default NotFound
