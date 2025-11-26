import { WorkExperience } from '@/lib/types'

const description = `
 - Developed and maintained web applications using React.js, React Native, Ember and Java.
 - Led a team of developers on a web application for handling legal disputes.
 - Coached junior developers on best practices and improving their programming skills.
`
// - Created a code generator for speeding up development of full-stack react/node.js projects.
// - Taught myself Java and Kotlin for an Android app for documenting fire stopping work, which was used by two large NZ universities.

export const work: WorkExperience = {
	company: 'Applicable',
	companyLink: 'https://applicable.co.nz/',
	role: 'Project Lead Developer',
	dates: [new Date(2017, 6, 1), new Date(2024, 5, 31)],
	description,
}
