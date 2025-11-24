import { About } from '@/components/cv-sections/About'
import { Contact } from '@/components/cv-sections/Contact'
import { Projects } from '@/components/cv-sections/Projects'
import { Skills } from '@/components/cv-sections/Skills'
import { WorkExperience } from '@/components/cv-sections/WorkExperience'
import { Experiments } from '@/components/cv-sections/Experiments'

export default function Home() {
	return (
		<div className="mt-16 flex flex-col gap-24 print:mt-0 print:gap-8">
			<About />
			<div className="contents grid-cols-2 gap-x-6 gap-y-6 print:grid">
				<WorkExperience />
				<Projects />
				<Experiments />
			</div>
			<div className="hidden flex-col gap-8 print:flex">
				<Skills />
				<Contact />
			</div>
		</div>
	)
}
