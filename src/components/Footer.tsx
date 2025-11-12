'use client'

import { usePathname } from 'next/navigation'
import { GhostLink } from '@/components/Link'
import { Separator } from '@/components/ui/separator'
import { MailIcon, PhoneIcon, PrinterIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const Footer = () => {
	const pathname = usePathname()

	return (
		<div className="flex flex-col gap-16 pb-16 print:hidden">
			<Separator />

			<div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
				<div className="flex flex-col items-start gap-4">
					<div className="text-sm font-medium text-muted-foreground/50">
						&copy; Nick Sheffield 2025
					</div>
					{pathname === '/' && (
						<Button
							variant="secondary"
							onClick={() => {
								print()
							}}
							className="px-2 py-1 -my-1 h-auto"
						>
							<PrinterIcon />
							Print CV as PDF
						</Button>
					)}
				</div>

				<div className="flex flex-col gap-4 sm:items-end items-start">
					<GhostLink
						href=""
						className="text-sm flex items-center gap-2 bg-transparent"
					>
						<MailIcon className="size-4" />
						nick@nicksheffield.com
					</GhostLink>
					<GhostLink
						href=""
						className="text-sm flex items-center gap-2 bg-transparent"
					>
						<PhoneIcon className="size-4" />
						+447 4938 94593
					</GhostLink>
				</div>
			</div>
		</div>
	)
}
