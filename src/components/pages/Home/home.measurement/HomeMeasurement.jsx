import { useEffect } from 'react'
import styles from './HomeMeasurement.module.scss'
import animationsFromToBag from '../../../utels/animations/animations.FromToBag'

const HomeMeasurement = () => {
	const dataMeasurementOne = [
		{
			text1: 'Роквелла',
			text2: 'HRC'
		},
		{
			text1: 'Бринелля',
			text2: 'HB'
		},
		{
			text1: 'Виккерса',
			text2: 'HV'
		},
		{
			text1: 'Шора',
			text2: 'HSD'
		}
	]
	const dataMeasurementTwo = [
		{
			text1: 'Роквелла',
			text2: 'HRC'
		},
		{
			text1: 'Супер-Роквелла',
			text2: 'HRN / HRT'
		},
		{
			text1: 'Лейба',
			text2: 'HL'
		},
		{
			text1: 'и другие...',
			text2: ''
		}
	]

	useEffect(() => {
		animationsFromToBag()
	},[])
	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<div className={styles.main}>
					<h1 className={styles.titleMain}>
						Достоверное измерение твердости по всем шкалам
					</h1>
					<div className={styles.blogContent}>
						<div className={styles.inner}>
							<h1 className={styles.title}>Основные</h1>
							<div className={styles.innerElement}>
								{dataMeasurementOne.map((item, index) => (
									<div
										key={`_map_${index}`}
										className={styles.innerElementInner}
									>
										<div className={styles.innerLeft}>{item.text1}</div>
										<div className={styles.innerRight}>{item.text2}</div>
									</div>
								))}
							</div>
						</div>
						<div className={styles.inner}>
							<h1 className={styles.title}>Дополнительные</h1>
							<div className={styles.innerElement}>
								{dataMeasurementTwo.map((item, index) => (
									<div
										key={`_map_${index}`}
										className={styles.innerElementInner}
									>
										<div className={styles.innerLeft}>{item.text1}</div>
										{item.text2 && (
											<div className={styles.innerRight}>{item.text2}</div>
										)}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className={styles.images}>
					<img className={styles.imagesMeasurement} src='images/img2.jpg' alt='#' />
				</div>
			</div>
		</div>
	)
}

export default HomeMeasurement
