import { Separator } from '@/components/ui/separator'
import { DownloadIcon, FileUserIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'

export const Footer = () => {
	return (
		<div className="flex flex-col gap-16 pb-16 print:hidden">
			<Separator />

			<div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
				<div className="text-muted-foreground/50 text-sm font-medium">
					&copy; Nick Sheffield 2025
				</div>

				<a
					className={buttonVariants({ variant: 'link' })}
					// href="https://github.com/nicksheffield/nicksheffield.github.io"
					href="/nick-sheffield-resume.pdf"
					download
				>
					<DownloadIcon />
					Download Resume
				</a>
			</div>
		</div>
	)
}
