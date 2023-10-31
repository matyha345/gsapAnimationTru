import styles from './Header.module.scss'
import Search from '../../utels/search/Search'
import Basket from '../../utels/basket/Basket'
import Users from '../../utels/users/users'
import HeaderLinks from './header.links/HeaderLinks'

const Header = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<div className={styles.logo}>
					<img src='svg/logo.svg' alt='Logo' />
				</div>

				<HeaderLinks />

				<a className={styles.tel} href='tel:88002227526'>
					8 800 222 75 26
				</a>

				<div className={styles.language}>
					<span>
						<img src='svg/language.svg' alt='language' />
					</span>
					eng
				</div>

				<div className={styles.search}>
					<Search />
					<Basket />
					<Users />
				</div>
			</div>
		</div>
	)
}

export default Header
