import styles from './Basket.module.scss'

import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import BasketInner from './basket.inner/BasketInner'
import cn from 'clsx'


const Basket = () => {

    const {ref, isShowBasket, setIsShowBasket} = useOnClickOutside(false)

    const handleToggleBasket = () => {
		setIsShowBasket(!isShowBasket)
	}

	return (
		<button className={styles.basket} ref={ref}>
			<span onClick={handleToggleBasket}>
				<img src='svg/basket.svg' alt='basket' />
			</span>

            <div className={cn(styles.content, {
                [styles.visible]: isShowBasket,
                [styles.hidden]: !isShowBasket
            })}>
                <BasketInner />
            </div>

		</button>
	)
}

export default Basket
