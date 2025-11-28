import { Project } from '@/lib/types'

const excerpt = `
A web app for managing disputes with the ACC (Accident Compensation Corporation). The app was used by the ICRA team to create and run conferences between lawyers, clients, and ACC representatives.
`

const description = `
A web app for managing disputes with the ACC (Accident Compensation Corporation). The app was used by the ICRA team to create and run conferences between lawyers, clients, and ACC representatives.

![ICRA screenshot](/assets/work-projects/icra/icra-cases.png)

A list of the cases in ICRA. Each case represents a dispute between an "applicant" and ACC.

![ICRA screenshot](/assets/work-projects/icra/icra-case.png)

The view of a single case. This page allowed the ICRA staff to view and edit case details, reviews, documents, and conferences.

![ICRA screenshot](/assets/work-projects/icra/icra-case-dark.png)

A look at the dark theme for ICRA, using the Case page as an example.

![ICRA screenshot](/assets/work-projects/icra/icra-notifications.png)

A glance at the admin area of the app. This specific page is a log of every email sent by the system.
`

export const project: Project = {
	key: 'icra',
	name: 'ICRA',
	type: 'Applicable',
	showcaseLink: '/work-projects/icra',
	dates: '2019 - 2022',
	excerpt,
	description,
	technologies: ['React', 'Tailwind CSS', 'TypeScript'],
}
