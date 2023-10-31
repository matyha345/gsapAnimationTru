import styles from './HomeInfocentre.module.scss'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { dataInfocenter } from './data/dataInfocenter'

const HomeInfocentre = () => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Инфоцентр</h1>
			<div className={styles.content}>
				<Swiper
					style={{
						'--swiper-navigation-color': '#333',
						'--swiper-pagination-color': '#333'
					}}
					slidesPerView={3}
					navigation={false}
					modules={[Pagination, Navigation]}
				>
					{dataInfocenter.map((item, index) => (
						<SwiperSlide>

							<div key={`__@_${index}`} className={styles.inner}>
								<div className={styles.blog}>
									<img className={styles.images} src={item.img} alt='#' />
									<div className={styles.blogInner}>
										<h3 className={styles.blogTitle}>{item.topic}</h3>
										<p className={styles.text}>{item.title}</p>
										<div className={styles.blogBottom}>
											<div className={styles.bottomText}>{item.timeNumber}</div>
											<div className={styles.disclose}>
												<img src='svg/arrow-right.svg' alt='#' />
											</div>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)
}

export default HomeInfocentre
