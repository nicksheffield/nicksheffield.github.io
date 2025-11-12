import { Link } from '@/components/Link'

const NotFound = () => {
	return (
		<div className="flex flex-col gap-6 px-6 py-4 rounded-md bg-muted/50">
			<h2 className="text-lg font-semibold">Not Found</h2>

			<div className="flex flex-col gap-4">
				<p className="text-sm">
					The page you are looking for does not exist or has been
					moved.
				</p>
				<Link href="/" className="text-sm">
					Return Home
				</Link>
			</div>
		</div>
	)
}

export default NotFound
