import { Project } from '@/lib/types'

const excerpt = `
A browser game based on the hacking minigame from Fallout 4. The game uses a dictionary of 5 letter words derived from the [word-list](https://www.npmjs.com/package/word-list) npm package.
`

const description = `
A browser game based on the hacking minigame from Fallout 4. The game uses a dictionary of 5 letter words derived from the [word-list](https://www.npmjs.com/package/word-list) npm package.

![Wordhack screenshot](/assets/personal-projects/wordhack/wordhack.png)

You play the game by trying to find the correct word. When you click each a word that is incorrect, you use up a guess and the game tells you how similar the word is to the correct answer. The correctness is determined by same letters being in the same position.

![Wordhack screenshot](/assets/personal-projects/wordhack/wordhack-win.png)

The game ends when you find the correct word.

![Wordhack screenshot](/assets/personal-projects/wordhack/wordhack-hard.png)

Hard mode includes more possible words, and less guesses.

![Wordhack screenshot](/assets/personal-projects/wordhack/wordhack-light.png)

The game also has a light mode if you are into that kind of thing.
`

export const project: Project = {
	key: 'wordhack',
	name: 'Wordhack',
	showcaseLink: '/personal-projects/wordhack',
	projectLink: 'https://nicksheffield.com/wordhack/',
	dates: '2025',
	technologies: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
	excerpt,
	description,
}
