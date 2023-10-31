import { useEffect } from 'react'
import styles from './HomeBlock.module.scss'
import animationsFromToBag from '../../../utels/animations/animations.FromToBag'

const HomeBlocks = () => {
	useEffect(() => {
		animationsFromToBag()
	}, [])

	return (
		<div className={styles.wrapper}>
			<div className={styles.contentImg}>
				<h1 className={styles.title}>Высокая степень защиты корпуса</h1>
				<div className={styles.texts}>
					<p>Влагозащищенность: IP65</p>
					<p>Температура: от -20°C до + 60°C</p>
					<p>Ударопрочность: IK06</p>
				</div>

				<div className={styles.img}>
					<img src='images/img77.png' alt='#' />
				</div>
			</div>
			<div className={styles.mainContent}>
				<div className={styles.blogOne}>
					<div className={styles.title}>
						Удобная передача и обработка данных на компьютере через
						высокоскоростной USB порт и специальное программное обеспечение
					</div>
					<span className={styles.blogOneDisk}>
						<img src='images/disk.png' alt='#' />
					</span>
					<span className={styles.blogOneWire}>
						<img src='images/profod.png' alt='#' />
					</span>
				</div>
				<div className={styles.blogTwo}>
					<div className={styles.more}>
						подробнее <span></span>
					</div>
					<div className={styles.titleBig}>
						<h1>3</h1>
						<h2>года гарантии</h2>
					</div>
				</div>
			</div>
		</div>
	)
}
export default HomeBlocks
