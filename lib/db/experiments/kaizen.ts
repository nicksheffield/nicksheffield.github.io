import { Project } from '@/lib/types'

const excerpt = `
A code generator that generates a GraphQL API based on a database schema that you design in a visual editor. It is a browser-based application, but it works by writing files to your file system, so you can view/edit the generated code from your local editor. It comes with built-in support for docker, database migrations, emails, authentication, monorepos and more.
`

const description = `
A code generator that generates a GraphQL API based on a database schema that you design in a visual editor. It is a browser-based application, but it works by writing files to your file system, so you can view/edit the generated code from your local editor. It comes with built-in support for docker, database migrations, emails, authentication, monorepos and more.

Using the FileSystem API to write files to a local directory made a lot of sense to me, as it allows the user to view/edit the generated code from their local editor, and it also fits in with version control. Originally I had toyed with using a combination of an [in-memory virtual file system](https://github.com/jvilk/BrowserFS) and [isomorphic git](https://isomorphic-git.org/en/) to read/write to a remote git repo, but I found that it was too much of a headache to get working, and ultimately less useful than just writing files.
`

const images = [
	{
		src: '/assets/personal-projects/kaizen/kaizen-erd.png',
		alt: 'Kaizen screenshot',
		description: [
			'A view of the ERD designer in Kaizen. It allows you to create as many tables as you like, and then add fields and relationships between them.',
		],
		width: 3024,
		height: 1989,
	},
	{
		src: '/assets/personal-projects/kaizen/kaizen-erd-field.png',
		alt: 'Kaizen screenshot',
		description: ['A view of the field editor in the ERD designer.'],
		width: 3024,
		height: 1989,
	},
	{
		src: '/assets/personal-projects/kaizen/kaizen-erd-relationship.png',
		alt: 'Kaizen screenshot',
		description: ['A view of the relationship editor in the ERD designer.'],
		width: 3024,
		height: 1989,
	},
	{
		src: '/assets/personal-projects/kaizen/kaizen-auth.png',
		alt: 'Kaizen screenshot',
		description: ['The authentication settings for this kaizen project.'],
		width: 3024,
		height: 1989,
	},
	{
		src: '/assets/personal-projects/kaizen/kaizen-env.png',
		alt: 'Kaizen screenshot',
		description: [
			'The environment settings for this kaizen project. It allows you to set up email via Resend, S3 file storage credentials, and a Sentry DSN',
		],
		width: 3024,
		height: 1989,
	},
]

export const project: Project = {
	key: 'kaizen',
	name: 'Kaizen',
	showcaseLink: '/personal-projects/kaizen',
	projectLink: 'https://kz-app.com',
	dates: '2023 - 2025',
	technologies: [
		'React',
		'Node.js',
		'Hono',
		'GraphQL',
		'better-auth',
		'Turborepo',
	],
	excerpt,
	description,
	images,
}
