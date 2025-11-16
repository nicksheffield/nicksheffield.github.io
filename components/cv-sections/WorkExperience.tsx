import { Section, SectionBody, SectionHeading } from '@/components/Section'
import {
	workExperiences,
	type WorkExperience as WorkExperienceType,
} from '@/lib/data'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'

export const WorkExperience = () => {
	return (
		<Section className="print:gap-2">
			<SectionHeading className="print:text-sm print:font-medium">
				Work Experience
			</SectionHeading>

			<SectionBody className="print:gap-6">
				{workExperiences.map((experience, i) => (
					<WorkExperienceItem
						key={experience.company}
						experience={experience}
						isLast={i === workExperiences.length - 1}
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
			className="relative flex break-inside-avoid flex-row gap-8"
		>
			{!isLast && (
				<span
					aria-hidden="true"
					className="bg-border absolute top-8 left-2 z-10 -ml-px h-full w-0.5 print:hidden"
				/>
			)}

			<span
				className={cn(
					'bg-primary-600',
					'ring-primary-600/20 z-20 flex size-4 shrink-0 items-center justify-center rounded-full ring-8 print:hidden',
				)}
			/>

			<div className="group relative -mt-1 flex flex-1 flex-col gap-2 print:mt-0">
				<div className="bg-muted/0 group-hover:bg-muted/50 pointer-events-none absolute -inset-x-4 -inset-y-4 -z-10 scale-95 rounded-2xl transition-[background-color,scale] group-hover:scale-100 print:hidden" />

				<div className="flex flex-row gap-6">
					{/* <div className="text-muted-foreground/50 hidden shrink-0 text-xs print:block">
						{experience.dates
							.map((x) => format(x, 'yyyy'))
							.join(' - ')}
					</div> */}

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

						<ul className="order-4 flex list-outside list-disc flex-col gap-2 pl-4 print:mt-2 print:gap-0 print:opacity-70">
							{experience.descriptions.map((description) => (
								<li
									key={description}
									className="text-muted-foreground text-sm leading-6 text-pretty print:text-xs print:leading-normal"
								>
									{description}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
