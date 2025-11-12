import { About } from '@/app/components/About'
import { Projects } from '@/app/components/Projects'
import { WorkExperience } from '@/app/components/WorkExperience'

export default function Home() {
	return (
		<>
			<About />
			<WorkExperience />
			<Projects />
		</>
	)
}
