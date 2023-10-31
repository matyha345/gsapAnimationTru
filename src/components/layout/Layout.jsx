import Footer from './footer/Footer'
import Header from './header/Header'
import styles from './Layout.module.scss'

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<div className={styles.wrapper}>{children}</div>
			<Footer />
		</>
	)
}

export default Layout
