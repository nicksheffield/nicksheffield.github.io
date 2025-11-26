import { Project } from '@/lib/types'

const excerpt = `
An Android app for documenting fire stopping work offline. Builders would use the app in the field to document the fire stop work they had done. The app allowed them to add the system used, take photos, and interface with a bluetooth printer to create sticky labels.

There was also a companion web app for viewing the data gathered by the mobile app, and displaying reporting information for the local council.
`

const description = `
An Android app for documenting fire stopping work offline. Builders would use the app in the field to document the fire stop work they had done. The app allowed them to add the system used, take photos, and interface with a bluetooth printer to create sticky labels.

There was also a companion web app for viewing the data gathered by the mobile app, and displaying reporting information for the local council.
`

export const project: Project = {
	key: 'falcon-grey',
	name: 'Falcon Grey',
	type: 'Applicable',
	dates: '2018 - 2019',
	technologies: ['Java', 'Kotlin', 'Android', 'SQLite', 'Laravel', 'React'],
	excerpt,
	description,
}
