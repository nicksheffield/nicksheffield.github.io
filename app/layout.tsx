import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Header } from '@/components/cv-sections/Header'
import { Footer } from '@/components/cv-sections/Footer'
import { Glow } from '@/components/Glow'
// import { Inter } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import './globals.css'

// const inter = Inter({
// 	weight: [
// 		'400', // normal
// 		'500', // medium
// 		'600', // semibold
// 		'700', // bold
// 	],
// 	subsets: ['latin'],
// })

export const metadata: Metadata = {
	title: 'Nick Sheffield',
	description: 'Nick Sheffield',
}

type RootLayoutProps = Readonly<{
	children: React.ReactNode
}>

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html
			lang="en"
			className={GeistSans.className}
			suppressHydrationWarning
		>
			<head>
				<link
					rel="icon"
					type="image/svg+xml"
					href="https://fav.farm/😎"
				/>
			</head>

			<body>
				<ThemeProvider>
					<div className="relative min-h-screen p-6 sm:p-20 sm:pb-0 print:p-0">
						<Glow />
						<main className="print:max-w-auto mx-auto flex max-w-2xl flex-col gap-8 print:mx-0 print:gap-8">
							<Header />
							{children}
							<Footer />
						</main>
					</div>
				</ThemeProvider>
			</body>
		</html>
	)
}
