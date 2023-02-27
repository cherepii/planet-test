import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { IMember } from '../../shared/types'
import Close from '../Close/Close'
import Skeleton from '../Skeleton/Skeleton'

import styles from './Table.module.scss'

interface IProps {
	items: IMember[] | null
	title: string
	isLoading: boolean
	handleRemove: () => void
}

const Table: FC<IProps> = ({ items, title, isLoading, handleRemove }) => {
	const { pathname } = useLocation()

	if (isLoading)
		return (
			<div className={styles.skeletons}>
				<Skeleton spacing="24px" height="46px" />
				{[...Array(8)].map((val, idx) => (
					<Skeleton key={idx} />
				))}
			</div>
		)

	if (items && !!items.length)
		return (
			<table className={styles.wrapper}>
				<caption>{title}</caption>
				<thead>
					<tr>
						<td>Name</td>
						<td>Email</td>
						<td>Wallet</td>
					</tr>
				</thead>
				<tbody>
					{items.map((member, idx) => (
						<tr key={idx} className={member.isCustom ? styles.active : ' '}>
							<Link to={member.isCustom ? pathname : `/members/${member.id}`}>
								<td>{member.username}</td>
								<td>{member.email}</td>
								<td>
									{member.address}
									{member.isCustom && <Close handleClick={handleRemove} />}
								</td>
							</Link>
						</tr>
					))}
				</tbody>
			</table>
		)

	return null
}
export default Table
