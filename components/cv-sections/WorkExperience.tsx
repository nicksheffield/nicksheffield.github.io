import { Section, SectionBody, SectionHeading } from '@/components/Section'
import { work } from '@/lib/db/work-experience'
import type { WorkExperience as WorkExperienceType } from '@/lib/types'
import { format } from 'date-fns'
import ReactMarkdown from 'react-markdown'

export const WorkExperience = () => {
	return (
		<Section className="print:gap-2">
			<SectionHeading className="print:text-sm print:font-medium">
				Work Experience
			</SectionHeading>

			<SectionBody className="print:gap-6">
				{Object.values(work).map((experience, i, a) => (
					<WorkExperienceItem
						key={experience.company}
						experience={experience}
						isLast={i === a.length - 1}
					/>
				))}
			</SectionBody>
		</Section>
	)
}

const WorkExperienceItem = ({
	experience,
	isLast,
}: {
	experience: WorkExperienceType
	isLast: boolean
}) => {
	return (
		<div
			key={experience.company}
			className="group relative flex break-inside-avoid flex-row gap-8"
		>
			{!isLast && (
				<span
					aria-hidden="true"
					className="bg-border absolute top-8 left-2 z-10 -ml-px h-full w-0.5 print:hidden"
				/>
			)}

			<span className="bg-primary-600 ring-primary-600/20 z-20 flex size-4 shrink-0 items-center justify-center rounded-full ring-8 transition-[scale] group-hover:scale-120 print:hidden" />

			<div className="relative -mt-1 flex flex-1 flex-col gap-2 print:mt-0">
				<div className="bg-muted/0 group-hover:bg-muted/50 pointer-events-none absolute -inset-4 -z-10 scale-95 rounded-4xl transition-[background-color,scale] [corner-shape:superellipse(2)] not-supports-corner-shape:rounded-md group-hover:scale-100 print:hidden" />

				<div className="flex flex-row gap-6">
					<div className="flex flex-col gap-y-4 print:gap-y-0">
						<div className="flex flex-col justify-between sm:flex-row print:justify-start print:text-xs print:leading-normal">
							<div className="gap-x-4 print:flex">
								<span className="font-medium print:font-normal">
									{experience.role}
								</span>{' '}
								<span className="text-muted-foreground print:text-muted-foreground/50 print:mr-1 print:opacity-70">
									<span className="print:hidden">@</span>{' '}
									{experience.company}
									<span className="hidden print:inline">
										,
									</span>
								</span>
							</div>

							<div className="text-muted-foreground/50 text-sm leading-6 print:text-xs print:leading-normal print:opacity-70">
								{experience.dates
									.map((x) => format(x, 'yyyy'))
									.join(' - ')}
							</div>
						</div>

						<div className="[&_li]:text-muted-foreground [&_li]:text-sm [&_li]:leading-6 [&_li]:text-pretty [&_li]:print:text-xs [&_li]:print:leading-normal [&_ul]:order-4 [&_ul]:flex [&_ul]:list-outside [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-4 [&_ul]:print:mt-2 [&_ul]:print:gap-0 [&_ul]:print:opacity-70">
							<ReactMarkdown>
								{experience.description}
							</ReactMarkdown>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
