import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Glow } from '@/components/Glow'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: "Nick Sheffield's CV",
	description: "Nick Sheffield's CV",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={inter.className} suppressHydrationWarning>
			<head>
				<link
					rel="icon"
					type="image/svg+xml"
					href="https://fav.farm/😎"
				/>
			</head>

			<body>
				<ThemeProvider>
					<div className="min-h-screen print:p-0 sm:p-20 sm:pb-0 p-6 relative">
						<Glow />

						<main className="flex flex-col gap-24 print:gap-8 mx-auto max-w-2xl print:max-w-auto">
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
