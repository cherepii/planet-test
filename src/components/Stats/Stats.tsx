import { motion } from 'framer-motion'
import { FC, memo } from 'react'
import CountUp from 'react-countup'

import styles from './Stats.module.scss'

export interface IStatItem {
	coast: number
	desc: string
}

interface IProps {
	items: IStatItem[]
}

// i use memo HOC to disable re-renders, because Stat`s parent (Home) is controlling state for form
// else, each time when state for form is changing, this component will re-render, but why ?)
const Stats: FC<IProps> = memo(({ items }) => {
	const initial = {
		opacity: 0,
		x: 50,
	}

	const animate = {
		opacity: 1,
		x: 0,
	}

	const transition = {
		duration: 0.5,
		delay: 0.4,
		stiffness: 200,
		mass: 1.2,
	}

	return (
		<motion.div
			initial={initial}
			animate={animate}
			transition={transition}
			className={styles.wrapper}
		>
			<h4>Roadmap stats</h4>
			<div className={styles.body}>
				{items.map((stat) => (
					<div key={stat.coast} className={styles.body__item}>
						<CountUp
							end={Number(stat.coast)}
							formattingFn={(value) => value.toLocaleString('en-US')}
							className={styles.coast}
							duration={3}
						/>
						<span>{stat.desc}</span>
					</div>
				))}
			</div>
		</motion.div>
	)
})
export default Stats
