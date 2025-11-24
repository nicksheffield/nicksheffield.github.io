'use client'

import { useEffect, useRef } from 'react'

const random = (min: number, max: number, float: boolean = false) => {
	return float
		? Math.random() * (max - min) + min
		: Math.floor(Math.random() * (max - min + 1)) + min
}

type Particle = {
	x: number
	y: number
	s: number
}

export const Starfield = () => {
	const ref = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		const canvas = ref.current
		if (!canvas) return

		canvas.width = window.innerWidth
		canvas.height = window.innerHeight

		const ctx = canvas.getContext('2d')
		if (!ctx) return

		ctx.fillStyle = '#fff'
		ctx.fillRect(50, 50, 100, 100)

		const mouse = { x: 0, y: 0 }
		const m = {}
		const r = 0
		const particles: Particle[] = []

		canvas.width = window.innerWidth * (window.devicePixelRatio || 1)
		canvas.height = window.innerHeight * (window.devicePixelRatio || 1)

		mouse.x = canvas.width / 2
		mouse.y = canvas.height / 2

		for (let i = 0; i < 1000; i++) {
			particles.push({
				x: random(-300, canvas.width + 300),
				y: random(-300, canvas.height + 300),
				s: random(1, 5),
			})
		}

		document.body.addEventListener('mousemove', function (e) {
			mouse.x = e.clientX
			mouse.y = e.clientY
		})

		function render() {
			if (!ctx || !canvas) return

			ctx.clearRect(0, 0, canvas.width, canvas.height)

			for (let i = 0; i < particles.length; i++) {
				const p = particles[i]

				const x = p.x + (canvas.width / 2 - mouse.x) * p.s * 0.1
				const y = p.y + (canvas.height / 2 - mouse.y) * p.s * 0.1

				ctx.fillStyle = '#fff'
				ctx.beginPath()
				ctx.fillRect(x, y, p.s, p.s)
				ctx.closePath()
			}
		}

		// create the animation loop
		;(function animloop() {
			window.requestAnimationFrame(animloop)
			render()
		})()
	}, [])

	return (
		<canvas ref={ref} className="fixed inset-0 -z-20 opacity-20"></canvas>
	)
}
