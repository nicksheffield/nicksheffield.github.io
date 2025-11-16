import { Section, SectionHeading } from '@/components/Section'

export const Contact = () => {
	return (
		<Section className="gap-4">
			<SectionHeading className="print:text-sm print:font-medium">
				Contact
			</SectionHeading>

			<div className="grid grid-cols-[max-content_1fr] gap-4">
				<div className="text-xs font-medium">Email</div>
				<div className="text-xs opacity-70">nick@nicksheffield.com</div>

				<div className="text-xs font-medium">Phone</div>
				<div className="text-xs opacity-70">+447493894593</div>

				<div className="text-xs font-medium">Github</div>
				<div className="text-xs opacity-70">nicksheffield</div>
			</div>
		</Section>
	)
}
