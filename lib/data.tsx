import { ReactNode } from 'react'

const Link = ({ children, href }: { children: ReactNode; href: string }) => {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="hover:text-foreground underline underline-offset-2 transition-colors"
		>
			{children}
		</a>
	)
}

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

// I don't love this, but I think I need to overhaul the whole way I'm handling this data...
type DescriptionObj = { noExerpt: boolean; content: ReactNode }
type Description = ReactNode | DescriptionObj

export const isDescriptionObj = (x: unknown): x is DescriptionObj => {
	return (
		typeof x === 'object' && x !== null && 'noExerpt' in x && 'content' in x
	)
}

export type Project = {
	key: string
	name: string
	projectLink?: string
	showcaseLink?: string
	printHide?: boolean
	type?: string
	dates: string
	description: Description[]
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

export const experiments: Project[] = [
	{
		key: 'kaizen',
		name: 'Kaizen',
		type: 'Personal Project',
		showcaseLink: '/experiments/kaizen',
		projectLink: 'https://kz-app.com',
		dates: '2023 - 2025',
		description: [
			'A code generator that generates a GraphQL API based on a database schema that you design in a visual editor. It is a browser-based application, but it works by writing files to your file system, so you can view/edit the generated code from your local editor. It comes with built-in support for docker, database migrations, emails, authentication, monorepos and more.',
			{
				noExerpt: true,
				content: (
					<>
						Using the FileSystem API to write files to a local
						directory made a lot of sense to me, as it allows the
						user to view/edit the generated code from their local
						editor, and it also fits in with version control.
						Originally I had toyed with using a combination of an{' '}
						<Link href="https://github.com/jvilk/BrowserFS">
							in-memory virtual file system
						</Link>{' '}
						and{' '}
						<Link href="https://isomorphic-git.org/en/">
							isomorphic git
						</Link>{' '}
						to read/write to a remote git repo, but I found that it
						was too much of a headache to get working, and
						ultimately less useful than just writing files.
					</>
				),
			},
		],
		technologies: [
			'React',
			'Node.js',
			'Hono',
			'GraphQL',
			'better-auth',
			'Turborepo',
		],
		images: [
			{
				src: '/assets/experiments/kaizen/kaizen-erd.png',
				alt: 'Kaizen screenshot',
				description: [
					'A view of the ERD designer in Kaizen. It allows you to create as many tables as you like, and then add fields and relationships between them.',
				],
				width: 3024,
				height: 1989,
			},
			{
				src: '/assets/experiments/kaizen/kaizen-erd-field.png',
				alt: 'Kaizen screenshot',
				description: [
					'A view of the field editor in the ERD designer.',
				],
				width: 3024,
				height: 1989,
			},
			{
				src: '/assets/experiments/kaizen/kaizen-erd-relationship.png',
				alt: 'Kaizen screenshot',
				description: [
					'A view of the relationship editor in the ERD designer.',
				],
				width: 3024,
				height: 1989,
			},
			{
				src: '/assets/experiments/kaizen/kaizen-auth.png',
				alt: 'Kaizen screenshot',
				description: [
					'The authentication settings for this kaizen project.',
				],
				width: 3024,
				height: 1989,
			},
			{
				src: '/assets/experiments/kaizen/kaizen-env.png',
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
		key: 'wordhack',
		name: 'Wordhack',
		showcaseLink: '/experiments/wordhack',
		projectLink: 'https://nicksheffield.com/wordhack/',
		dates: '2025',
		type: '',
		description: [
			<>
				A browser game based on the hacking minigame from Fallout 4. The
				game uses a dictionary of 5 letter words derived from the{' '}
				<a
					href="https://www.npmjs.com/package/word-list"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-foreground underline underline-offset-2 transition-colors"
				>
					word-list
				</a>{' '}
				npm package.
			</>,
		],
		technologies: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
		images: [
			{
				src: '/assets/experiments/wordhack/wordhack.png',
				alt: 'Wordhack screenshot',
				description: [
					'You play the game by trying to find the correct word. When you click each a word that is incorrect, you use up a guess and the game tells you how similar the word is to the correct answer. The correctness is determined by same letters being in the same position.',
				],
				width: 1772,
				height: 1262,
			},
			{
				src: '/assets/experiments/wordhack/wordhack-win.png',
				alt: 'Wordhack screenshot',
				description: ['The game ends when you find the correct word.'],
				width: 1772,
				height: 1262,
			},
			{
				src: '/assets/experiments/wordhack/wordhack-hard.png',
				alt: 'Wordhack screenshot',
				description: [
					'Hard mode includes more possible words, and less guesses.',
				],
				width: 1772,
				height: 1262,
			},
			{
				src: '/assets/experiments/wordhack/wordhack-light.png',
				alt: 'Wordhack screenshot',
				description: [
					'The game also has a light mode if you are into that kind of thing.',
				],
				width: 1772,
				height: 1262,
			},
		],
	},
	{
		key: 'elementtd2',
		name: 'Element TD2 Tower Table',
		showcaseLink: '/experiments/elementtd2',
		projectLink: 'https://nicksheffield.com/elementtd2-towertable/',
		dates: '2023',
		type: '',
		description: [
			'An interactive browser version of the "tower table" from the game Element TD 2. It allows you to pre-plan your element picks outside of the game and see how the build will develop over the course of the game.',
			{
				noExerpt: true,
				content:
					'I just made it for a bit of fun, and the logic needed to determine which towers are dependent on each other was more complex than I expected, and pretty fun to figure out. I also added an overlay that explains which towers are dependents, which was a fun SVG challenge.',
			},
		],
		technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'SVG'],
		images: [
			{
				src: '/assets/experiments/elementtd2/elementtd2.png',
				alt: 'Element TD 2 Tower Table screenshot',
				description: [
					'You can select any tower to auto-choose the necessary element picks, or just select those elements to see what they enable. To the top right of the table, you can see the sequence of picks and the level at which they are done.',
				],
				width: 3024,
				height: 1898,
			},
			{
				src: '/assets/experiments/elementtd2/elementtd2-overlay.png',
				alt: 'Element TD 2 Tower Table screenshot',
				description: [
					'If you turn on the overlay, you can see lines that show which towers are dependent on each other. This was originally added for debugging, but I thought it was actually pretty useful. In this screenshot I am hovering the "Impulse" tower.',
				],
				width: 3024,
				height: 1898,
			},
			{
				src: '/assets/experiments/elementtd2/elementtd2-build.png',
				alt: 'Element TD 2 Tower Table screenshot',
				description: [
					'An example of a full game build. I aimed to have the Mushroom tower as well as both Root and Muck, and was able to figure out the right build by using this app.',
				],
				width: 3024,
				height: 1898,
			},
			{
				src: '/assets/experiments/elementtd2/elementtd2-light.png',
				alt: 'Element TD 2 Tower Table screenshot',
				description: [
					'It also has light mode in case you are in a bright room or something.',
				],
				width: 3024,
				height: 1898,
			},
		],
	},
]
