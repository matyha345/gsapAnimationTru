import styles from './Swiper.module.scss'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

const SwiperElement = ({
	dataMap,
	keyIndex,
	spaceBetweenCol,
	slidesPerViewCol
}) => {
	return (
		<Swiper spaceBetween={spaceBetweenCol} slidesPerView={slidesPerViewCol}>
			{dataMap.map((card, index) => (
				<SwiperSlide key={`${keyIndex}_${index}`}>
					<div className={styles.wrapper}>
						<div className={styles.card}>
							<div to={card.link} className={styles.cardInner}>
								<img src={card.img} alt='images card' />
								<div className={styles.text}>{card.name}</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	)
}
export default SwiperElement
