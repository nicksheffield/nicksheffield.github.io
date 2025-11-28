import { Project } from '@/lib/types'

const excerpt = `
An interactive browser version of the "tower table" from the game Element TD 2. It allows you to pre-plan your element picks outside of the game and see how the build will develop over the course of the game.
`

const description = `
An interactive browser version of the "tower table" from the game Element TD 2. It allows you to pre-plan your element picks outside of the game and see how the build will develop over the course of the game.

I just made it for a bit of fun, and the logic needed to determine which towers are dependent on each other was more complex than I expected, and pretty fun to figure out. I also added an overlay that explains which towers are dependents, which was a fun SVG challenge.

![Element TD 2 Tower Table screenshot](/assets/personal-projects/elementtd2/elementtd2.png)

You can select any tower to auto-choose the necessary element picks, or just select those elements to see what they enable. To the top right of the table, you can see the sequence of picks and the level at which they are done.

![Element TD 2 Tower Table screenshot](/assets/personal-projects/elementtd2/elementtd2-overlay.png)

If you turn on the overlay, you can see lines that show which towers are dependent on each other. This was originally added for debugging, but I thought it was actually pretty useful. In this screenshot I am hovering the "Impulse" tower.

![Element TD 2 Tower Table screenshot](/assets/personal-projects/elementtd2/elementtd2-build.png)

An example of a full game build. I aimed to have the Mushroom tower as well as both Root and Muck, and was able to figure out the right build by using this app.

![Element TD 2 Tower Table screenshot](/assets/personal-projects/elementtd2/elementtd2-light.png)

It also has light mode in case you are in a bright room or something.
`

export const project: Project = {
	key: 'elementtd2',
	name: 'Element TD2 Tower Table',
	showcaseLink: '/personal-projects/elementtd2',
	projectLink: 'https://nicksheffield.com/elementtd2-towertable/',
	dates: '2023',
	technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'SVG'],
	excerpt,
	description,
}
