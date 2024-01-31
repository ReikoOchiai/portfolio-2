import { styles } from '../styles'
import { opacity, expand } from '../utils/motion'
import { Navbar } from '../components'

// Higher style component for sections

const SectionWrapper = (Component, idName) =>
	function HOC() {
		const words = ['Hello', 'こんにちは', 'Ciao', 'Hallo', '你好']
		const anim = (variants, custom = null) => {
			return {
				initial: 'initial',
				animate: 'enter',
				exit: 'exit',
				custom,
				variants,
			}
		}
		const nbOfColumns = 1

		return (
			<div className="relative bg-primary">
				<Navbar />
				<div
					className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
					<span className="hash-span" id={idName}>
						&nbsp;
					</span>
					<Component />
				</div>
			</div>
		)
	}

export default SectionWrapper
