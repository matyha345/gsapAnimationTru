import styles from './ComponentTwo.module.scss'
import cn from 'clsx'

const ComponentTwo = ({ isActive, handleButtonClick }) => {
	return (
		<div className={styles.componentTwo}>
			<div className={styles.componentSvg}>
				<img
					className={cn(styles.componentImage, {
						itemRight: isActive,
						itemRight2: !isActive
					})}
					height={500}
					src='svg/homeHeader/solidomers2.svg'
					alt='comp'
				/>
				<button
					className={cn(styles.componentOneText, {
						[styles.visible]: !isActive,
						[styles.hidden]: isActive
					})}
					onClick={handleButtonClick}
				>
					<span>
						<img src='svg/homeHeader/buttonSvg.svg' alt='svg' />
					</span>
					Твердомеры2
				</button>

				<div
					className={cn(styles.componentLabel, {
						[styles.visible]: isActive,
						[styles.hidden]: !isActive
					})}
				>
					<h1 className={styles.componentTitle}>Меры твердости</h1>
					<p className={styles.componentTitleText}>
						<span></span> Проверка подлинности
					</p>
				</div>

				<button
					className={cn(styles.buy, {
						[styles.visible]: isActive,
						[styles.hidden]: !isActive
					})}
				>
					купить
					<span></span>
				</button>
			</div>
		</div>
	)
}

export default ComponentTwo
