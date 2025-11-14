import { Badge } from '@/components/Badge'
import { Section, SectionBody, SectionHeading } from '@/components/Section'
import { buttonVariants } from '@/components/ui/button'
import { Project, projects } from '@/lib/data'
import { cn } from '@/lib/utils'
import { ArrowRightIcon, LinkIcon } from 'lucide-react'
import Link from 'next/link'

export const Projects = () => {
	return (
		<Section>
			<SectionHeading>Projects</SectionHeading>

			<SectionBody>
				{projects.map((project) => (
					<ProjectsItem key={project.name} project={project} />
				))}
			</SectionBody>
		</Section>
	)
}

export const ProjectsItem = ({ project }: { project: Project }) => {
	return (
		<div
			key={project.name}
			className="flex flex-col gap-y-2 break-inside-avoid group/block relative"
		>
			<div className="absolute -inset-x-4 -inset-y-4 bg-muted/0 group-hover/block:bg-muted/50 transition-[background-color,scale] group-hover/block:scale-100 scale-90 print:hidden pointer-events-none -z-10 rounded-2xl" />

			<div className="sm:grid sm:grid-cols-[10rem_1fr] sm:gap-x-8 flex flex-col gap-y-2">
				<div className="flex sm:flex-col items-start gap-4 justify-between sm:justify-start order-2 sm:order-1">
					<div className="text-sm font-medium text-muted-foreground">
						{project.type}
					</div>
					<div className="text-muted-foreground text-sm opacity-50 font-medium">
						{project.dates}
					</div>
				</div>

				<div className="sm:flex flex-col gap-4 sm:order-2 contents">
					{project.projectLink || project.showcaseLink ? (
						<div className="flex flex-row justify-between gap-4 order-1">
							<div className="text-sm font-medium">
								{project.name}
							</div>

							{project.projectLink && (
								<Link
									className={cn(
										'print:hidden',
										buttonVariants({
											variant: 'secondary',
											size: 'sm',
										})
									)}
									href={project.projectLink}
									target="_blank"
									rel="noopener noreferrer"
								>
									View <LinkIcon className="size-4" />
								</Link>
							)}

							{project.showcaseLink && (
								<Link
									className={cn(
										'print:hidden',
										buttonVariants({
											variant: 'secondary',
											size: 'sm',
										})
									)}
									href={project.showcaseLink}
								>
									Showcase{' '}
									<ArrowRightIcon className="size-4" />
								</Link>
							)}
						</div>
					) : (
						<div className="text-sm font-medium order-1">
							{project.name}
						</div>
					)}

					<div className="text-muted-foreground text-sm leading-relaxed text-pretty order-3">
						{project.description}
					</div>

					<div className="flex gap-2 flex-wrap order-4">
						{project.technologies.map((technology) => (
							<Badge
								key={technology}
								className="flex items-center gap-1 py-0.5 px-2 font-medium text-xs print:pl-0 bg-indigo-500/10 text-indigo-500 rounded-sm"
							>
								{technology}
							</Badge>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
