import { useMotionValue, useSpring, useTransform } from 'framer-motion'

export const usePlanetValues = () => {
	const config = {
		type: 'spring',
		duration: 0.4,
		stiffness: 80,
		mass: 0.3,
	}

	const x = useMotionValue(0)
	const y = useMotionValue(0)

	const xInput = [-50, 0, 50]
	const yInput = [-50, 0, 50]
	const scaleOutput = [1.05, 1, 1.05]
	const rotateOutput = [-15, 0, 15]

	const changeX = useTransform(
		x,
		[-180, -90, 0, 90, 180],
		[-90, -45, 0, 45, 90]
	)
	const changeY = useTransform(
		y,
		[-180, -90, 0, 90, 180],
		[-90, -45, 0, 45, 90]
	)

	const scaleX = useTransform(x, xInput, scaleOutput)
	const scaleY = useTransform(y, yInput, scaleOutput)
	const rotateX = useTransform(y, yInput, rotateOutput)
	const rotateY = useTransform(x, xInput, rotateOutput)

	const springX = useSpring(changeX, config)
	const springY = useSpring(changeY, config)
	const springScaleX = useSpring(scaleX, config)
	const springScaleY = useSpring(scaleY, config)
	const springRotateX = useSpring(rotateX, config)
	const springRotateY = useSpring(rotateY, config)

	return {
		springX,
		springY,
		springScaleX,
		springScaleY,
		springRotateX,
		springRotateY,
		x,
		y,
	}
}
