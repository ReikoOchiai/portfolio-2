import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { logo, menu, close } from '../assets'
import { useState } from 'react'
import { languages, navLinks } from '../constants/index'
import { useTranslation } from 'react-i18next'
function Navbar() {
	const [active, setActive] = useState('')
	const [toggle, setToggle] = useState(false)
	const { i18n } = useTranslation()

	const onChangeLang = (e) => {
		const lang_code = e.target.value
		i18n.changeLanguage(lang_code)
	}

	return (
		<nav
			className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 bg-primary`}>
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				<Link
					to="/"
					className="flex items-center gap-2"
					onClick={() => {
						setActive('')
						window.scrollTo(0, 0)
					}}>
					<img
						src={logo}
						alt="logo"
						className="w-9 h-9 object-contain rounded-full"
					/>
					<p className="text-white text-[18px] front-bold cursor-pointer flex">
						<span className="sm:block hidden">
							Reiko&nbsp;| Frontend Developer{' '}
						</span>
					</p>
				</Link>
				<ul className="list-none hidden sm:flex flex-row gap-10">
					{navLinks.map((link) => (
						<li
							key={link.id}
							className={`${
								active === link.title ? 'text-white' : 'text-secondary'
							} hover:text-white text-[18px] font-medium cursor-pointer`}
							onClick={() => {
								setActive(link.title)
							}}>
							<a href={`#${link.id}`}>{link.title}</a>
						</li>
					))}
					{/* <select
						className={`${
							toggle ? 'text-white' : 'text-secondary'
						} hover:text-white text-[14px] font-medium cursor-pointer rounded`}
						defaultValue={'en'}
						onChange={onChangeLang}>
						{languages.map(({ code, label }) => (
							<option key={code} value={code}>
								{label}
							</option>
						))}
					</select> */}
				</ul>

				<div className="sm:hidden flex flex-1 justify-end items-center">
					<img
						src={toggle ? close : menu}
						alt="menu"
						className="w-[28px] h-[28px] object-contain cursor-pointer"
						onClick={() => {
							setToggle(!toggle)
						}}
					/>
					<div
						className={`${
							!toggle ? 'hidden' : 'flex'
						} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl ease-in-out duration-1000`}>
						<ul className="list-none flex justify-end items-start flex-col gap-4">
							{navLinks.map((link) => (
								<li
									key={link.id}
									className={`${
										active === link.title ? 'text-white' : 'text-secondary'
									} font-poppins font-medium cursor-pointer text-[16px]`}
									onClick={() => {
										setToggle(!toggle)
										setActive(link.title)
									}}>
									<a href={`#${link.id}`}>{link.title}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
