import { Link } from 'react-router-dom'
import { pagesLink } from '../data/pagesLink'
import styles from './HeaderLinks.module.scss'
import cn from 'clsx'
import { useOnClickOutside } from '../../../hooks/useOnClickOutside'
import { useState } from 'react'

const HeaderLinks = () => {
	const { ref, isShowSubMenu, setIsShowSubMenu } = useOnClickOutside(false)
	const [isSubMenuOpen, setIsSubMenuOpen] = useState(false) // Новое состояние

	const handleToggleSubMenu = () => {
		setIsSubMenuOpen(!isSubMenuOpen)
	}

	return (
		<div className={styles.item}>
			{pagesLink.map((path, index) => (
				<div className={styles.list} key={`_hed_${index}`}>
					<Link
						className={styles.link}
						to={path.link}
						onClick={() => {
							if (path.name === 'продукция') {
								handleToggleSubMenu()
							} else {
								setIsSubMenuOpen(false)
							}
						}}
					>
						{path.name}

						{path.subMenu && (
							<ul
								ref={ref}
								className={cn(styles.subMenu, {
									[styles.visible]: isSubMenuOpen && path.name === 'продукция',
									[styles.hidden]: !isSubMenuOpen || path.name !== 'продукция'
								})}
							>
								<div className={styles.subMenuContent}>
									{path.subMenu.map((subItem, subIndex) => (
										<li className={styles.subMenuLinks} key={`sub_${subIndex}`}>
											<Link className={styles.subMenuLink} to={subItem.link}>
												{subItem.nameInner}
											</Link>
										</li>
									))}
								</div>
							</ul>
						)}
					</Link>
				</div>
			))}
		</div>
	)
}

export default HeaderLinks