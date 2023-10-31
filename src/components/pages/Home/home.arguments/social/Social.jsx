import styles from './Social.module.scss'

const Social = () => {
	const dataSocial = [
		{
			text: 'telegram',
			title: 'tverdomery_met',
			img: 'svg/Telegram.svg',
			link: '',
            bg:'#259cd8'
		},
		{
			text: 'email',
			title: 'mng@tverdomer.ru',
			img: 'svg/sms.svg',
			link: '',
			bgSVg: '#FF3E41',
            bg:'#25292C'
		},
		{
			text: 'whatsapp',
			title: '8 (800) 222-75-26',
			img: 'svg/whatsApp.svg',
			link: '',
			bgSVg: '#25CB63', 
            bg:'#25292C'
		}
	]

	return (
		<>
			{dataSocial.map((item, index) => (
				<div key={`__${index}`} className={styles.wrapper} style={{ backgroundColor: item.bg }}>
					<div className={styles.content}>
						<h3 className={styles.text}>{item.text}</h3>
						<h1 className={styles.title}>{item.title}</h1>
					</div>
					<div className={styles.svg} style={{ backgroundColor: item.bgSVg }}>
						<img src={item.img} alt='Telegram' />
					</div>
				</div>
			))}
		</>
	)
}

export default Social
