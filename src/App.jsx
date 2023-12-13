import { BrowserRouter } from 'react-router-dom'

import {
	About,
	Contact,
	Experience,
	Hero,
	Navbar,
	Tech,
	Works,
	StarsCanvas,
	Cursor,
} from './components'
import useMediaQuery from './components/customHooks/useMediaQuery'

const App = () => {
	const isMobile = useMediaQuery()
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
					<Navbar />
					<Hero />
				</div>
				<About />
				<Experience />
				<Tech />
				<Works />
				<div className="relative z-0">
					<Contact />
					{/* <StarsCanvas /> */}
					<div className="text-[12px] text-center pb-4">
						&copy; 2023 Reiko Ochiai
					</div>
				</div>
			</div>
			{isMobile ? null : <Cursor />}
		</BrowserRouter>
	)
}

export default App
