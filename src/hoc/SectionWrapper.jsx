import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

// Higher style component for sections

const SectionWrapper = (Component, idName) =>
	function HOC() {
		return (
			<motion.section
				variants={staggerContainer()}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.25 }}
				className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
          {/* add empty span so that onClick, it will scroll to idName */}
          <span className='hash-span' id={idName}>
            &nbsp; 
          </span>
				<Component />
			</motion.section>
		);
	};

export default SectionWrapper;
