'use client'

import { usePathname } from 'next/navigation'
import { Separator } from '@/components/ui/separator'
import { PrinterIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const Footer = () => {
	const pathname = usePathname()

	return (
		<div className="flex flex-col gap-16 pb-16 print:hidden">
			<Separator />

			<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
				<div className="text-sm font-medium text-muted-foreground/50">
					&copy; Nick Sheffield 2025
				</div>
				{pathname === '/' && (
					<Button
						variant="secondary"
						onClick={() => {
							print()
						}}
					>
						<PrinterIcon />
						Print resume as PDF
					</Button>
				)}
			</div>
		</div>
	)
}
