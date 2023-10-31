import Button from '../../../ui/button/Button'
import styles from './HomeArguments.module.scss'
import Social from './social/Social'

const HomeArgument = () => {
	const iconsData = [
		'svg/company/lada.svg',
		'svg/company/bosch.svg',
		'svg/company/kamaz.svg',
		'svg/company/rot-fro.svg',
		'svg/company/rzd.svg',
		'svg/company/frame.svg',
		'svg/company/bm3.svg',
		'svg/company/volkswagen.svg',
		'svg/company/severstal.svg'
	]
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Твердые аргументы</h1>

			<div className={styles.content}>
				<div className={styles.contentLeft}>
					<div className={styles.contentTitle}>
						<h1>24</h1>
						<div>
							года <br /> на рынке
						</div>
					</div>

					<p className={styles.text}>
						Центр «МЕТ» - разработчик высокоточных портативных твердомеров и мер
						твердости. Портативные твердомеры МЕТ позволяют осуществлять
						достоверный контроль твердости изделий из металла. Меры твердости
						МЕТ – средства измерения, позволяющие осуществлять поверку и
						калибровку твердомеров.
					</p>

					<div className={styles.buttons}>
						<Button
							children={'Сертификаты'}
							itemSpan={<img src='svg/Award.svg' alt='award' />}
							customStyles={{ padding: '12px 42px' }}
						/>
						<Button
							children={'Награды'}
							itemSpan={<img src='svg/Comment.svg' alt='Comment' />}
							customStyles={{ padding: '12px 60px', marginLeft: '15px' }}
						/>
						<div className={styles.buttonsBottom}>
							<Button
								children={'Отзывы'}
								itemSpan={<img src='svg/commentS.svg' alt='Comment' />}
								customStyles={{ width: '100%', padding: '12px 0' }}
							/>
						</div>
					</div>
				</div>
				<div className={styles.contentRight}>
					<h1 className={styles.contentTitle}>Нам доверяют</h1>

					<div className={styles.icons}>
						{iconsData.map(item => (
							<div className={styles.icon} key={item}>
								<img src={item} alt={item} />
							</div>
						))}
					</div>

					<div className={styles.btn}>Все клиенты</div>
				</div>
			</div>
			<div className={styles.socialBottom}>
				<Social />
			</div>
		</div>
	)
}

export default HomeArgument
