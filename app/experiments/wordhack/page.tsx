import { experiments } from '@/lib/data'
import { ShowcasePage } from '@/components/ShowcasePage'

const project = experiments.find((x) => x.key === 'wordhack')

const Page = () => {
	return project ? (
		<ShowcasePage project={project} />
	) : (
		<div className="text-muted-foreground">Project not found</div>
	)
}

export default Page
