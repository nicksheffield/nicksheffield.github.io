import { Project } from '@/lib/types'

const excerpt = `
A browser game based on the hacking minigame from Fallout 4. The game uses a dictionary of 5 letter words derived from the [word-list](https://www.npmjs.com/package/word-list) npm package.
`

const description = `
A browser game based on the hacking minigame from Fallout 4. The game uses a dictionary of 5 letter words derived from the [word-list](https://www.npmjs.com/package/word-list) npm package.
`

const images = [
	{
		src: '/assets/personal-projects/wordhack/wordhack.png',
		alt: 'Wordhack screenshot',
		description: [
			'You play the game by trying to find the correct word. When you click each a word that is incorrect, you use up a guess and the game tells you how similar the word is to the correct answer. The correctness is determined by same letters being in the same position.',
		],
		width: 1772,
		height: 1262,
	},
	{
		src: '/assets/personal-projects/wordhack/wordhack-win.png',
		alt: 'Wordhack screenshot',
		description: ['The game ends when you find the correct word.'],
		width: 1772,
		height: 1262,
	},
	{
		src: '/assets/personal-projects/wordhack/wordhack-hard.png',
		alt: 'Wordhack screenshot',
		description: [
			'Hard mode includes more possible words, and less guesses.',
		],
		width: 1772,
		height: 1262,
	},
	{
		src: '/assets/personal-projects/wordhack/wordhack-light.png',
		alt: 'Wordhack screenshot',
		description: [
			'The game also has a light mode if you are into that kind of thing.',
		],
		width: 1772,
		height: 1262,
	},
]

export const project: Project = {
	key: 'wordhack',
	name: 'Wordhack',
	showcaseLink: '/personal-projects/wordhack',
	projectLink: 'https://nicksheffield.com/wordhack/',
	dates: '2025',
	technologies: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
	excerpt,
	description,
	images,
}
