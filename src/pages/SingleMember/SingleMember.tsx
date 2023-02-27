import { FC } from 'react'
import { useParams } from 'react-router-dom'

import { useGetMemberByIdQuery } from '../../api/members'
import AccountInfo from '../../components/AccountInfo/AccountInfo'
import Planet from '../../components/Planet/Planet'

import styles from './SingleMember.module.scss'
import Skeletons from './Skeletons'

const SingleWallet: FC = () => {
	const { id } = useParams()

	const {
		data: member,
		isLoading,
		isFetching,
	} = useGetMemberByIdQuery(id || '1')

	return (
		<section className={styles.wrapper}>
			{isLoading || isFetching || !member ? (
				<Skeletons />
			) : (
				<>
					<h1 className={styles.title}>PErsonal data</h1>
					<AccountInfo label="Name" value={member.username} />
					<AccountInfo label="Email" value={member.email} />
					<AccountInfo label="Wallet" value={member.address} />
				</>
			)}

			<div className={styles.planet}>
				<Planet />
			</div>
		</section>
	)
}
export default SingleWallet
