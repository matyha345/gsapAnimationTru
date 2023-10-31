import styles from './HomeSensors.module.scss'

const HomeSensors = () => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.titleMain}>Ультразвуковой и динамический датчики</h1>

			<div className={styles.main}>
				<div className={styles.blogOne}>
					<h1 className={styles.title}>Включен в Госреестр СИ</h1>
					<p className={styles.text}>― Действие поверки 1 год</p>
					<p className={styles.text}>― Поставляется поверенным</p>
				</div>
				<div className={styles.img}>
					<img src='images/img55.png' alt='' />
				</div>
				<div className={styles.blogTwo}>
					<h1 className={styles.title}>
						Быстрая калибровка по мерам 1 разряда
					</h1>

					<button  className={styles.btn}>Подробнее</button>
				</div>
			</div>
		</div>
	)
}
export default HomeSensors
