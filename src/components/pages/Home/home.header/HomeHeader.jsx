import { useEffect, useState } from 'react'
import styles from './HomeHeader.module.scss'
import headerBottom from '../../../utels/animations/animations.header'
import ComponentOne from './componentOne/ComponentOne'
import ComponentTwo from './componentTwo/ComponentTwo'

const HomeHeader = () => {
	const [isActive, setIsActive] = useState(false)

	const handleButtonClick = () => {
		setIsActive(!isActive)
	}

	useEffect(() => {
		headerBottom(isActive)
	}, [isActive])

	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<div className={styles.top}>
					<div className={styles.topLeft}>Точность без компромисcов</div>
					<div className={styles.topRight}>
						<img src='svg/Linked.svg' alt='imgLinked' />
					</div>
				</div>

				<div className={styles.bottom}>
					<ComponentOne isActive={isActive} handleButtonClick={handleButtonClick} />
					<ComponentTwo isActive={isActive} handleButtonClick={handleButtonClick} />
				</div>
			</div>
		</div>
	)
}

export default HomeHeader
