import { ThemeSwitch } from '@/components/ThemeSwitch'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { GithubIcon, MailIcon, PhoneIcon } from 'lucide-react'
import Image from 'next/image'

const workExperience = [
	{
		company: 'Applicable Ltd',
		role: 'Project Lead Developer',
		dates: 'Jul 2017 - Nov 2024',
		descriptions: [
			'Developed and maintained web applications using React.js, React Native, Ember and Java.',
			'Learned Java and Kotlin for an Android app for documenting fire stopping work, which was used by two large NZ universities.',
			'Led a team of developers on a web application for handling legal disputes.',
			'Created a code generator for speeding up development of full-stack react/node.js projects.',
			'Coached junior developers on best practices and improving their programming skills.',
		],
	},
	{
		company: 'Yoobee School of Design',
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
		company: 'The Web Company',
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

const stack = [
	'React',
	'Node.js',
	'TypeScript',
	'JavaScript',
	'GraphQL',
	'Express',
	'Hono',
	'HTML',
	'CSS',
	'Git',
	'Tailwind CSS',
	'Next.js',
	'MySQL',
]

const projects = [
	{
		name: 'Kaizen',
		description:
			'A code generator used for quickly designing database structures, and creating a ready-to-go back end api with full auth and crud.',
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
		description:
			'An internal web app for managing trade show registrations and exhibitor bookings. Used Kaizen to generate the back end.',
		technologies: ['React', 'Shadcn/ui', 'TypeScript', 'GraphQL', 'MySQL'],
	},
	{
		name: 'ICRA',
		description:
			'A web app for managing meetings in the alternative dispute resolution industry.',
		technologies: ['React', 'Tailwind CSS', 'TypeScript'],
	},
	{
		name: 'Resolutionary',
		description:
			'An internal web app for managing multiple legal dispute resolution services.',
		technologies: ['React', 'Tailwind CSS', 'TypeScript'],
	},
	{
		name: 'Falcon Grey',
		description:
			'An Android app for documenting fire stopping work offline.',
		technologies: ['Java', 'Kotlin', 'Android'],
	},
	{
		name: 'JAWS',
		description:
			'An internal web app used by Gleeson & Cox for scheduling and managing truck deliveries and invoicing.',
		technologies: ['Ember', 'Sass'],
	},
]

export default function Home() {
	return (
		<div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<div className="fixed top-4 right-4">
				<ThemeSwitch />
			</div>
			<main className="flex flex-col gap-12 mx-auto max-w-2xl">
				<div className="flex sm:items-center justify-between gap-2">
					<div className="flex flex-col gap-2">
						<div className="text-3xl font-bold">Nick Sheffield</div>
						<div className="text-lg">Web Software Engineer</div>

						<div className="flex gap-x-6 mt-1 flex-wrap gap-y-3">
							<a
								href="https://github.com/nicksheffield"
								className="text-muted-foreground text-sm flex items-center gap-2 hover:text-foreground"
							>
								<GithubIcon className="size-4" />
								nicksheffield
							</a>

							<a
								href="mailto:nick@nicksheffield.com"
								className="text-muted-foreground text-sm flex items-center gap-2 hover:text-foreground"
							>
								<MailIcon className="size-4" />
								nick@nicksheffield.com
							</a>

							<a
								href="tel:+447493894593"
								className="text-muted-foreground text-sm flex items-center gap-2 hover:text-foreground"
							>
								<PhoneIcon className="size-4" />
								+447 4938 94593
							</a>
						</div>
					</div>
					<div className="rounded-lg overflow-hidden shrink-0">
						<Image
							src="/nick.png"
							alt="Nick Sheffield"
							width={100}
							height={100}
						/>
					</div>
				</div>

				<div className="flex flex-col gap-4">
					<div className="text-xl font-bold">About</div>
					<div className="flex flex-col gap-2">
						<p className="text-muted-foreground text-sm">
							I am a seasoned front-end software developer with 16
							years of coding experience, specializing in React.js
							and Node.js. I have a passion for learning that
							drives me to constantly expand my skill set,
							ensuring I stay at the forefront of this rapidly
							evolving industry.
						</p>
						<p className="text-muted-foreground text-sm">
							I am quick to learn new tools and technologies,
							continuously teaching myself to adapt to modern
							development practices and standards. I have a
							proactive, detail-oriented approach and a deep
							commitment to quality and innovation, which I bring
							to every project, always aiming to create seamless,
							user-friendly digital experiences.
						</p>
						<p className="text-muted-foreground text-sm">
							I am from New Zealand, but have recently moved to
							the UK.
						</p>
					</div>
				</div>

				<div className="flex flex-col gap-4">
					<div className="text-xl font-bold">Work Experience</div>
					<div className="flex flex-col gap-6">
						{workExperience.map((experience) => (
							<div
								key={experience.company}
								className="flex flex-col gap-2"
							>
								<div className="flex justify-between sm:flex-row flex-col gap-2">
									<div className="flex flex-col gap-2">
										<div className="">
											{experience.role}
											<span className="text-sm text-muted-foreground">
												{' '}
												@ {experience.company}
											</span>
										</div>
									</div>
									<div className="text-muted-foreground text-sm">
										{experience.dates}
									</div>
								</div>
								<div>
									<ul className="list-disc list-outside pl-4">
										{experience.descriptions.map(
											(description) => (
												<li
													key={description}
													className="text-muted-foreground text-sm"
												>
													{description}
												</li>
											)
										)}
									</ul>
								</div>
								{/* <div className="flex flex-col">
									<p className="text-muted-foreground text-sm">
										{experience.descriptions.join(' ')}
									</p>
								</div> */}
							</div>
						))}
					</div>
				</div>

				<div className="flex flex-col gap-4 break-before-page">
					<div className="text-xl font-bold">Stack</div>

					<div className="text-muted-foreground text-sm">
						Below is a non-exhaustive list of technologies and
						skills I am currently focused on.
					</div>

					<div className="flex flex-col gap-2">
						<div className="flex flex-wrap gap-2">
							{stack.map((technology) => (
								<div
									className="bg-black/5 hover:bg-black/10 transition-all duration-300 rounded-full font-medium flex items-center gap-2 px-3 py-1 text-sm"
									key={technology}
								>
									{/* <ChevronRightIcon className="size-4 shrink-0" /> */}
									{technology}
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-4">
					<div className="text-xl font-bold">Projects</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 -mx-6">
						{projects.map((project) => (
							<Card
								key={project.name}
								className="hover:bg-muted hover:scale-105 transition-all duration-300"
							>
								<CardHeader>
									<CardTitle>{project.name}</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="text-muted-foreground text-sm">
										{project.description}
									</div>
								</CardContent>
								<CardFooter>
									<div className="flex gap-2 flex-wrap">
										{project.technologies.map(
											(technology) => (
												<div
													key={technology}
													className="flex items-center gap-1 py-0.5 px-2 font-medium text-xs rounded-full bg-background hover:bg-black/10 transition-all duration-300"
												>
													{/* <ChevronRightIcon className="size-3" /> */}
													{technology}
												</div>
											)
										)}
									</div>
								</CardFooter>
							</Card>
						))}
					</div>
				</div>
			</main>
		</div>
	)
}
