// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import styles from './HomeProducts.module.scss'
import { productsData } from './data/productsData'

import {FiArrowLeft, FiArrowRight} from 'react-icons/fi'

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
					pagination={{
						clickable: true
					}}
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
										<div className={styles.cart}></div>
										<div className={styles.arrow}></div>
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
