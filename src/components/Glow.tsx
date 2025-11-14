import { Topo } from '@/components/Topo'

export const Glow = () => {
	return (
		<div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden print:hidden">
			<div className="absolute left-1/2 top-0 -ml-152 h-100 w-325 dark:mask-[linear-gradient(white,transparent)]">
				<div className="absolute inset-0 bg-linear-to-r mask-[radial-gradient(farthest-side_at_top,white,transparent)] from-primary-950/30 to-primary-900/30 opacity-25 dark:opacity-100">
					<Topo className="absolute inset-x-0 -inset-y-full w-full mix-blend-overlay" />
				</div>
			</div>
		</div>
	)
}
