import { WorkExperience } from '@/lib/types'

const description = `
 - Taught students studying the Diploma of Web Development.
 - Continually improved the curriculum to keep up with modern web development practices.
 - Taught JavaScript, HTML, CSS, PHP, MySQL, and Git.
`

export const work: WorkExperience = {
	company: 'Yoobee',
	companyLink: 'https://www.yoobee.ac.nz/',
	role: 'Lecturer',
	dates: [new Date(2012, 0, 1), new Date(2017, 6, 1)],
	description,
}
