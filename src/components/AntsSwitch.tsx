'use client'

import { Button } from '@/components/ui/button'
import { BugIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

export const AntsSwitch = () => {
	const [mounted, setMounted] = useState(false)

	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	return (
		<Button
			variant="secondary"
			size="icon"
			className="print:hidden"
			onClick={() => {
				// document.body.dataset.ants =
				// 	document.body.dataset.ants === 'true' ? 'false' : 'true'
				document.body.classList.toggle('[&_#ants]:hidden')
			}}
		>
			<BugIcon className="size-4" />
			<span className="sr-only">Toggle Ants</span>
		</Button>
	)
}
