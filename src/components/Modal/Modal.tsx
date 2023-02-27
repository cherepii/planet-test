import { motion } from 'framer-motion'
import { FC, MouseEvent } from 'react'

import Button from '../Button/Button'

import styles from './Modal.module.scss'

interface IProps {
	handleClose: (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => void
	open: boolean
}

const Modal: FC<IProps> = ({ handleClose, open }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: open ? 1 : 0 }}
			transition={{ duration: 0.3, delay: open ? 2.2 : 0 }}
			className={styles.wrapper}
			onClick={handleClose}
		>
			<div className={styles.content} onClick={(e) => e.stopPropagation()}>
				<motion.h3>metamask extention</motion.h3>
				<motion.p>
					To work with our application, you have to install the{' '}
					<a
						href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=ru"
						target="_blank"
						rel="noreferrer"
					>
						Metamask browser extension
					</a>
				</motion.p>
				<Button onClick={handleClose}>Skip this step</Button>
			</div>
		</motion.div>
	)
}
export default Modal
