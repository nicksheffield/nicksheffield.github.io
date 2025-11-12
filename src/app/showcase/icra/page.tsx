import { Lightbox } from '@/components/Lightbox'
import { GhostLink } from '@/components/Link'
import { ArrowLeftIcon } from 'lucide-react'

const Page = () => {
	return (
		<div className="flex flex-col gap-8">
			<div className="flex">
				<GhostLink href="/" className="text-sm font-medium">
					<ArrowLeftIcon className="size-4" />
					Back to CV
				</GhostLink>
			</div>

			<div className="text-lg font-semibold">ICRA Showcase</div>

			<div>
				<Lightbox
					src="/assets/showcase/icra/screenshot-cases.png"
					alt="Screenshot of the ICRA Showcase"
					width={1000}
					height={1000}
					className="rounded-lg"
				/>
			</div>

			<div>
				<Lightbox
					src="/assets/showcase/icra/screenshot-case.png"
					alt="Screenshot of the ICRA Showcase"
					width={1000}
					height={1000}
					className="rounded-lg"
				/>
			</div>

			<div>
				<Lightbox
					src="/assets/showcase/icra/screenshot-case-dark.png"
					alt="Screenshot of the ICRA Showcase"
					width={1000}
					height={1000}
					className="rounded-lg"
				/>
			</div>
		</div>
	)
}

export default Page
