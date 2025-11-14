import { Badge } from '@/components/Badge'
import { Section, SectionBody, SectionHeading } from '@/components/Section'
import { buttonVariants } from '@/components/ui/button'
import { Project, projects } from '@/lib/data'
import { cn } from '@/lib/utils'
import { ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'

export const Projects = () => {
	return (
		<Section>
			<SectionHeading>Projects</SectionHeading>

			<SectionBody className="gap-16">
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
			<div className="absolute -inset-x-5 -inset-y-4 bg-muted/0 group-hover/block:bg-muted/50 transition-[background-color,scale] group-hover/block:scale-100 scale-90 print:hidden pointer-events-none -z-10 rounded-2xl" />

			<div className="flex flex-col gap-0">
				{/* <div className="relative z-10 order-first flex items-center text-sm text-muted-foreground/50 pl-3.5">
					<span
						className="absolute inset-y-0 left-0 flex items-center"
						aria-hidden="true"
					>
						<span className="h-4 w-0.5 rounded-full bg-foreground/20" />
					</span>
					{project.type}, {project.dates}
				</div>

				<div className="mt-3 text-base font-semibold tracking-tight text-foreground">
					{project.name}
				</div> */}

				<div className="flex items-center gap-3.5">
					<div className="font-medium">{project.name}</div>

					<span className="h-4 w-0.5 rounded-full bg-foreground/20" />

					<div className="text-muted-foreground/50">
						{project.type}, {project.dates}
					</div>
				</div>

				<div className="mt-2 relative z-10 text-sm text-muted-foreground text-pretty leading-6">
					{project.description}
				</div>

				<div className="mt-4 flex flex-col sm:flex-row justify-between gap-4">
					<div className="flex items-center gap-2 flex-wrap">
						{project.technologies.map((technology) => (
							<Badge
								key={technology}
								className="flex items-center gap-1 py-0.5 px-2 font-medium text-xs print:pl-0 bg-primary-500/10 text-primary-500 rounded-sm"
							>
								{technology}
							</Badge>
						))}
					</div>

					<div className="flex flex-row justify-between gap-4">
						{project.projectLink && (
							<Link
								className={cn(
									'print:hidden',
									buttonVariants({
										variant: 'link',
										size: 'sm',
									})
								)}
								href={project.projectLink}
								target="_blank"
								rel="noopener noreferrer"
							>
								View <ChevronRightIcon className="size-4" />
							</Link>
						)}

						{project.showcaseLink && (
							<Link
								className={cn(
									'print:hidden',
									buttonVariants({
										variant: 'link',
										size: 'sm',
									})
								)}
								href={project.showcaseLink}
							>
								Showcase <ChevronRightIcon className="size-4" />
							</Link>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
