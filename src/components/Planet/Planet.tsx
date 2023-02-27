import { motion } from 'framer-motion'
import { FC, MouseEvent, memo, useState } from 'react'

import { usePlanetValues } from '../../hooks/usePlanetValues'

import styles from './Planet.module.scss'

interface IProps {
	withYear?: boolean
}

const draw = {
	hidden: { pathLength: 0, opacity: 0 },
	visible: {
		pathLength: 1,
		opacity: 1,
		transition: {
			pathLength: { delay: 0.7, type: 'spring', duration: 2.5, bounce: 0 },
			opacity: { delay: 0.7, duration: 0.4 },
		},
	},
}

// i use memo HOC for disable re-renders, because Planet`s parent is controlling state for form
// else, each time when state for form is changing, this component will re-render, but why ?)
const Planet: FC<IProps> = memo(() => {
	const [hovered, setHovered] = useState(false)

	const {
		springRotateX,
		springRotateY,
		springScaleX,
		springScaleY,
		springX,
		springY,
		x,
		y,
	} = usePlanetValues()

	const handleMouseEnter = () => {
		setHovered(true)
	}

	const handleMouseLeave = () => {
		setHovered(false)
		x.set(0)
		y.set(0)
	}

	const updateMousePosition = (e: MouseEvent<HTMLDivElement>) => {
		const rect = e.currentTarget.getBoundingClientRect()
		const centerX = rect.x + rect.width / 2
		const centerY = rect.y + rect.height / 2
		const distX = e.clientX - centerX
		const distY = e.clientY - centerY

		x.set(distX)
		y.set(distY)
	}

	const initial = {
		opacity: 0,
	}

	const animate = {
		opacity: 1,
	}

	return (
		<motion.div
			className={styles.wrapper}
			initial={{ ...initial, y: -50 }}
			animate={{ ...animate, y: 0 }}
			transition={{ delay: 0.2, duration: 0.8 }}
			onMouseMove={updateMousePosition}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<motion.div
				initial={initial}
				animate={animate}
				transition={{ delay: 0.4, duration: 0.8 }}
				className={`${styles.circle} ${styles.default}`}
			>
				<motion.svg
					width="486"
					height="486"
					viewBox="0 0 486 486"
					initial="hidden"
					animate="visible"
					className={styles.default}
					style={{
						transform: 'rotateZ(-90deg)',
						zIndex: 1,
						display: 'block',
					}}
				>
					<motion.circle
						cx="243"
						cy="243"
						r="243"
						stroke="#e75626"
						fill="none"
						variants={draw}
					/>
				</motion.svg>
				<motion.div
					initial={initial}
					animate={animate}
					transition={{ delay: 0.6, duration: 0.8 }}
					className={`${styles.circle__inner} ${styles.default}`}
				>
					<motion.img
						src="../../assets/planet.png"
						alt="planet"
						className={styles.default}
						draggable={false}
						style={{
							x: springX,
							y: springY,
							scaleX: springScaleX,
							scaleY: springScaleY,
							rotateX: springRotateX,
							rotateY: springRotateY,
						}}
						animate={{ scale: hovered ? 1.05 : 1 }}
					/>
				</motion.div>
			</motion.div>
		</motion.div>
	)
})
export default Planet
