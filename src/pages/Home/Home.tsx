import { motion } from 'framer-motion'
import { FC, FormEvent, useState } from 'react'

import Form from '../../components/Form/Form'
import Modal from '../../components/Modal/Modal'
import Planet from '../../components/Planet/Planet'
import Stats from '../../components/Stats/Stats'
import Table from '../../components/Table/Table'
import TextBlock from '../../components/TextBlock/TextBlock'
import {
	textAnimate,
	textInitial,
	textTransition,
} from '../../globals/animations/transitions'
import { useActions } from '../../hooks/useActions'
import { useAppSelector } from '../../hooks/useAppSelector'
import { IMember } from '../../shared/types'

import styles from './Home.module.scss'
import { statsData } from './mock'

const Home: FC = () => {
	const { isLoading, members } = useAppSelector((state) => state.members)
	const { getMembers, removeItem } = useActions()
	const [showModal, setShowModal] = useState(true)
	const [shouldRenderModal, setShouldRenderModal] = useState(true)

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')

	const handleModalClose = () => {
		setShowModal(false)
		setTimeout(() => setShouldRenderModal(false), 300)
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (!members) {
			const random = Math.floor(Math.random() * 10000)

			const payload: IMember = {
				id: random,
				address: `0xdb23vdfuerputxvvu${random}`,
				username: name,
				email,
				isCustom: true,
			}

			getMembers(payload)
		}
	}

	const handleRemove = () => {
		removeItem()
	}

	return (
		<>
			<section className={styles.main}>
				<div className={styles.main__content}>
					<motion.h1
						initial={textInitial}
						animate={textAnimate}
						transition={textTransition(1.2)}
					>
						Explore Your own planet in <span>our New</span> metaverse
					</motion.h1>
					<div className={styles.planetBlock}>
						<Planet />
					</div>
					<Stats items={statsData} />
				</div>
				<TextBlock
					extraClass={styles.text}
					subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
				/>
			</section>
			<section className={styles.formSection}>
				<div className={styles.left}>
					<TextBlock
						title="Beta test registration"
						subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
					/>
					<Form
						email={email}
						name={name}
						isSubmitted={!!members}
						isLoading={isLoading}
						setEmail={(e) => setEmail(e.target.value)}
						setName={(e) => setName(e.target.value)}
						handleSubmit={handleSubmit}
					/>
				</div>
				<div className={styles.right}>
					<Table
						title="Participation listing (enable only for participants)"
						isLoading={isLoading}
						items={members}
						handleRemove={handleRemove}
					/>
				</div>
			</section>
			{shouldRenderModal && (
				<Modal open={showModal} handleClose={handleModalClose} />
			)}
		</>
	)
}
export default Home
