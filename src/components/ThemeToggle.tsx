'use client'

import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

function SunIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
	return (
		<svg
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			{...props}
		>
			<path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
			<path
				d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
				fill="none"
			/>
		</svg>
	)
}

function MoonIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
			<path
				d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

export function ThemeToggle() {
	const { resolvedTheme, setTheme } = useTheme()
	const otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	return (
		<Button
			type="button"
			variant="secondary"
			size="icon"
			aria-label={
				mounted ? `Switch to ${otherTheme} theme` : 'Toggle theme'
			}
			onClick={() => setTheme(otherTheme)}
			className="flex flex-col relative justify-start items-stretch gap-0 overflow-hidden"
		>
			<div className="size-9 shrink-0 flex items-center justify-center transition-transform duration-200 translate-y-0 dark:-translate-y-full">
				<SunIcon className="size-5! stroke-foreground fill-none" />
			</div>

			<div className="size-9 shrink-0 flex items-center justify-center transition-transform duration-200 translate-y-0 dark:-translate-y-full">
				<MoonIcon className="size-5! stroke-foreground fill-foreground/20" />
			</div>
		</Button>
	)
}
