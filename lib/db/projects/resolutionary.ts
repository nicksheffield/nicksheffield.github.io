import { Project } from '@/lib/types'

const excerpt = `
Resolutionary is an internal system developed for The ADR Centre in NZ, a company focused on alternative dispute resolution.

The system allowed for the creation of customised legal dispute resolution workflows, each with their own unique set of forms, notifications, and user roles.

I was responsible for developing the front-end of the system, which was built using React.
`

const description = `
Resolutionary is an internal system developed for The ADR Centre in NZ, a company focused on alternative dispute resolution.

The system allowed for the creation of customised legal dispute resolution workflows, each with their own unique set of forms, notifications, and user roles.

I was responsible for developing the front-end of the system, which was built using React.
`

export const project: Project = {
	key: 'resolutionary',
	name: 'Resolutionary',
	type: 'Applicable',
	dates: '2021 - 2024',
	technologies: [
		'React',
		'Tailwind CSS',
		'TypeScript',
		'React Flow',
		'Jotai',
	],
	excerpt,
	description,
}
