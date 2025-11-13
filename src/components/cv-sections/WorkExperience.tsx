import { Section, SectionBody, SectionHeading } from '@/components/Section'
import {
	workExperiences,
	type WorkExperience as WorkExperienceType,
} from '@/lib/data'
import { cn } from '@/lib/utils'

export const WorkExperience = () => {
	return (
		<Section>
			<SectionHeading>Work Experience</SectionHeading>

			<SectionBody>
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
			className="break-inside-avoid relative flex flex-row gap-8"
		>
			{!isLast && (
				<span
					aria-hidden="true"
					className="absolute top-8 left-2 -ml-px h-full w-0.5 bg-gray-200 dark:bg-white/10 z-10"
				/>
			)}

			<span
				className={cn(
					'bg-indigo-600',
					'flex size-4 shrink-0 items-center justify-center rounded-full ring-8 ring-white dark:ring-gray-900 z-20'
				)}
			>
				{/* <CheckIcon aria-hidden="true" className="size-5 text-white" /> */}
			</span>

			<div className="flex flex-col gap-2 group relative flex-1 -mt-1">
				<div className="absolute -inset-x-4 -inset-y-4 bg-muted/0 group-hover:bg-muted/50 transition-[background-color,scale] duration-200 group-hover:scale-100 scale-95 print:hidden pointer-events-none -z-10 rounded-2xl" />

				<div className="flex flex-col gap-y-4">
					<div className="flex flex-row justify-between">
						<div>
							<span className="font-medium">
								{experience.role}
							</span>{' '}
							<span className="text-muted-foreground">
								@ {experience.company}
							</span>
						</div>

						<div className="text-muted-foreground/50 text-sm font-medium leading-6 order-3">
							{experience.dates}
						</div>
					</div>

					<ul className="list-disc list-outside pl-4 flex flex-col gap-2 order-4">
						{experience.descriptions.map((description) => (
							<li
								key={description}
								className="text-muted-foreground text-sm leading-6 text-pretty"
							>
								{description}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}
