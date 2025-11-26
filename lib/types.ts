export type WorkExperience = {
	company: string
	companyLink: string
	role: string
	dates: Date[]
	description: string
}

export type Project = {
	key: string
	name: string
	projectLink?: string
	showcaseLink?: string
	printHide?: boolean
	type?: string
	dates: string
	excerpt: string
	description?: string
	technologies: string[]
	images?: {
		src: string
		alt: string
		description: string[]
		width: number
		height: number
	}[]
}
