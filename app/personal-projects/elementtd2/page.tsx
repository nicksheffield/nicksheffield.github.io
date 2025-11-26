import { experiments } from '@/lib/db/experiments'
import { ShowcasePage } from '@/components/ShowcasePage'

const Page = () => ShowcasePage({ project: experiments['elementtd2'] })

export default Page
