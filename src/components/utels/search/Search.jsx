import React from 'react'
import Field from '../../ui/feild/Field'
import styles from './Search.module.scss'
import cn from 'clsx'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'

const Search = () => {
	const { ref, isShowSearch, setIsShowSearch } = useOnClickOutside(false)

	const handleToggleSearch = () => {
		setIsShowSearch(!isShowSearch)
	}

	return (
		<div className={styles.from} ref={ref}>
			<span onClick={handleToggleSearch}>
				<img src='svg/search.svg' alt='search' />
			</span>
			<div
				className={cn(styles.inner, {
					[styles.visible]: isShowSearch,
					[styles.hidden]: !isShowSearch
				})}
			>
				<Field />
			</div>
		</div>
	)
}

export default Search
