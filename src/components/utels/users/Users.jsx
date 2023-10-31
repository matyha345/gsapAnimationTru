import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import UsersInner from './Users.inner/UsersInner'
import styles from './Users.module.scss'
import cn from 'clsx'

const Users = () => {
	const { ref ,isShowUsers, setIsShowUsers } = useOnClickOutside(false)

	const handleToggleUsers = () => {
		setIsShowUsers(!isShowUsers)
	}

	return (
		<button className={styles.user} ref={ref}>
			<span onClick={handleToggleUsers}>
				<img src='svg/user.svg' alt='user' />
			</span>

			<div
				className={cn(styles.inner, {
					[styles.visible]: isShowUsers,
					[styles.hidden]: !isShowUsers
				})}
			>
				<UsersInner />
			</div>
		</button>
	)
}

export default Users
