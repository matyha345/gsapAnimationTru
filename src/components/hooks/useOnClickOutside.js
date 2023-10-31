import { useEffect, useRef, useState } from 'react'

export const useOnClickOutside = isInitialValue => {
	const [isShowSearch, setIsShowSearch] = useState(isInitialValue)
	const [isShowBasket, setIsShowBasket] = useState(isInitialValue)
	const [isShowUsers, setIsShowUsers] = useState(isInitialValue)
	const [isShowSubMenu, setIsShowSubMenu] = useState(isInitialValue)
	const ref = useRef(null)

	const handleClickOutside = event => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsShowSearch(false)
			setIsShowBasket(false)
			setIsShowUsers(false)
			setIsShowSubMenu(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)

		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	})

	return {
		ref,
		isShowSearch,
		setIsShowSearch,
		isShowBasket,
		setIsShowBasket,
		isShowUsers,
		setIsShowUsers,
		isShowSubMenu,
		setIsShowSubMenu
	}
}
