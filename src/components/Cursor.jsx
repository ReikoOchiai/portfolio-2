import { useEffect, useRef, useState } from 'react'
import useMediaQuery from './customHooks/useMediaQuery'

const CURSOR_SPEED = 0.2

let mouseX = 0
let mouseY = 0
let outlineX = 0
let outlineY = 0

const Cursor = () => {
	const isMobile = useMediaQuery()

	const cursorOutline = useRef()
	const [hoverButton, setHoverButton] = useState(false)

	const animate = () => {
		let distX = mouseX - outlineX
		let distY = mouseY - outlineY

		outlineX = outlineX + distX * CURSOR_SPEED
		outlineY = outlineY + distY * CURSOR_SPEED
		if (cursorOutline.current !== null) {
			cursorOutline.current.style.left = `${outlineX}px`
			cursorOutline.current.style.top = `${outlineY}px`
			requestAnimationFrame(animate)
		}
	}

	useEffect(() => {
		const mouseEventsListener = document.addEventListener(
			'mousemove',
			function (event) {
				mouseX = event.pageX
				mouseY = event.pageY
			}
		)
		const animateEvent = requestAnimationFrame(animate)
		return () => {
			document.removeEventListener('mousemove', mouseEventsListener)
			cancelAnimationFrame(animateEvent)
		}
	}, [])

	useEffect(() => {
		const mouseEventListener = document.addEventListener(
			'mouseover',
			function (e) {
				if (
					e.target.tagName.toLowerCase() === 'button' ||
					// check parent is button
					e.target.parentElement.tagName.toLowerCase() === 'button' ||
					// check is input or textarea
					e.target.tagName.toLowerCase() === 'input' ||
					e.target.tagName.toLowerCase() === 'textarea' ||
					e.target.tagName.toLowerCase() === 'select' ||
					e.target.tagName.toLowerCase() === 'a'
				) {
					setHoverButton(true)
				} else {
					setHoverButton(false)
				}
			}
		)
		return () => {
			document.removeEventListener('mouseover', mouseEventListener)
		}
	}, [])

	return (
		<>
			{isMobile ? (
				<></>
			) : (
				<div
					className={`absolute z-100 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-transform
        ${
					hoverButton
						? 'bg-transparent border-2 white-900 w-5 h-5'
						: 'bg-white w-3 h-3'
				}`}
					ref={cursorOutline}></div>
			)}
		</>
	)
}

export default Cursor
