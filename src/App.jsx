import { BrowserRouter } from 'react-router-dom'
import React, { useEffect, useRef, useState } from 'react'

import { useScroll, useSpring, useTransform, motion } from 'framer-motion'
import { About, Contact, Hero, Tech, Works, Cursor } from './components'
import useMediaQuery from './components/customHooks/useMediaQuery'

const App = () => {
	const isMobile = useMediaQuery()
	// Scroll progress (0 to 1) of the window
	const { scrollYProgress } = useScroll()

	// Use framer motion's useSpring() hook to smooth the scrollYProgress value
	const smoothProgress = useSpring(scrollYProgress, { mass: 0.1 })

	// The height of the content in pixels
	const [contentHeight, setContentHeight] = useState(0)

	// The value to transform the content to
	const y = useTransform(
		smoothProgress,
		(v) => v * -(contentHeight - window.innerHeight)
	)

	// A reference to hold the value of the content
	const contentRef = useRef(null)

	// Reset the `contentHeight` value when the children change, or when the window resizes
	useEffect(() => {
		const handleResize = () => {
			if (contentRef.current) {
				setContentHeight(contentRef.current.scrollHeight)
			}
		}
		// Call the resize handler once, initially
		handleResize()

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [contentRef])

	return (
		<BrowserRouter>
			{/* <div style={{ height: contentHeight }} />
			<motion.div className="scrollBody" ref={contentRef} style={{ y }}> */}
				<Hero key="home" />
				<About key="about" />
				<Tech key="tech" />
				<Works key="works" />
				<div className="relative bg-primary">
					<Contact key="contact" />
					<div className="text-[12px] text-center pb-4">
						&copy; 2024 Reiko Ochiai
					</div>
				</div>
			{/* </motion.div> */}
			{isMobile ? null : <Cursor />}
		</BrowserRouter>
	)
}

export default App
