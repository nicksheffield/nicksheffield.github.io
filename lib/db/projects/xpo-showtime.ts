import { Project } from '@/lib/types'

const excerpt = `
XPO Showtime is a web app designed for an NZ company that runs trade shows. It allows users to easily manage upcoming shows, handle exhibitor and visitor registration and manage printable badges.

It also integrates with a companion app used for networking between exhibitors and attendees.

It was also used as a demo project to showcase the capabilities of the Kaizen back-end code generator I developed at Applicable.
`

const description = `
XPO Showtime is a web app designed for an NZ company that runs trade shows. It allows users to easily manage upcoming shows, handle exhibitor and visitor registration and manage printable badges.

It also integrates with a companion app used for networking between exhibitors and attendees.

It was also used as a demo project to showcase the capabilities of the Kaizen back-end code generator I developed at Applicable.
`

const images = [
	{
		src: '/assets/work-projects/xpo-showtime/xpo-shows.png',
		alt: 'XPO Showtime screenshot',
		description: [
			'The "shows" page. It allows users to easily manage upcoming shows, or use the filter to view any previous shows.',
		],
		width: 3024,
		height: 1989,
	},
	{
		src: '/assets/work-projects/xpo-showtime/xpo-show.png',
		alt: 'XPO Showtime screenshot',
		description: [
			'The page for a specific show. It allows users to easily manage the show, see the registered visitors and exhibitors at a glance, and do more advanced actions such as rolling over attendees of the show onto future instances.',
		],
		width: 3024,
		height: 1989,
	},
	{
		src: '/assets/work-projects/xpo-showtime/xpo-users.png',
		alt: 'XPO Showtime screenshot',
		description: [
			'The page for a list of all visitor users, which is just a more specific version of the "Users" page. It allows users to see at a glance most of the relevant information about each user, with the option to click through to view the user\'s full profile.',
		],
		width: 3024,
		height: 1989,
	},
	{
		src: '/assets/work-projects/xpo-showtime/xpo-user.png',
		alt: 'XPO Showtime screenshot',
		description: [
			"A users profile page. Shows a full history of the user's activity, including all of their badges, exhibitor registrations, visitor registrations, and notes.",
		],
		width: 3024,
		height: 1989,
	},
	{
		src: '/assets/work-projects/xpo-showtime/xpo-badges.png',
		alt: 'XPO Showtime screenshot',
		description: [
			"The page for a list of all badges. It allows XPO staff to easily see who has and hasn't printed their badges, and to print them themselves at the trade shows themselves.",
		],
		width: 3024,
		height: 1989,
	},
	{
		src: '/assets/work-projects/xpo-showtime/xpo-showtypes.png',
		alt: 'XPO Showtime screenshot',
		description: [
			'A glimpse at the admin area of the app. This area allowed the admin to manage the base show types, venues and user flags which are all types of data that rarely, if ever, change.',
			'This screenshot also shows the dark mode styles.',
		],
		width: 3024,
		height: 1989,
	},
]

export const project: Project = {
	key: 'xpo-showtime',
	name: 'XPO Showtime',
	type: 'Applicable',
	showcaseLink: '/work-projects/xpo-showtime',
	dates: '2024',
	technologies: ['React', 'Shadcn ui', 'TypeScript', 'GraphQL', 'MySQL'],
	excerpt,
	description,
	images,
}
