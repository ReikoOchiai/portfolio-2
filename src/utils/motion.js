export const textVariant = (delay) => {
	return {
		hidden: {
			y: -50,
			opacity: 0,
		},
		show: {
			y: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				duration: 1.25,
				delay: delay,
			},
		},
	}
}

export const fadeIn = (direction, type, delay, duration) => {
	return {
		hidden: {
			x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
			y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
			opacity: 0,
		},
		show: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: {
				type: type,
				delay: delay,
				duration: duration,
				ease: 'easeOut',
			},
		},
	}
}

export const zoomIn = (delay, duration) => {
	return {
		hidden: {
			scale: 0,
			opacity: 0,
		},
		show: {
			scale: 1,
			opacity: 1,
			transition: {
				type: 'tween',
				delay: delay,
				duration: duration,
				ease: 'easeOut',
			},
		},
	}
}

export const slideIn = (direction, type, delay, duration) => {
	return {
		hidden: {
			x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
			y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
		},
		show: {
			x: 0,
			y: 0,
			transition: {
				type: type,
				delay: delay,
				duration: duration,
				ease: 'easeOut',
			},
		},
	}
}

export const staggerContainer = (staggerChildren, delayChildren) => {
	return {
		hidden: {},
		show: {
			transition: {
				staggerChildren: staggerChildren,
				delayChildren: delayChildren || 0,
			},
		},
	}
}

export const expand = {
	initial: {
		top: 0,
	},
	enter: (i) => ({
		top: '100vh',
		transition: {
			duration: 0.6,
			delay: 0.20 * i,
			ease: [0.85, 0, 0.15, 1],
		},
		transitionEnd: { height: '0', top: '0' },
	}),
	exit: (i) => ({
		height: '100vh',
		transition: {
			duration: 0.7,
			delay: 0.15 * i,
			ease: [0.85, 0, 0.15, 1],
		},
	}),
}
export const opacity = {
	initial: {
		opacity: 0.5,
	},
	enter: {
		opacity: 0,
	},
	exit: {
		opacity: 0.5,
	},
}
