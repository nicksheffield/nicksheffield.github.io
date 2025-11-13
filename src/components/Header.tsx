import Link from 'next/link'
import ThemeSwitch from '@/components/ThemeSwitch'
import { GithubIcon, MailIcon, PhoneIcon } from 'lucide-react'
import Image from 'next/image'
import { buttonVariants } from '@/components/ui/button'

export const Header = () => {
	return (
		<div className="flex sm:items-center sm:flex-row flex-col gap-6 print:mt-8">
			<div className="shrink-0 flex flex-row justify-between items-start">
				<div className="w-[100px] h-[100px] overflow-hidden rounded-lg relative">
					<Image
						src="/nick.png"
						alt="Nick Sheffield"
						width={700}
						height={700}
						className="absolute w-[150px] h-[150px] max-w-[initial] aspect-square -top-2 -left-7"
					/>
				</div>

				<div className="sm:fixed top-4 right-4 z-10 flex items-center gap-4">
					{/* <AntsSwitch /> */}
					<ThemeSwitch />
				</div>
			</div>

			<div className="flex-1 flex flex-col gap-2">
				<div className="text-3xl font-bold">Nick Sheffield</div>
				<div className="text-lg">Web Software Engineer</div>

				<div className="flex gap-x-2 mt-1 flex-wrap gap-y-3">
					<Link
						href="https://github.com/nicksheffield"
						className={buttonVariants({
							variant: 'soft',
							size: 'xs',
						})}
						target="_blank"
						rel="noopener noreferrer"
					>
						<GithubIcon className="size-4" />
						nicksheffield
					</Link>

					<Link
						href="mailto:nick@nicksheffield.com"
						className={buttonVariants({
							variant: 'soft',
							size: 'xs',
						})}
					>
						<MailIcon className="size-4" />
						nick@nicksheffield.com
					</Link>

					<Link
						href="tel:+447493894593"
						className={buttonVariants({
							variant: 'soft',
							size: 'xs',
						})}
					>
						<PhoneIcon className="size-4" />
						+447 4938 94593
					</Link>
				</div>
			</div>
		</div>
	)
}
