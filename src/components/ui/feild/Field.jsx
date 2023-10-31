import styles from './Field.module.scss'
import cn from 'clsx'

const Field = ({ isShowSearch }) => {
	return (
		<div
			className={cn([styles.wrapper], {
				[styles.visible]: isShowSearch,
				[styles.hidden]: !isShowSearch
			})}
		>
			<input placeholder='поиск' className={styles.input} />
		</div>
	)
}

export default Field
