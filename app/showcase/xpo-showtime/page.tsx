import { projects } from '@/lib/data'
import { ShowcasePage } from '@/components/ShowcasePage'

const project = projects.find((x) => x.key === 'xpo-showtime')

const Page = () => {
	return project ? (
		<ShowcasePage project={project} />
	) : (
		<div className="text-muted-foreground">Showcase not found</div>
	)
}

export default Page
