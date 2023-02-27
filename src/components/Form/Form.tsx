import { motion } from 'framer-motion'
import { ChangeEvent, FC, FormEventHandler } from 'react'

import AccountInfo from '../AccountInfo/AccountInfo'
import Button from '../Button/Button'
import Field from '../Field/Field'

import styles from './Form.module.scss'

interface IProps {
	name: string
	email: string
	isSubmitted: boolean
	isLoading: boolean
	setName: (e: ChangeEvent<HTMLInputElement>) => void
	setEmail: (e: ChangeEvent<HTMLInputElement>) => void
	handleSubmit: FormEventHandler<HTMLFormElement>
}

const Form: FC<IProps> = ({
	email,
	name,
	isSubmitted,
	isLoading,
	setEmail,
	setName,
	handleSubmit,
}) => {
	return (
		<motion.form onSubmit={handleSubmit} className={styles.form}>
			{isSubmitted ? (
				<>
					<AccountInfo label="Name" value={name} />
					<AccountInfo label="Email" value={email} />
				</>
			) : (
				<>
					<Field
						value={name}
						onChange={setName}
						label="name"
						placeholder="We will display your name in participation list "
						required
					/>
					<Field
						value={email}
						onChange={setEmail}
						label="email"
						type="email"
						placeholder="We will display your email in participation list "
						delay={0.4}
						required
					/>
				</>
			)}
			<Button disabled={isSubmitted || isLoading} type="submit">
				Get early access
			</Button>
		</motion.form>
	)
}
export default Form
