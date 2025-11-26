import { WorkExperience } from '@/lib/types'

const description = `
 - Developed websites using HTML, CSS, JavaScript, PHP, Wordpress.
 - Applied many updates to existing clients websites, which were created using a myriad of frameworks and CMS's.
`
// - Created and maintained multiple wordpress sites.
// - Did some work on Magento e-commerce sites.

export const work: WorkExperience = {
	company: 'The Web Co',
	companyLink: 'https://thewebcompany.digital/',
	role: 'Web Developer',
	dates: [new Date(2011, 5, 1), new Date(2011, 11, 1)],
	description,
}
