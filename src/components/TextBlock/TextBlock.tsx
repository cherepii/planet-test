import { motion } from 'framer-motion'
import { FC, memo } from 'react'

import {
	textAnimate,
	textInitial,
	textTransition,
} from '../../globals/animations/transitions'

import styles from './TextBlock.module.scss'

interface IProps {
	title?: string
	subTitle: string
	extraClass?: string
}

// i use memo HOC for disable re-renders, because TextBlock`s parent (Home) is controlling state for form
// else, each time when state for form is changing, this component will re-render, but why ?)
const TextBlock: FC<IProps> = memo(({ subTitle, title, extraClass = '' }) => {
	return (
		<motion.div
			initial={textInitial}
			animate={textAnimate}
			transition={textTransition(undefined, 50)}
			className={`${styles.wrapper} ${extraClass}`}
		>
			{title && <h3>{title}</h3>}
			<p>{subTitle}</p>
		</motion.div>
	)
})
export default TextBlock
