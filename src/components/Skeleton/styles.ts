import styled from 'styled-components'

import { pulse } from '../../globals/animations/animations'

import { ISkeletonProps } from './Skeleton'

export const Wrapper = styled.div<ISkeletonProps>`
	width: ${({ width }) => (width ? width : '100%')};
	height: ${({ height }) => height};
	margin-bottom: ${({ spacing }) => spacing ?? '12px'};
	border-radius: 8px;
	background: #323232;
	animation: ${pulse} 1.3s linear infinite;
`
