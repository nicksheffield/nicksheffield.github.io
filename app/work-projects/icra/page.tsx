import { projects } from '@/lib/db/projects'
import { ShowcasePage } from '@/components/ShowcasePage'

const Page = () => ShowcasePage({ project: projects['icra'] })

export default Page
