import { buttonVariants } from '@/components/ui/button'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { Project } from '@/lib/types'
import { ExternalLinkIcon } from 'lucide-react'
import Image from 'next/image'
import { BackButton } from '@/components/BackButton'
import ReactMarkdown from 'react-markdown'

export const ShowcasePage = ({ project }: { project: Project }) => {
	return (
		<div className="mt-8 flex flex-col gap-8">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-4">
					<BackButton />
					<div className="text-2xl font-semibold">
						{project?.name}
					</div>
				</div>

				{project.projectLink && (
					<a
						href={project.projectLink}
						target="_blank"
						rel="noopener noreferrer"
						className={buttonVariants({ variant: 'link' })}
					>
						View project
						<ExternalLinkIcon />
					</a>
				)}
			</div>

			<div className="flex flex-col gap-6">
				{project.description && (
					<ReactMarkdown>{project.description}</ReactMarkdown>
				)}
				{/* {project?.description.map((x, i) => (
					<p key={i} className="text-muted-foreground leading-7">
						{isDescriptionObj(x) ? x.content : x}
					</p>
				))} */}
			</div>

			{(project.images?.length || 0) > 0 && (
				<div>
					<Carousel className="-mx-2 w-full">
						<div className="flex flex-row justify-end gap-2 px-2">
							<CarouselPrevious />
							<CarouselNext />
						</div>
						<CarouselContent>
							{project.images?.map((image, index) => (
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
												className="ring-border overflow-hidden ring-1"
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
