import { Topo } from '@/components/Topo'

export const Glow = () => {
	return (
		<div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden print:hidden">
			<div className="absolute left-1/2 top-0 -ml-152 h-100 w-325 dark:mask-[linear-gradient(white,transparent)]">
				<div className="absolute inset-0 bg-linear-to-r from-primary-950 to-primary-400 opacity-40 mask-[radial-gradient(farthest-side_at_top,white,transparent)] dark:from-primary-950/30 dark:to-primary-900/30 dark:opacity-100">
					<Topo className="absolute inset-x-0 inset-y-[-100%] w-full mix-blend-overlay" />
					{/* <Ants className="absolute inset-x-0 inset-y-[-100%] w-full mix-blend-overlay" /> */}
				</div>
			</div>
		</div>
	)
}
