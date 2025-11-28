import { buttonVariants } from '@/components/ui/button'
import { Project } from '@/lib/types'
import { ExternalLinkIcon, ArrowLeftIcon } from 'lucide-react'
import { BackLink } from '@/components/BackLink'
import ReactMarkdown from 'react-markdown'
import { cn } from '@/lib/utils'

export const ShowcasePage = ({ project }: { project: Project }) => {
	return (
		<div className="mt-8 flex flex-col gap-8">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-4">
					<BackLink
						className={cn(
							buttonVariants({
								variant: 'secondary',
								size: 'icon',
							}),
							'rounded-full',
						)}
					>
						<ArrowLeftIcon />
					</BackLink>

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

			<div className="[&_p]:text-muted-foreground [&_img]:ring-border flex flex-col gap-6 [--image-oversize:0%] sm:[--image-oversize:10%] [&_img]:-ml-(--image-oversize) [&_img]:max-w-[calc(100%+(var(--image-oversize)*2))] [&_img]:rounded-2xl [&_img]:ring-1 [&_img]:[corner-shape:superellipse(2)] [&_img]:not-supports-corner-shape:rounded-md [&_p]:leading-7">
				{project.description && (
					<ReactMarkdown>{project.description}</ReactMarkdown>
				)}
			</div>
		</div>
	)
}
