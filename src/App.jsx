import { AnimatePresence } from 'framer-motion'
import { BrowserRouter } from 'react-router-dom'

import { About, Contact, Hero, Tech, Works, Cursor } from './components'
import useMediaQuery from './components/customHooks/useMediaQuery'

const App = () => {
	const isMobile = useMediaQuery()
	return (
		<BrowserRouter>
			<AnimatePresence>
				<Hero key="home" />
				<About key="about" />
				<Tech key="tech" />
				<Works key="works" />
				<div className="relative bg-primary">
					<Contact key="contact" />
					<div className="text-[12px] text-center pb-4">
						&copy; 2023 Reiko Ochiai
					</div>
				</div>
			</AnimatePresence>
			{isMobile ? null : <Cursor />}
		</BrowserRouter>
	)
}

export default App
