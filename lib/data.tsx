export type WorkExperience = {
	company: string
	companyLink: string
	role: string
	dates: Date[]
	descriptions: string[]
}

export const workExperiences: WorkExperience[] = [
	{
		company: 'Applicable',
		companyLink: 'https://applicable.co.nz/',
		role: 'Project Lead Developer',
		// dates: 'Jul 2017 - Nov 2024',
		dates: [new Date(2017, 6, 1), new Date(2024, 5, 31)],
		descriptions: [
			'Developed and maintained web applications using React.js, React Native, Ember and Java.',
			'Led a team of developers on a web application for handling legal disputes.',
			'Coached junior developers on best practices and improving their programming skills.',
			// 'Created a code generator for speeding up development of full-stack react/node.js projects.',
			// 'Taught myself Java and Kotlin for an Android app for documenting fire stopping work, which was used by two large NZ universities.',
		],
	},
	{
		company: 'Yoobee',
		companyLink: 'https://www.yoobee.ac.nz/',
		role: 'Lecturer',
		// dates: 'Jan 2012 - Jul 2017',
		dates: [new Date(2012, 0, 1), new Date(2017, 6, 1)],
		descriptions: [
			'Taught students studying the Diploma of Web Development.',
			'Continually improved the curriculum to keep up with modern web development practices.',
			'Taught JavaScript, HTML, CSS, PHP, MySQL, and Git.',
		],
	},
	{
		company: 'The Web Co',
		companyLink: 'https://thewebcompany.digital/',
		role: 'Web Developer',
		// dates: 'Jun 2011 - Dec 2011',
		dates: [new Date(2011, 5, 1), new Date(2011, 11, 1)],
		descriptions: [
			'Developed websites using HTML, CSS, JavaScript, PHP, Wordpress.',
			"Applied many updates to existing clients websites, which were created using a myriad of frameworks and CMS's.",
			// 'Created and maintained multiple wordpress sites.',
			// 'Did some work on Magento e-commerce sites.',
		],
	},
]

export const skills: string[] = [
	'React',
	'TypeScript',
	'Node.js',
	'Hono',
	'GraphQL',
	'Next.js',
	'Tailwind CSS',
	'Git',
]

export type Project = {
	key: string
	name: string
	projectLink?: string
	showcaseLink?: string
	printHide?: boolean
	type: string
	dates: string
	description: string[]
	technologies: string[]
	images?: ImageItem[]
}

type ImageItem = {
	src: string
	alt: string
	description: string[]
	width: number
	height: number
}

export const projects: Project[] = [
	{
		key: 'kaizen',
		name: 'Kaizen',
		type: 'Personal Project',
		showcaseLink: '/showcase/kaizen',
		dates: '2023 - 2025',
		description: [
			'A code generator that generates a GraphQL API based on a database schema that you design in a visual editor. It is a browser-based application, but it works by writing files to your file system, so you can view/edit the generated code from your local editor. It comes with built-in support for docker, database migrations, emails, authentication, monorepos and more.',
		],
		technologies: [
			'React',
			'Node.js',
			'Hono',
			'GraphQL',
			'better-auth',
			'Turborepo',
		],
		printHide: true,
		images: [
			{
				src: '/assets/showcase/kaizen/kaizen-erd.png',
				alt: 'Kaizen screenshot',
				description: [
					'A view of the ERD designer in Kaizen. It allows you to create as many tables as you like, and then add fields and relationships between them.',
				],
				width: 3024,
				height: 1989,
			},
			{
				src: '/assets/showcase/kaizen/kaizen-erd-field.png',
				alt: 'Kaizen screenshot',
				description: [
					'A view of the field editor in the ERD designer.',
				],
				width: 3024,
				height: 1989,
			},
			{
				src: '/assets/showcase/kaizen/kaizen-erd-relationship.png',
				alt: 'Kaizen screenshot',
				description: [
					'A view of the relationship editor in the ERD designer.',
				],
				width: 3024,
				height: 1989,
			},
			{
				src: '/assets/showcase/kaizen/kaizen-auth.png',
				alt: 'Kaizen screenshot',
				description: [
					'The authentication settings for this kaizen project.',
				],
				width: 3024,
				height: 1989,
			},
			{
				src: '/assets/showcase/kaizen/kaizen-env.png',
				alt: 'Kaizen screenshot',
				description: [
					'The environment settings for this kaizen project. It allows you to set up email via Resend, S3 file storage credentials, and a Sentry DSN',
				],
				width: 3024,
				height: 1989,
			},
		],
	},
	{
		key: 'xpo-showtime',
		name: 'XPO Showtime',
		type: 'Applicable',
		showcaseLink: '/showcase/xpo-showtime',
		dates: '2024',
		description: [
			'XPO Showtime is a web app designed for an NZ company that runs trade shows. It allows users to easily manage upcoming shows, handle exhibitor and visitor registration and manage printable badges.',
			'It also integrates with a companion app used for networking between exhibitors and attendees.',
			'It was also used as a demo project to showcase the capabilities of the Kaizen back-end code generator I developed at Applicable.',
		],
		technologies: ['React', 'Shadcn ui', 'TypeScript', 'GraphQL', 'MySQL'],
		images: [
			{
				src: '/assets/showcase/xpo-showtime/xpo-shows.png',
				alt: 'XPO Showtime screenshot',
				description: [
					'The "shows" page. It allows users to easily manage upcoming shows, or use the filter to view any previous shows.',
				],
				width: 3024,
				height: 1989,
			},
			{
				src: '/assets/showcase/xpo-showtime/xpo-show.png',
				alt: 'XPO Showtime screenshot',
				description: [
					'The page for a specific show. It allows users to easily manage the show, see the registered visitors and exhibitors at a glance, and do more advanced actions such as rolling over attendees of the show onto future instances.',
				],
				width: 3024,
				height: 1989,
			},
			{
				src: '/assets/showcase/xpo-showtime/xpo-users.png',
				alt: 'XPO Showtime screenshot',
				description: [
					'The page for a list of all visitor users, which is just a more specific version of the "Users" page. It allows users to see at a glance most of the relevant information about each user, with the option to click through to view the user\'s full profile.',
				],
				width: 3024,
				height: 1989,
			},
			{
				src: '/assets/showcase/xpo-showtime/xpo-user.png',
				alt: 'XPO Showtime screenshot',
				description: [
					"A users profile page. Shows a full history of the user's activity, including all of their badges, exhibitor registrations, visitor registrations, and notes.",
				],
				width: 3024,
				height: 1989,
			},
			{
				src: '/assets/showcase/xpo-showtime/xpo-badges.png',
				alt: 'XPO Showtime screenshot',
				description: [
					"The page for a list of all badges. It allows XPO staff to easily see who has and hasn't printed their badges, and to print them themselves at the trade shows themselves.",
				],
				width: 3024,
				height: 1989,
			},
			{
				src: '/assets/showcase/xpo-showtime/xpo-showtypes.png',
				alt: 'XPO Showtime screenshot',
				description: [
					'A glimpse at the admin area of the app. This area allowed the admin to manage the base show types, venues and user flags which are all types of data that rarely, if ever, change.',
					'This screenshot also shows the dark mode styles.',
				],
				width: 3024,
				height: 1989,
			},
		],
	},
	{
		key: 'resolutionary',
		name: 'Resolutionary',
		type: 'Applicable',
		dates: '2021 - 2024',
		description: [
			'Resolutionary is an internal system developed for The ADR Centre in NZ, a company focused on alternative dispute resolution.',
			'The system allowed for the creation of customised legal dispute resolution workflows, each with their own unique set of forms, notifications, and user roles.',
			'I was responsible for developing the front-end of the system, which was built using React.',
		],
		technologies: [
			'React',
			'Tailwind CSS',
			'TypeScript',
			'React Flow',
			'Jotai',
		],
	},
	{
		key: 'icra',
		name: 'ICRA',
		type: 'Applicable',
		showcaseLink: '/showcase/icra',
		dates: '2019 - 2022',
		description: [
			'A web app for managing disputes with the ACC (Accident Compensation Corporation). The app was used by the ICRA team to create and run conferences between lawyers, clients, and ACC representatives.',
		],
		technologies: ['React', 'Tailwind CSS', 'TypeScript'],
		images: [
			{
				src: '/assets/showcase/icra/icra-cases.png',
				alt: 'ICRA screenshot',
				description: [
					'A list of the cases in ICRA. Each case represents a dispute between an "applicant" and ACC.',
				],
				width: 3024,
				height: 1989,
			},
			{
				src: '/assets/showcase/icra/icra-case.png',
				alt: 'ICRA screenshot',
				description: [
					'The view of a single case. This page allowed the ICRA staff to view and edit case details, reviews, documents, and conferences.',
				],
				width: 3024,
				height: 1989,
			},
			{
				src: '/assets/showcase/icra/icra-case-dark.png',
				alt: 'ICRA screenshot',
				description: [
					'A look at the dark theme for ICRA, using the Case page as an example.',
				],
				width: 3024,
				height: 1989,
			},
			{
				src: '/assets/showcase/icra/icra-notifications.png',
				alt: 'ICRA screenshot',
				description: [
					'A glance at the admin area of the app. This specific page is a log of every email sent by the system.',
				],
				width: 3024,
				height: 1989,
			},
		],
	},
	{
		key: 'falcon-grey',
		name: 'Falcon Grey',
		type: 'Applicable',
		dates: '2018 - 2019',
		description: [
			'An Android app for documenting fire stopping work offline. Builders would use the app in the field to document the fire stop work they had done. The app allowed them to add the system used, take photos, and interface with a bluetooth printer to create sticky labels.',
			'There was also a companion web app for viewing the data gathered by the mobile app, and displaying reporting information for the local council.',
		],
		technologies: [
			'Java',
			'Kotlin',
			'Android',
			'SQLite',
			'Laravel',
			'React',
		],
	},
	{
		key: 'jaws',
		name: 'JAWS',
		type: 'Applicable',
		dates: '2017 - 2018',
		description: [
			'An internal web app used by Gleeson & Cox for scheduling and managing truck deliveries and invoicing. The app was established before I joined the company, but I helped with maintenance and new features.',
		],
		technologies: ['Ember', 'Sass', 'jQuery'],
		printHide: true,
	},
]
