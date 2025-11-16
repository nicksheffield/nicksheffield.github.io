import { buttonVariants } from '@/components/ui/button'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { Project } from '@/lib/data'
import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const ShowcasePage = ({ project }: { project: Project }) => {
	return (
		<div className="flex flex-col gap-8">
			<div className="flex">
				<Link
					href="/"
					className={buttonVariants({
						variant: 'link',
						size: 'sm',
					})}
				>
					<ArrowLeftIcon className="size-4" />
					Back to CV
				</Link>
			</div>

			<div className="text-2xl font-semibold">{project?.name}</div>

			<div className="flex flex-col gap-6">
				{project?.description.map((x, i) => (
					<p key={i} className="text-muted-foreground leading-7">
						{x}
					</p>
				))}
			</div>

			{project.images && (
				<div>
					<Carousel className="-mx-2 w-full">
						<div className="flex flex-row justify-end gap-2 px-2">
							<CarouselPrevious />
							<CarouselNext />
						</div>
						<CarouselContent>
							{project.images.map((image, index) => (
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
			)}
		</div>
	)
}
