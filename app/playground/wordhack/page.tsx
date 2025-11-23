import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'

const images = [
	{
		src: '/assets/playground/wordhack/wordhack.png',
		alt: 'A screenshot of the Wordhack game',
		width: 1772,
		height: 1262,
		description: [],
	},
	{
		src: '/assets/playground/wordhack/wordhack-win.png',
		alt: 'A screenshot of the Wordhack game',
		width: 1772,
		height: 1262,
		description: [],
	},
	{
		src: '/assets/playground/wordhack/wordhack-hard.png',
		alt: 'A screenshot of the Wordhack game',
		width: 1772,
		height: 1262,
		description: [],
	},
	{
		src: '/assets/playground/wordhack/wordhack-light.png',
		alt: 'A screenshot of the Wordhack game',
		width: 1772,
		height: 1262,
		description: [],
	},
]

const RadarChart = () => {
	return (
		<div className="flex flex-col gap-16">
			<h1 className="text-2xl font-semibold">Wordhack</h1>

			<div className="flex flex-col gap-6">
				<p className="text-muted-foreground leading-7">
					This is the Wordhack game page
				</p>
			</div>

			<div>
				<Carousel className="-mx-2 w-full">
					<div className="flex flex-row justify-end gap-2 px-2">
						<CarouselPrevious />
						<CarouselNext />
					</div>
					<CarouselContent>
						{images.map((image, index) => (
							<CarouselItem key={index}>
								<div className="flex flex-col gap-4 p-2">
									<a
										href={image.src}
										target="_blank"
										rel="noopener noreferrer"
										className="select-none"
									>
										<Image
											src={image.src}
											alt={image.alt}
											width={image.width}
											height={image.height}
											className="ring-border overflow-hidden rounded-md ring-1"
										/>
									</a>

									<div className="flex flex-col gap-6">
										{image.description.map((x, i) => (
											<p
												key={i}
												className="text-muted-foreground leading-7"
											>
												{x}
											</p>
										))}
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</div>
	)
}

export default RadarChart
