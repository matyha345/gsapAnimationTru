import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

const animationsFromToBag = () => {
	gsap.registerPlugin(ScrollTrigger)

	const measurement = gsap.fromTo(
		'._imagesMeasurement_v15rj_74',
		{ opacity: 0, y: 100 },
		{
			opacity: 1,
			duration: 2,
			y: 0
		}
	)
	const sensors = gsap.fromTo(
		'._img_a4bao_43',
		{ opacity: 0, y: 100 },
		{
			opacity: 1,
			duration: 2,
			y: 0
		}
	)
	const blocks = gsap.fromTo(
		'._img_v1gpb_16',
		{ opacity: 0, y: 100 },
		{
			opacity: 1,
			duration: 2,
			y: 0
		}
	)
	const disk = gsap.fromTo(
		'._blogOneDisk_1qw77_66',
		{ rotation: 180 },
		{
			duration: 3,
			rotation: 360
		}
	)
	const wire = gsap.fromTo(
		'._blogOneWire_1qw77_56',
		{ opacity: 0, y: 100 },
		{
			opacity: 1,
			duration: 2,
			y: 0
		}
	)
	const block = gsap.fromTo(
		'._img_1qw77_39',
		{ opacity: 0, y: 100 },
		{
			opacity: 1,
			duration: 2,
			y: 0
		}
	)
	const product = gsap.fromTo(
		'._icon_1e10r_85',
		{ opacity: 0 },
		{
			opacity: 1,
			duration: 2
		}
	)
	const productSocial = gsap.fromTo(
		'._wrapper_tues0_9',
		{ x: -50, y: 50, opacity: 0 },
		{
			x: 0,
            y: 0,
			opacity: 1,
			duration: 2,
			stagger: 1
		}
	)

	setTimeout(() => {
		ScrollTrigger.create({
			trigger: '._imagesMeasurement_v15rj_74',
			animation: measurement,
			start: 'top 100%',
			end: 'bottom 65%',
			scrub: true
		})
		ScrollTrigger.create({
			trigger: '._img_a4bao_43',
			animation: sensors,
			start: 'top 100%',
			end: 'bottom 65%',
			scrub: true
		})
		ScrollTrigger.create({
			trigger: '._img_v1gpb_16',
			animation: blocks,
			start: 'top 100%',
			end: 'bottom 65%',
			scrub: true
		})
		ScrollTrigger.create({
			trigger: '._blogOneDisk_1qw77_66',
			animation: disk,
			start: 'top 100%',
			end: 'bottom 65%',
			scrub: true
		})
		ScrollTrigger.create({
			trigger: '._blogOneWire_1qw77_56',
			animation: wire,
			start: 'top 100%',
			end: 'bottom 75%',
			scrub: true
		})
		ScrollTrigger.create({
			trigger: '._img_1qw77_39',
			animation: block,
			start: 'top 100%',
			end: 'bottom 75%',
			scrub: true
		})
		ScrollTrigger.create({
			trigger: '._icon_1e10r_85',
			animation: product,
			start: 'top 100%',
			end: 'bottom 65%',
			scrub: true
		})
		ScrollTrigger.create({
			trigger: '._wrapper_tues0_9',
			animation: productSocial,
			start: 'top 100%',
			end: 'bottom 75%',
			scrub: true
		})
	}, 100)

	return null
}

export default animationsFromToBag
