'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ComponentProps } from 'react'

export const BackLink = (props: Omit<ComponentProps<typeof Link>, 'href'>) => {
	const router = useRouter()

	return <Link {...props} href="/" onClick={router.back} />
}
