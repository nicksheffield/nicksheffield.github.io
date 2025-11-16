/* <div className="flex flex-col gap-4">
	<div className="text-lg font-semibold">About</div>
	<div className="flex flex-col gap-6">
		<p className="text-muted-foreground text-sm leading-relaxed text-pretty">
			I am a seasoned front-end software developer with 16
			years of coding experience, specializing in React.js and
			Node.js. I have a passion for learning that drives me to
			constantly expand my skill set, ensuring I stay at the
			forefront of this rapidly evolving industry.
		</p>
		<p className="text-muted-foreground text-sm leading-relaxed text-pretty">
			I am quick to learn new tools and technologies,
			continuously teaching myself to adapt to modern
			development practices and standards. I have a proactive,
			detail-oriented approach and a deep commitment to
			quality which I bring to every project, always aiming to
			create seamless, user-friendly front-end interfaces.
		</p>
		<p className="text-muted-foreground text-sm leading-relaxed text-pretty">
			I have recently moved to the UK from NZ, and am excited
			to be a part of the UK dev community.
		</p>
	</div>
</div> */

import { Section, SectionBody, SectionHeading } from '@/components/Section'

export const About = () => {
	return (
		<Section className="gap-2">
			<h2 className="hidden text-sm font-medium print:block">About</h2>

			<SectionBody className="gap-6 leading-7 text-pretty print:gap-2 print:text-xs print:leading-normal print:opacity-70">
				<p className="text-muted-foreground">
					<span className="text-foreground font-medium print:font-normal">
						Hi, I'm Nick
					</span>
					. I'm a seasoned front-end software developer with over 16
					years of hands-on coding experience, these days specializing
					in UI development using React.js, Typescript and TailwindCSS
					among other things.{' '}
					{/*I'm driven by a deep curiosity and a
					constant desire to learn — always exploring new tools,
					frameworks, and best practices to stay ahead in a
					fast-moving industry.*/}
				</p>

				{/* <p className="text-muted-foreground">
					In addition to my technical proficiency, I'm also an
					experienced team leader and mentor with experience bringing
					a passion for sharing knowledge, and fostering a
					collaborative, learning-driven environment.
				</p> */}

				<p className="text-muted-foreground">
					Originally from New Zealand, I've recently relocated to the
					UK, bringing with me a strong work ethic, a sharp eye for
					detail, and a passion for crafting clean, intuitive UIs that
					users love. I thrive in agile environments, value
					well-structured code, and take pride in delivering
					high-quality, maintainable solutions.
				</p>
			</SectionBody>
		</Section>
	)
}
