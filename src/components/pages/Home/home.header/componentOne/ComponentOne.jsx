import styles from './ComponentOne.module.scss'
import cn from 'clsx'

const ComponentOne = ({ isActive, handleButtonClick }) => {
	return (
		<div className={styles.componentOne}>
			<div className={styles.componentSvg}>
				<img
					className={cn(styles.componentImages, {
						itemLeft: isActive,
						itemLeft2: !isActive
					})}
					height={500}
					src='svg/homeHeader/solidomers.svg'
					alt='comp'
				/>

				<button
					className={cn(styles.componentOneText, {
						[styles.visible]: isActive,
						[styles.hidden]: !isActive
					})}
					onClick={handleButtonClick}
				>
					Твердомеры
					<span>
						<img src='svg/homeHeader/buttonSvg.svg' alt='svg' />
					</span>
				</button>

				<div
					className={cn(styles.componentLabel, {
						[styles.visible]: !isActive,
						[styles.hidden]: isActive
					})}
				>
					<h1 className={styles.componentTitle}>Твердомеры</h1>
					<p className={styles.componentTitleText}>
						<span></span> Как выбрать
					</p>
				</div>

				<div
					className={cn(styles.buy, {
						[styles.visible]: !isActive,
						[styles.hidden]: isActive
					})}
				>
					купить
					<span></span>
				</div>
			</div>
		</div>
	)
}

export default ComponentOne
