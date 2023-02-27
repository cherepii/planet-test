export const textTransition = (
	delay = 0.8,
	stiffness = 200,
	duration = 0.8,
	mass = 1
) => ({
	type: 'spring',
	duration,
	delay,
	stiffness,
	mass,
})

export const textInitial = { opacity: 0, y: 30 }

export const textAnimate = { opacity: 1, y: 0 }
