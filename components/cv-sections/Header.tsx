import { ThemeToggle } from '@/components/ThemeToggle'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { MailIcon, PhoneIcon } from 'lucide-react'
import { GithubIcon } from '@/components/GithubIcon'
import { Photo } from '@/components/Photo'
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip'

export const Header = () => {
	return (
		<>
			{/* Device view */}
			<div className="relative flex shrink-0 flex-row items-center gap-6 print:hidden">
				<Photo />

				<div className="flex flex-1 flex-col gap-2">
					<div className="text-2xl font-bold sm:text-3xl">
						Nick Sheffield
					</div>

					<div className="sm:text-lg">Web Software Engineer</div>

					<div className="flex items-center gap-2 sm:gap-4 print:hidden">
						<Tooltip>
							<TooltipTrigger>
								<Link
									href="https://github.com/nicksheffield"
									className={cn(
										buttonVariants({
											variant: 'ghost',
											size: 'icon',
										}),
										'bg-foreground/5',
									)}
									target="_blank"
									rel="noopener noreferrer"
								>
									<GithubIcon className="size-4" />
								</Link>
							</TooltipTrigger>

							<TooltipContent side="bottom">
								github.com/nicksheffield
							</TooltipContent>
						</Tooltip>

						<Tooltip>
							<TooltipTrigger>
								<Link
									href="mailto:nick@nicksheffield.com"
									className={cn(
										buttonVariants({
											variant: 'ghost',
											size: 'icon',
										}),
										'bg-foreground/5',
									)}
								>
									<MailIcon className="size-4" />
								</Link>
							</TooltipTrigger>

							<TooltipContent side="bottom">
								nick@nicksheffield.com
							</TooltipContent>
						</Tooltip>

						<Tooltip>
							<TooltipTrigger>
								<Link
									href="tel:+447493894593"
									className={cn(
										buttonVariants({
											variant: 'ghost',
											size: 'icon',
										}),
										'bg-foreground/5',
									)}
								>
									<PhoneIcon className="size-4" />
								</Link>
							</TooltipTrigger>
							<TooltipContent side="bottom">
								+447 4938 94593
							</TooltipContent>
						</Tooltip>

						<span className="bg-foreground/20 mx-2 h-1 w-1 rounded-full sm:hidden print:hidden" />

						<ThemeToggle className="bg-foreground/5 top-0 right-0 sm:absolute" />
					</div>
				</div>
			</div>

			{/* Print view */}
			<div className="hidden flex-row print:flex">
				<div className="flex flex-1 flex-col gap-2 print:gap-0">
					<div className="hidden text-3xl font-bold sm:block print:text-lg print:font-normal">
						Nick Sheffield
					</div>

					<div className="print:text-muted-foreground hidden text-lg sm:block print:text-sm print:opacity-70">
						Web Software Engineer
					</div>

					<div className="text-muted-foreground hidden text-sm print:block print:opacity-70">
						nicksheffield.com
					</div>
				</div>

				<Photo />
			</div>
		</>
	)
}
