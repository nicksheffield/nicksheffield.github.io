import { Separator } from '@/components/ui/separator'
import { DownloadIcon, GithubIcon, MailIcon, PhoneIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export const Footer = () => {
	return (
		<div className="flex flex-col gap-16 pb-16 print:hidden">
			<Separator />

			<div className="flex flex-col items-start justify-between gap-4 sm:flex-row">
				<div className="flex flex-col items-start gap-y-2">
					<a
						className={buttonVariants({ variant: 'link' })}
						href="/nick-sheffield-resume.pdf"
						download
					>
						<DownloadIcon />
						Download Resume
					</a>

					<Link
						href="https://github.com/nicksheffield"
						className={cn(
							buttonVariants({
								variant: 'link',
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
							}),
							'print:text-muted-foreground print:p-0 print:font-normal print:inset-ring-0!',
						)}
					>
						<PhoneIcon className="size-4" />
						+447 4938 94593
					</Link>
				</div>

				<div className="text-muted-foreground/50 text-sm font-medium">
					&copy; Nick Sheffield 2025
				</div>
			</div>
		</div>
	)
}
