import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { opacity, expand } from '../utils/motion'
import { Navbar } from '../components'

// Higher style component for sections

const SectionWrapper = (Component, idName) =>
	function HOC() {
		const anim = (variants, custom = null) => {
			return {
				initial: 'initial',
				animate: 'enter',
				exit: 'exit',
				custom,
				variants,
			}
		}

		const nbOfColumns = 8
		return (
			// 	<motion.section
			// 		variants={staggerContainer()}
			// 		initial="hidden"
			// 		whileInView="show"
			// 		viewport={{ once: true, amount: 0.25 }}
			// 		className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
			//       {/* add empty span so that onClick, it will scroll to idName */}
			//       <span className='hash-span' id={idName}>
			//         &nbsp;
			//       </span>
			// 		<Component />
			// 	</motion.section>
			// );
			<div className="relative z-0 bg-primary">
				<Navbar />
				<div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
					<div className="stairs">
						<motion.div {...anim(opacity)} className="transition-background" />
						<div className="transition-container">
							{[...Array(nbOfColumns)].map((_, i) => {
								return <motion.div key={i} {...anim(expand, i)} />
							})}
						</div>
						<span className="hash-span" id={idName}>
							&nbsp;
						</span>
						<Component />
					</div>
				</div>
			</div>
		)
	}

export default SectionWrapper
