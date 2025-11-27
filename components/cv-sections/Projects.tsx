import { Section, SectionBody, SectionHeading } from '@/components/Section'
import { buttonVariants } from '@/components/ui/button'
import { projects } from '@/lib/db/projects'
import type { Project } from '@/lib/types'
import { cn } from '@/lib/utils'
import { ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

export const Projects = () => {
	return (
		<Section className="print:gap-2">
			<SectionHeading className="print:text-sm print:font-medium">
				Work Projects
			</SectionHeading>

			<SectionBody className="gap-16 print:gap-6">
				{Object.values(projects).map((project) => (
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
			data-print-hide={project.printHide ? '' : undefined}
			className="group/block relative flex break-inside-avoid flex-col gap-y-2 data-print-hide:print:hidden"
		>
			{/* <div className="bg-muted/0 group-hover/block:bg-muted/50 pointer-events-none absolute -inset-x-5 -inset-y-4 -z-10 scale-90 rounded-2xl transition-[background-color,scale] group-hover/block:scale-100 print:hidden" /> */}

			<div className="bg-muted/0 group-hover/block:bg-muted/50 pointer-events-none absolute -inset-4 -z-10 scale-95 rounded-4xl transition-[background-color,scale] [corner-shape:superellipse(2)] not-supports-corner-shape:rounded-md group-hover/block:scale-100 print:hidden" />

			<div className="flex flex-col gap-0">
				<div className="flex items-center gap-3.5 print:text-xs">
					<div className="font-medium print:font-normal">
						{project.name}
					</div>

					<span className="bg-foreground/20 h-4 w-0.75 rounded-full print:hidden" />

					<div className="text-muted-foreground/50 print:opacity-70">
						{project.type && `${project.type}, `}
						{project.dates}
					</div>
				</div>

				<div className="text-muted-foreground relative z-10 mt-2 flex flex-col gap-3 text-sm leading-6 text-pretty print:text-xs print:leading-normal print:opacity-70 [&_p:not(:first-child)]:print:hidden">
					{project.excerpt && (
						<ReactMarkdown>{project.excerpt}</ReactMarkdown>
					)}
				</div>

				<div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row print:hidden">
					<div className="flex flex-wrap items-center gap-4">
						{project.technologies.map((technology) => (
							<div
								key={technology}
								className="text-primary-500 text-xs font-medium"
							>
								{technology}
							</div>
						))}
					</div>

					<div className="flex flex-row justify-between gap-4">
						{project.showcaseLink && (
							<Link
								className={cn(
									'print:hidden',
									buttonVariants({
										variant: 'link',
										size: 'sm',
									}),
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
