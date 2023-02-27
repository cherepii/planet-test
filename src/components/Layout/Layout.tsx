import { useEthers } from '@usedapp/core'
import { FC, PropsWithChildren } from 'react'

import Header from '../Header/Header'

import styles from './Layout.module.scss'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	const { deactivate } = useEthers()

	return (
		<div className={styles.wrapper}>
			<Header disconnect={deactivate} />
			{children}
		</div>
	)
}

export default Layout
