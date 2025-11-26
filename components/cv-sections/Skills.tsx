import { Section, SectionHeading } from '@/components/Section'

const skills: string[] = [
	'React',
	'TypeScript',
	'Node.js',
	'Hono',
	'GraphQL',
	'Next.js',
	'Tailwind CSS',
	'Git',
]

export const Skills = () => {
	return (
		<Section className="hidden gap-2 print:flex">
			<SectionHeading className="print:text-sm print:font-medium">
				Stack
			</SectionHeading>

			<div className="flex flex-row flex-wrap gap-4 print:gap-2">
				{skills.map((x) => (
					<div
						key={x}
						className="rounded-full border px-3 py-1 text-xs font-normal"
					>
						{x}
					</div>
				))}
			</div>
		</Section>
	)
}
