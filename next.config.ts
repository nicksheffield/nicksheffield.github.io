import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	output: 'export', // <=== enables static exports
	distDir: 'out',
	reactStrictMode: true,
}

export default nextConfig
