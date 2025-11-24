import Link from 'next/link'
import { GithubIcon, MailIcon, PhoneIcon } from 'lucide-react'
import Image from 'next/image'
import { buttonVariants } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ThemeToggle'
import { cn } from '@/lib/utils'

export const Header = () => {
	return (
		<div className="relative flex flex-col gap-6 sm:flex-row sm:items-center print:flex-row-reverse print:items-start">
			<div className="flex shrink-0 flex-row items-start justify-between">
				<div className="from-primary-600 to-primary-900 relative size-[120px] overflow-hidden rounded-[3em] bg-radial from-40% [corner-shape:superellipse(3)] not-supports-corner-shape:rounded-md print:size-[60px]">
					<Image
						src="/assets/images/nick-removebg-preview.png"
						alt="Nick Sheffield"
						width={700}
						height={700}
						className="absolute -top-2 -left-7 aspect-square size-[170px] max-w-[initial] print:-left-3 print:size-[84px]"
					/>
				</div>

				<div className="absolute top-0 right-0 z-10 print:hidden">
					<ThemeToggle />
				</div>
			</div>

			<div className="flex flex-1 flex-col gap-2 print:gap-0">
				<div className="text-3xl font-bold print:text-lg print:font-normal">
					Nick Sheffield
				</div>

				<div className="print:text-muted-foreground text-lg print:text-sm print:opacity-70">
					Web Software Engineer
				</div>

				<div className="mt-1 flex flex-wrap gap-x-6 gap-y-3 print:hidden print:gap-x-4">
					<Link
						href="https://github.com/nicksheffield"
						className={cn(
							buttonVariants({
								variant: 'link',
								size: 'xs',
							}),
							'print:text-muted-foreground print:p-0 print:font-normal print:inset-ring-0!',
						)}
						target="_blank"
						rel="noopener noreferrer"
					>
						<GithubIcon className="size-4" />
						nicksheffield
					</Link>

					<Link
						href="mailto:nick@nicksheffield.com"
						className={cn(
							buttonVariants({
								variant: 'link',
								size: 'xs',
							}),
							'print:text-muted-foreground print:p-0 print:font-normal print:inset-ring-0!',
						)}
					>
						<MailIcon className="size-4" />
						nick@nicksheffield.com
					</Link>

					<Link
						href="tel:+447493894593"
						className={cn(
							buttonVariants({
								variant: 'link',
								size: 'xs',
							}),
							'print:text-muted-foreground print:p-0 print:font-normal print:inset-ring-0!',
						)}
					>
						<PhoneIcon className="size-4" />
						+447 4938 94593
					</Link>
				</div>

				<div className="text-muted-foreground hidden text-sm print:block print:opacity-70">
					nicksheffield.com
				</div>
			</div>
		</div>
	)
}
