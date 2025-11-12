import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Header } from '@/components/Header'
import './globals.css'
import { Footer } from '@/components/Footer'

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
		<html lang="en" suppressHydrationWarning>
			<head>
				<link
					rel="icon"
					type="image/svg+xml"
					href="https://fav.farm/😎"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{/* <div className="-z-10 fixed top-0 left-0 w-screen h-screen print:hidden">
						<Topography className="w-full h-full object-cover" />
					</div> */}

					<div className="min-h-screen print:p-0 sm:p-20 sm:pb-0 p-6 font-[family-name:var(--font-geist-sans)]">
						<main className="flex flex-col gap-16 mx-auto max-w-2xl print:max-w-auto">
							<Header />

							{children}

							<Footer />
						</main>
					</div>
				</ThemeProvider>
				<script
					defer
					src="https://umami.nicksheffield.com/script.js"
					data-website-id="e52fd874-c4fb-4e79-9fa0-276e8122548b"
				/>
			</body>
		</html>
	)
}
