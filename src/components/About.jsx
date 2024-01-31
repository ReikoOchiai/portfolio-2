import { motion } from 'framer-motion'
import React from 'react'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import Tilt from 'react-parallax-tilt'
import { services } from '../constants'
import { SectionWrapper } from '../hoc'
const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt className="xs:w-[250px] w-full">
			<motion.div
				variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
				className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
				<div
					options={{ max: 45, scale: 1, speed: 450 }}
					className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col items-center justify-evenly">
					<img src={icon} alt={title} className="w-16 h-16 object-contain" />
					<h3 className="text-white text-[20px] font-bold text-center">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	)
}
function About() {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>
			<motion.p
				variants={fadeIn('', '', 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
				I believe web design can be more inspiring and intriguing.
				<br />
				I have a passion for creating interactive web sites with Three.js and
				GSAP. Committed to writing concise and clean code with clarity and maintainability in mind, ensuring it is
				comprehensible and accessible for other developers.
				<br />
				<br />
				Currently working for startup company - Booop as a Software developer to
				build and maintain self-checkout web application and dashboard for
				retailers.
			</motion.p>
			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	)
}

export default SectionWrapper(About, 'about')
