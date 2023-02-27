import { Config, DAppProvider, Mainnet } from '@usedapp/core'
import { getDefaultProvider } from 'ethers'
import { FC, PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from '../../store/store'
import Layout from '../Layout/Layout'

const config: Config = {
	readOnlyChainId: Mainnet.chainId,
	readOnlyUrls: {
		[Mainnet.chainId]: getDefaultProvider('mainnet'),
	},
}

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Provider store={store}>
			<DAppProvider config={config}>
				<BrowserRouter>
					<Layout>{children}</Layout>
				</BrowserRouter>
			</DAppProvider>
		</Provider>
	)
}
export default MainProvider
