import { useEthers } from '@usedapp/core'
import { motion } from 'framer-motion'
import { FC } from 'react'
import { Link } from 'react-router-dom'

import Button from '../Button/Button'

import styles from './Header.module.scss'

interface IProps {
	disconnect: () => void
}

const Header: FC<IProps> = ({ disconnect }) => {
	const initial = {
		opacity: 0,
		y: -50,
	}

	const animate = {
		opacity: 1,
		y: 0,
	}

	const transition = {
		duration: 0.3,
		delay: 0.2,
		stiffness: 120,
		mass: 1,
	}

	const { activateBrowserWallet, account } = useEthers()

	return (
		<motion.header
			initial={initial}
			whileInView={animate}
			transition={transition}
			className={styles.header}
		>
			<Link to="/" className={styles.logo}>
				LOGO
			</Link>

			{account ? (
				<motion.p
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0, duration: 0.2 }}
					onClick={disconnect}
					className={styles.wallet}
				>
					{account}
				</motion.p>
			) : (
				<Button onClick={activateBrowserWallet}>Connect metamask</Button>
			)}
		</motion.header>
	)
}
export default Header
