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

			<div className="text-lg font-semibold">Falcon Grey Showcase</div>

			<figure>
				<Lightbox
					src="/assets/showcase/falcon-grey/passive-fire-main.png"
					alt="Screenshot of the Falcon Grey main screen"
					width={1000}
					height={1000}
					className="rounded-lg"
				/>
			</figure>

			<figure>
				<Lightbox
					src="/assets/showcase/falcon-grey/passive-fire-openplan.png"
					alt="Screenshot of the Falcon Grey plan screen"
					width={1000}
					height={1000}
					className="rounded-lg"
				/>
			</figure>

			<figure>
				<Lightbox
					src="/assets/showcase/falcon-grey/passive-fire-openplan.png"
					alt="Screenshot of the Falcon Grey plan screen"
					width={1000}
					height={1000}
					className="rounded-lg"
				/>
			</figure>
		</div>
	)
}

export default Page
