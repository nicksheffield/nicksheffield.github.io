import Link from 'next/link'
import { GithubIcon, MailIcon, PhoneIcon } from 'lucide-react'
import Image from 'next/image'
import { buttonVariants } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ThemeToggle'

export const Header = () => {
	return (
		<div className="flex sm:items-center sm:flex-row flex-col gap-6 print:mt-8 relative">
			<div className="shrink-0 flex flex-row justify-between items-start">
				<div className="w-[120px] h-[120px] overflow-hidden rounded-sm relative bg-radial from-primary-600 from-40% to-primary-900">
					<Image
						src="/nick-removebg-preview.png"
						alt="Nick Sheffield"
						width={700}
						height={700}
						className="absolute w-[170px] h-[170px] max-w-[initial] aspect-square -top-2 -left-7"
					/>
				</div>

				<div className="absolute top-0 right-0 z-10">
					{/* <AntsSwitch /> */}
					{/* <ThemeSwitch /> */}
					<ThemeToggle />
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
