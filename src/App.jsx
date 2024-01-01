import { BrowserRouter } from 'react-router-dom'

import {
	About,
	Contact,
	Hero,
	Navbar,
	Tech,
	Works,
	Cursor,
} from './components'
import useMediaQuery from './components/customHooks/useMediaQuery'

const App = () => {
	const isMobile = useMediaQuery()
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				<div>
					<Navbar />
					<Hero />
				</div>
				<About />
				<Tech />
				<Works />
				<div className="relative z-0">
					<Contact />
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
