import { Project } from '@/lib/types'

const excerpt = `
An internal web app used by Gleeson & Cox for scheduling and managing truck deliveries and invoicing. The app was established before I joined the company, but I helped with maintenance and new features.
`

const description = `
An internal web app used by Gleeson & Cox for scheduling and managing truck deliveries and invoicing. The app was established before I joined the company, but I helped with maintenance and new features.
`

export const project: Project = {
	key: 'jaws',
	name: 'JAWS',
	type: 'Applicable',
	dates: '2017 - 2018',
	technologies: ['Ember', 'Sass', 'jQuery'],
	printHide: true,
	excerpt,
	description,
}
