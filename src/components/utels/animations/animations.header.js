import gsap from 'gsap'

const headerBottom = isActive => {
	const componentMain = gsap.timeline()
	const componentMain2 = gsap.timeline()
	const componentMain3 = gsap.timeline()
	const componentMain4 = gsap.timeline()

	if (isActive) {
		componentMain.to('.itemLeft', {
			x: -50,
			y: -50,
			opacity: 1,
			filter: 'blur(10px)',
			duration: 1
		})
        componentMain3.to('.itemRight', {
            x: -450,
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 1
          })
	} else {
		componentMain2.to('.itemLeft2', {
			x: 400,
            y: 0,
			opacity: 1,
            filter: 'blur(0px)',
			duration: 1
		})

        componentMain4.to('.itemRight2', {
            x: 0,
            y: -30,
            opacity: 1,
            filter: 'blur(10px)',
            duration: 1
        })
	}
}

export default headerBottom
