import { motion } from 'framer-motion'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { useState } from 'react'

function Contact() {
	const [tooltip, setTooltip] = useState(false)
	setTimeout(() => {
		if (!tooltip) return
		if (tooltip) {
			setTooltip(false)
		}
	}, '1500')
	return (
		<div className="xl:mt-12 xl:flex-col flex-col-reverse flex gap-10 overflow-hidden">
			<motion.div
				variants={slideIn('left', 'tween', 0.2, 1)}
				className="flex-[0.75] bg-black-100 p-9 rounded-2xl">
				<p className={styles.sectionSubText}>Get in touch</p>
				<h3 className={styles.sectionHeadText}>Contact.</h3>
				<div className="flex justify-start items-center gap-3">
					<div
						onClick={() => {
							navigator.clipboard.writeText('reiko.ochiai05@gmail.com')
							setTooltip(!tooltip)
						}}
						className="py-2 outline-none w-fit text-white font-medium flex items-center">
						<h6>reiko.ochiai05@gmail.com</h6>
						<span className="transition-all text-xs text-white-100 group-hover:scale-100 z-10 ease-out duration-300 px-2">
							{tooltip ? 'Copied!' : null}
						</span>
					</div>
				</div>
			</motion.div>

			<motion.div
				variants={slideIn('right', 'tween', 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
				<EarthCanvas />
			</motion.div>
		</div>
	)
}

export default SectionWrapper(Contact, 'contact')
