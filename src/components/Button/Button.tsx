import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

import styles from './Button.module.scss'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	extraClass?: string
}

const Button: FC<PropsWithChildren<IProps>> = ({
	children,
	extraClass = '',
	...rest
}) => {
	return (
		<button className={`${styles.button} ${extraClass}`} {...rest}>
			{children}
		</button>
	)
}
export default Button
