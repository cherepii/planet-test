import { motion } from 'framer-motion'
import { FC, InputHTMLAttributes } from 'react'

import { textTransition } from '../../globals/animations/transitions'

import styles from './Field.module.scss'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
	extraClass?: string
	label: string
	delay?: number
}

const Field: FC<IProps> = ({
	extraClass = '',
	label,
	delay = 0.2,
	...rest
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, x: -200 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={textTransition(delay, 70, 0.3, 1.3)}
			className={`${styles.field} ${extraClass}`}
		>
			<label htmlFor={label}>{label}</label>
			<input name={label} {...rest} />
		</motion.div>
	)
}
export default Field
