import { FC } from 'react'

import styles from './AccountInfo.module.scss'

interface IProps {
	label: string
	value: string
}

const AccountInfo: FC<IProps> = ({ label, value }) => {
	return (
		<div className={styles.wrapper}>
			<p>{label}</p>
			<h5>{value}</h5>
		</div>
	)
}
export default AccountInfo
