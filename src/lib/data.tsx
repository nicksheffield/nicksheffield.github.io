import Link from 'next/link'
import type { ReactNode } from 'react'

export type WorkExperience = {
	company: string
	companyLink: string
	role: string
	dates: string
	descriptions: string[]
}

export const workExperiences: WorkExperience[] = [
	{
		company: 'Applicable',
		companyLink: 'https://applicable.co.nz/',
		role: 'Project Lead Developer',
		dates: 'Jul 2017 - Nov 2024',
		descriptions: [
			'Developed and maintained web applications using React.js, React Native, Ember and Java.',
			'Led a team of developers on a web application for handling legal disputes.',
			'Created a code generator for speeding up development of full-stack react/node.js projects.',
			'Coached junior developers on best practices and improving their programming skills.',
			'Taught myself Java and Kotlin for an Android app for documenting fire stopping work, which was used by two large NZ universities.',
		],
	},
	{
		company: 'Yoobee',
		companyLink: 'https://www.yoobee.ac.nz/',
		role: 'Lecturer',
		dates: 'Jan 2012 - Jul 2017',
		descriptions: [
			'Taught web development to students studying a Diploma of Web Development.',
			'Continually improved the curriculum to keep up with modern web development practices.',
			'Actively introduced new technologies and frameworks to the curriculum.',
			'Taught JavaScript, HTML, CSS, PHP, MySQL, and Git.',
		],
	},
	{
		company: 'The Web Co',
		companyLink: 'https://thewebcompany.digital/',
		role: 'Web Developer',
		dates: 'Jun 2011 - Dec 2011',
		descriptions: [
			'Developed websites using HTML, CSS, JavaScript, and PHP.',
			"Applied many updates to existing clients websites, which were created using a myriad of frameworks and CMS's.",
			'Created and maintained multiple wordpress sites.',
			'Did some work on Magento e-commerce sites.',
		],
	},
]

export const stack: string[] = [
	'React',
	'Node.js',
	'TypeScript',
	'GraphQL',
	'Hono',
	'HTML',
	'CSS',
	'Git',
	'Tailwind CSS',
	'Next.js',
	'MySQL',
]

export type Project = {
	name: string
	projectLink?: string
	showcaseLink?: string
	type: string
	dates: string
	description: ReactNode
	technologies: string[]
}

export const projects: Project[] = [
	{
		name: 'Kaizen',
		type: 'Personal',
		projectLink: 'http://kz-app.com/',
		dates: '2023 - 2025',
		description:
			'Quickly design databases via an intuitive ERD editor, and auto-generate a ready-to-go back end api with full auth and crud.',
		technologies: [
			'React',
			'Node.js',
			'Hono',
			'GraphQL',
			'better-auth',
			'Turborepo',
		],
	},
	{
		name: 'XPO Showtime',
		type: '@ Applicable',
		showcaseLink: '/showcase/xpo-showtime',
		dates: '2024',
		description:
			'An internal web app for managing trade show registrations and exhibitor bookings. Used Kaizen to generate the back end.',
		technologies: ['React', 'Shadcn ui', 'TypeScript', 'GraphQL', 'MySQL'],
	},
	{
		name: 'Resolutionary',
		type: '@ Applicable',
		dates: '2021 - 2024',
		description:
			'An internal web app for managing multiple legal dispute resolution services.',
		technologies: ['React', 'Tailwind CSS', 'TypeScript'],
	},
	{
		name: 'ICRA',
		type: '@ Applicable',
		showcaseLink: '/showcase/icra',
		dates: '2019 - 2022',
		description: (
			<>
				A web app for managing meetings in the{' '}
				<Link href="https://icra.co.nz/">
					alternative dispute resolution
				</Link>{' '}
				industry.
			</>
		),
		technologies: ['React', 'Tailwind CSS', 'TypeScript'],
	},
	{
		name: 'Falcon Grey',
		type: '@ Applicable',
		showcaseLink: '/showcase/falcon-grey',
		dates: '2018 - 2019',
		description:
			'An Android app for documenting fire stopping work offline.',
		technologies: ['Java', 'Kotlin', 'Android'],
	},
	{
		name: 'JAWS',
		type: '@ Applicable',
		dates: '2017 - 2018',
		description: (
			<>
				An internal web app used by{' '}
				<Link href="https://www.gleesoncox.co.nz/">Gleeson & Cox</Link>{' '}
				for scheduling and managing truck deliveries and invoicing.
			</>
		),
		technologies: ['Ember', 'Sass'],
	},
]
