import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'

import light from '/src/assets/bg-img-one-light.png'
import bgBigBoxes from '/src/assets/bg-img-boxes.png'
import bgBoxes from '/src/assets/bg-img-without-lights.png'
import bgLights from '/src/assets/bg-img-without-boxes.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

function Hero() {
	const slider = useRef(null)
	const firstText = useRef(null)
	const secondText = useRef(null)

	let xPercent = 0
	let direction = 1

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)
		gsap.to(slider.current, {
			// location of scroll trigger
			scrollTrigger: {
				trigger: document.documentElement,
				scrub: 0.25,
				start: 0,
				end: window.innerHeight,
				onUpdate: (e) => (direction = e.direction * 1),
			},
			x: '-=300px',
		})
		gsap.to('.parallax-bg', {
			scrollTrigger: {
				scrub: true,
			},
			y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
			ease: 'none',
		})
		requestAnimationFrame(animate)
	}, [])

	const animate = () => {
		if (xPercent < -100) {
			xPercent = 0
		} else if (xPercent > 0) {
			xPercent = -100
		}
		gsap.set(firstText.current, { xPercent: xPercent })
		gsap.set(secondText.current, { xPercent: xPercent })
		xPercent += 0.025 * direction
		requestAnimationFrame(animate)
	}

	return (
		<section className="relative flex overflow-hidden">
			{' '}
			<div className="min-h-[100vh]">
				<img
					src={bgBigBoxes}
					alt="Background big boxes"
					className="parallax-bg absolute left-[20%] top-[220px]"
					data-speed=".65"
				/>
				<img
					src={bgLights}
					alt="Background lights"
					className="parallax-bg absolute left-[30%] top-[110px] opacity-7"
					data-speed=".35"
				/>

				<img
					src={bgBoxes}
					alt="Background small boxes"
					className="parallax-bg absolute left-[35%] top-[300px]"
					data-speed=".65"
				/>
				<img
					src={light}
					alt="Background lights"
					className="parallax-bg absolute left-[40%] top-[220px]"
					data-speed=".35"
				/>
			</div>
			<div
				className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl max-auto flex flex-row items-start gap-5`}>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div>
				<div>
					<h1 className={`${styles.heroHeadText} text-white relative`}>
						Hi, I'm <span className="text-[#915eff]">Reiko</span>
					</h1>
					<p className={`${styles.heroSubText} mt-2 text-white-100`}>
						Front-end developer and <br className="sm:block hidden" />
						UI/UX designer
					</p>
				</div>
			</div>
			<div className="sliderContainer">
				<div ref={slider} className="slider">
					<p ref={firstText}>Creative Front-end developer -</p>
					<p ref={secondText}>Creative Front-end developer -</p>
				</div>
			</div>
			<div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
						<motion.div
							animate={{ y: [0, 24, 0] }}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: 'loop',
							}}
							className="w-3 h-3 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	)
}

export default Hero
