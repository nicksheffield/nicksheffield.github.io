import { About } from '@/components/cv-sections/About'
import { Projects } from '@/components/cv-sections/Projects'
import { WorkExperience } from '@/components/cv-sections/WorkExperience'

export default function Home() {
	return (
		<>
			<About />
			<WorkExperience />
			<Projects />
		</>
	)
}
