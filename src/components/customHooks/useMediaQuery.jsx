import { useState, useEffect } from 'react'

const useMediaQuery = () => {
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		// Add a listener for changes to the screen size
		const mediaQuery = window.matchMedia('(max-width: 500px)')

		// Set the initial value of the 'isMobile' state variable
		setIsMobile(mediaQuery.matches)

		// Define a callback function to handle changes to the media query
		const handleMediaQueryChange = (event) => {
			setIsMobile(event.matches)
		}

		// Add the callback function as a listener for changes to the media query
		mediaQuery.addEventListener('change', handleMediaQueryChange)

		// Cleanup function
		return () => {
			mediaQuery.removeEventListener('change', handleMediaQueryChange)
		}
	}, [])

	return isMobile
}

export default useMediaQuery
