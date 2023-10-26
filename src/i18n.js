import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const getCurrentHost =
	import.meta.env.MODE === 'development'
		? 'http://localhost:5173'
		: 'https://multi-lang-app-react.netlify.app'

i18n.use(initReactI18next).init({
	fallbackLng: 'en',
	lng: 'en',
	interpolation: {
		escapeValue: false,
	},
	resources: {
		en: {
			translation: {
				title: 'Multi-language app',
				label: 'Select another language!',
				about: 'About',
				home: 'Home',
			},
		},
		jp: {
			translation: {
				title: 'Multi-language app',
				label: 'Select another language!',
				about: 'About',
				home: 'Home',
			},
		},
	},
	backend: {
		loadPath: `${getCurrentHost}/i18n/{{lng}}.json`,
	},
})

export default i18n
