import { GroupLink, InnerGhostLink } from '@/components/Link'
import { Section, SectionBody, SectionHeading } from '@/components/Section'
import { Project, projects } from '@/lib/data'
import { ArrowRightIcon, LinkIcon } from 'lucide-react'

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
			<div className="absolute -top-6 -left-6 w-[calc(100%+3rem)] h-[calc(100%+3rem)] bg-muted/0 group-hover/block:bg-muted/50 transition-[background-color,transform] duration-200 group-hover/block:scale-100 scale-90 print:hidden pointer-events-none -z-10 rounded-md" />

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
						<GroupLink
							href={
								project.projectLink ||
								project.showcaseLink ||
								'#'
							}
							className="flex flex-row justify-between gap-4 order-1"
							external={!!project.projectLink}
						>
							<div className="text-sm font-medium">
								{project.name}
							</div>

							{project.projectLink && (
								<InnerGhostLink className="text-sm font-medium text-muted-foreground print:hidden">
									View <LinkIcon className="size-4" />
								</InnerGhostLink>
							)}

							{project.showcaseLink && (
								<InnerGhostLink className="text-sm font-medium text-muted-foreground print:hidden">
									Showcase{' '}
									<ArrowRightIcon className="size-4" />
								</InnerGhostLink>
							)}
						</GroupLink>
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
							<div
								key={technology}
								className="flex items-center gap-1 py-0.5 px-2 font-medium text-xs print:pl-0 bg-indigo-500/10 text-indigo-500 rounded-sm"
							>
								{technology}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
