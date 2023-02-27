import { FC } from 'react'

import Skeleton from '../../components/Skeleton/Skeleton'

const Skeletons: FC = () => {
	return (
		<div>
			<Skeleton height="58px" spacing="48px" width="230px" />
			<Skeleton height="71px" spacing="22px" width="480px" />
			<Skeleton height="71px" spacing="22px" width="480px" />
			<Skeleton height="71px" spacing="0" width="480px" />
		</div>
	)
}
export default Skeletons
