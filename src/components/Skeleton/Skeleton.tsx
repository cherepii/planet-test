import { FC } from 'react'

import { Wrapper } from './styles'

export interface ISkeletonProps {
	height?: string
	width?: string
	spacing?: string
}

const Skeleton: FC<ISkeletonProps> = ({
	height = '32px',
	spacing = '12px',
	width,
}) => {
	return <Wrapper spacing={spacing} height={height} width={width} />
}
export default Skeleton
