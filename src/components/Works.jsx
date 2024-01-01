import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import { github } from '../assets'
import { styles } from '../styles'
import { projects } from '../constants'
import { SectionWrapper } from '../hoc'

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
	url,
}) => {
	return (
		<div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
			<div
				className="relative w-full h-[230px] cursor-pointer"
				onClick={() => {
					window.open(url, '_blank')
				}}>
				<img
					src={image}
					alt={name}
					className="w-full h-full object-cover rounded-2xl "
				/>

				<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
					<button
						onClick={() => window.open(source_code_link, '_blank')}
						className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
						<img
							src={github}
							alt="github"
							className="w-1/2 h-1/2 object-contain"
						/>
					</button>
				</div>
			</div>

			<div className="mt-5">
				<h3 className="text-white font-bold text-[24px]">{name}</h3>
				<p className="mt-2 text-secondary text-[14px]">{description}</p>
			</div>

			<div className="mt-4 flex flex-wrap gap-2">
				{tags.map((tag) => (
					<p key={tag.name} className={`text-[14px] ${tag.color}`}>
						#{tag.name}
					</p>
				))}
			</div>
		</div>
	)
}

const Works = () => {
	return (
		<>
			<motion.div variant={textVariant()}>
				<p className={styles.sectionSubText}>My work</p>
				<h2 className={styles.sectionHeadText}>Projects.</h2>
			</motion.div>
			<p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
				Following projects showcases my skills and experience through real-world
				examples of my work. Currently working on new project in my spare time
				which cannot wait to share!
			</p>
			<div className="mt-20 flex flex-wrap gap-7">
				{projects.map((project, index) => (
					<div key={index}>
						<ProjectCard key={`project-${index}`} index={index} {...project} />
					</div>
				))}
			</div>
		</>
	)
}

export default SectionWrapper(Works, 'work')
