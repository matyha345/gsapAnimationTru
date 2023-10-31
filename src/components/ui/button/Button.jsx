import styles from './Button.module.scss'

const Button = ({ children, customStyles, itemSpan }) => {
	return (
		<button style={customStyles} className={styles.btn}>
			<div className={styles.inner}>
				<span>{itemSpan}</span>
				{children}
			</div>
		</button>
	)
}

export default Button
