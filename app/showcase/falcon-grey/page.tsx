import { Lightbox } from '@/components/Lightbox'
import Link from 'next/link'
import { ArrowLeftIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'

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
