// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import styles from './HomeProduction.module.scss'
import { productionData } from './data/productionData'

const HomeProduction = () => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Наше производство</h1>

			<div className={styles.content}>
				<Swiper
					style={{
						'--swiper-navigation-color': '#fff',
						'--swiper-pagination-color': '#fff'
					}}
					slidesPerView={1}
					navigation={true}
					modules={[Pagination, Navigation]}
				>
					<div className={styles.images}>
						{productionData.map((item, index) => (
							<SwiperSlide>
								<div key={`__@_${index}`} className={styles.wrapperInner}>
									<div className={styles.inner}>
										<div className={styles.oneImg}>
											<img src={item.img1} alt='#' />
										</div>
										<div className={styles.Group}>
											{item.group.map(inner => (
												<img className={styles.imgInner} src={inner} alt='#' />
											))}
										</div>

										<div className={styles.twoImg}>
											<img src={item.im2} alt='#' />
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</div>
				</Swiper>
			</div>
		</div>
	)
}

export default HomeProduction
