// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import styles from './HomeProducts.module.scss'
import { productsData } from './data/productsData'

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

const HomeProducts = () => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.titleMain}>Наша продукция</h1>

			<div className={styles.contentTop}>
				<div className={styles.links}>
					<div className={styles.linkOne}>Твердомеры</div>
					<div className={styles.linkTwo}>Меры твердости</div>
				</div>
				<button className={styles.catalogue}>
					<span>
						<img src='svg/Menu.svg' alt='#' />
					</span>
					В каталог
				</button>
			</div>

			<div className={styles.contentSwiper}>
				<Swiper
					style={{
						'--swiper-navigation-color': '#333',
						'--swiper-pagination-color': '#333'
					}}
					spaceBetween={50}
					slidesPerView={3}
					navigation={{
						nextEl: '.prev',
						prevEl: '.next',
						clickable: true
					}}
					// pagination={{
					// 	clickable: true
					// }}
					modules={[Pagination, Navigation]}
				>
					{productsData.map((item, index) => (
						<SwiperSlide>
							<div key={`_map_${index}`} className={styles.inner}>
								<h1 className={styles.title}>{item.title}</h1>

								<Swiper
									style={{
										'--swiper-navigation-color': '#333',
										'--swiper-pagination-color': '#333'
									}}
									slidesPerView={1}
									navigation={true}
									pagination={{
										clickable: true
									}}
									modules={[Pagination, Navigation]}
								>
									{item.imgData && (
										<div>
											{item.imgData.map((path, index) => (
												<SwiperSlide>
													<img key={index} src={path} alt='#' />
												</SwiperSlide>
											))}
										</div>
									)}
								</Swiper>

								<div className={styles.innerBottom}>
									<div className={styles.prise}>
										<h3>В наличии</h3>
										<div className={styles.number}>
											{item.discount && (
												<div className={styles.discount}>{item.discount}</div>
											)}
											<div className={styles.prise}>{item.prise}</div>
										</div>
									</div>
									<div className={styles.innerSvg}>
										<div className={styles.cart}>
											<span className={styles.cartInner}>
												<svg
													width='28'
													height='28'
													viewBox='0 0 28 28'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
												>
													<path
														fill-rule='evenodd'
														clip-rule='evenodd'
														d='M7.69107 11.7436L5.8335 8.84117L7.7988 7.58337L9.32129 9.96227H21.5372L18.0372 16.9623H10.8223L7.69107 11.7436ZM10.7434 12.2956L12.1434 14.6289H16.5951L17.7618 12.2956H10.7434Z'
														fill='white'
													/>
													<path
														d='M13.8161 19.8789C13.8161 20.8454 13.0326 21.6289 12.0661 21.6289C11.0996 21.6289 10.3161 20.8454 10.3161 19.8789C10.3161 18.9124 11.0996 18.1289 12.0661 18.1289C13.0326 18.1289 13.8161 18.9124 13.8161 19.8789Z'
														fill='white'
													/>
													<path
														d='M16.7328 21.6289C17.6993 21.6289 18.4828 20.8454 18.4828 19.8789C18.4828 18.9124 17.6993 18.1289 16.7328 18.1289C15.7663 18.1289 14.9828 18.9124 14.9828 19.8789C14.9828 20.8454 15.7663 21.6289 16.7328 21.6289Z'
														fill='white'
													/>
												</svg>
											</span>
										</div>
										<div className={styles.arrow}>
											<span>
												<svg
													width='14'
													height='12'
													viewBox='0 0 14 12'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
												>
													<path
														d='M6.92893 1.75735L8.34315 0.34314L14 5.99999L8.34315 11.6568L6.92893 10.2426L10.1716 7L0 7L1.74846e-07 5L10.1716 5L6.92893 1.75735Z'
														fill='white'
													/>
												</svg>
											</span>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<div className={styles.controler}>
					<div className={`${styles.next} next`}>
						<FiArrowLeft fontSize={30} color='black' />
					</div>
					<div className={`${styles.prev} prev`}>
						<FiArrowRight fontSize={30} />
					</div>
				</div>
			</div>
		</div>
	)
}
export default HomeProducts
