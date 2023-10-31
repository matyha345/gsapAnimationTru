import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'
import { footerData } from './data/footerData'

const Footer = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<div className={styles.logo}>
						<a href='/'>
							<img src='svg/logo.svg' alt='logoFooter' />
						</a>
					</div>

					<div className={styles.mainLinks}>
						{footerData.map((item, index) => (
							<div key={index}>
								<div className={styles.blogOne}>
									<h1>{item.title}</h1>
									{item.blogOne
										? item.blogOne.map((linkItem, linkIndex) => (
												<Link
													key={linkIndex}
													className={styles.link}
													to={linkItem.link}
												>
													{linkItem.name}
												</Link>
										  ))
										: item.blogTwo.map((linkItem, linkIndex) => (
												<Link
													key={linkIndex}
													className={styles.link}
													to={linkItem.link}
												>
													{linkItem.name}
												</Link>
										  ))}
								</div>
							</div>
						))}
					</div>

					<div className={styles.contact}>
						<a className={styles.tell} href='tell:88002227526'>
							8 (800) 222-75-26
						</a>
						<div className={styles.order}>
							<span>
								<img src='svg/phone.svg' alt='icons' />
							</span>
							Заказать звонок
						</div>
						<div className={styles.email}>
							<a href='mail:info@tverdomer.ru'>
								<span>
									<img src='svg/email.svg' alt='icons' />
								</span>
								info@tverdomer.ru
							</a>
						</div>

						<div className={styles.office}>
							<h1 className={styles.officeTitle}>Офис и производство</h1>
							<p className={styles.officeText}>
								124498, г. Москва, Зеленоград, 4922-й проезд, д. 4с4, Технопарк
								«ЭЛМА».
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.bottom}>
				<div className={styles.bottomInner}>
					<h2>COPYRIGHT © 1991-2023 ООО «ЦЕНТР МЕТ» Все права защищены</h2>
					<h2>Политика конфиденциальности</h2>
				</div>
			</div>
		</>
	)
}

export default Footer
