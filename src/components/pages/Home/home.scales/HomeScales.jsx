import styles from './HomeScales.module.scss'

const HomeScales = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.img}>
				<img src='images/img66.png' alt='#' />
			</div>

			<div className={styles.main}>
				<h1 className={styles.title}>Измерение твёрдости по основным шкалам</h1>
				<p>
					Достигается за счет калибровки только с помощью эталонных{' '}
					<span>мер твердости</span> без использования переводных таблиц,
					которые «зашиты» в программы других твердомеров, увеличивающих
					погрешность измерения.
				</p>

				<div>
					<button>выбрать товары</button>
				</div>
			</div>
		</div>
	)
}

export default HomeScales
