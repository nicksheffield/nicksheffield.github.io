import { GhostLink } from '@/components/Link'
import { Section, SectionBody, SectionHeading } from '@/components/Section'
import {
	workExperiences,
	type WorkExperience as WorkExperienceType,
} from '@/lib/data'

export const WorkExperience = () => {
	return (
		<Section>
			<SectionHeading>Work Experience</SectionHeading>

			<SectionBody>
				{workExperiences.map((experience) => (
					<WorkExperienceItem
						key={experience.company}
						experience={experience}
					/>
				))}
			</SectionBody>
		</Section>
	)
}

const WorkExperienceItem = ({
	experience,
}: {
	experience: WorkExperienceType
}) => {
	return (
		<div
			key={experience.company}
			className="flex flex-col gap-2 break-inside-avoid"
		>
			<div className="sm:grid grid-cols-[10rem_1fr] sm:gap-x-8 contents">
				<div className="flex sm:flex-col flex-row justify-between sm:justify-start items-start gap-4 sm:order-1 order-2">
					<GhostLink
						href={experience.companyLink}
						className="text-sm font-medium"
						external
					>
						@ {experience.company}
					</GhostLink>

					<div className="text-muted-foreground text-sm opacity-50 font-medium">
						{experience.dates}
					</div>
				</div>

				<div className="sm:flex flex-col gap-4 contents sm:order-1">
					<div className="flex justify-between sm:flex-row flex-col gap-2 order-1">
						<div className="font-medium text-sm">
							{experience.role}
						</div>
					</div>

					<ul className="list-disc list-outside pl-4 flex flex-col gap-2 sm:order-2 order-3">
						{experience.descriptions.map((description) => (
							<li
								key={description}
								className="text-muted-foreground text-sm leading-relaxed text-pretty"
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
