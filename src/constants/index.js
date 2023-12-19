import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	booop,
	daiwa,
	carrent,
	tripguide,
	threejs,
	netflix,
	uiux,
	galaxy,
	awwwards,
	firstPortfolio,
	hauntedHouse,
} from '../assets'

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
]

const services = [
	{
		title: 'Frontend Developer',
		icon: web,
	},
	{
		title: 'UI/UX Designer',
		icon: backend,
	},
]

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Redux Toolkit',
		icon: redux,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'MongoDB',
		icon: mongodb,
	},
	{
		name: 'Three JS',
		icon: threejs,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'figma',
		icon: figma,
	},
]

const experiences = [
	{
		title: 'Frontend developer',
		company_name: 'Booop.it',
		icon: booop,
		iconBg: '#E6DEDD',
		date: 'Jul 2022 - Present',
		points: [
			'Developed and maintained two concurrent applications, one for consumers and one for retailers, using React.js and TypeScript, ensuring a seamless and consistent user experience.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
			'Worked closely with product managers and stakeholders to align development efforts with business goals, ensuring that each feature delivered met user and business requirements.',
			'Thorough code reviews and implemented best practices in React and TypeScript, eliminating any performance issue and ensuring consistency across the applications.',
		],
	},
	{
		title: 'Planning Analyst',
		company_name: 'Daiwa Food Pty Ltd',
		icon: 'D',
		iconBg: '#383E56',
		date: 'Oct 2019 - Apr 2022',
		points: [
			'Responsible for identifying purchase needs and opportunities.',
			"Identified opportunities through sales data and marketing research to come up with strategies that increased the company's profitability of its online platform by 25% while reducing costs.",
			'Working collaboratively in a team to figure out the most efficient and effective process of handling multiple projects.',
			'Prepared reports with a clear and precise goal so that readers can identify key points.',
		],
	},
	{
		title: 'Building Surveyor',
		company_name: 'Code Compliance Pty Ltd',
		icon: 'C',
		iconBg: '#E6DEDD',
		date: 'Feb 2017 - Sept 2019',
		points: [
			'Communicate thoroughly with project stakeholders to identify a time frame and potential roadblocks to reduce constrain.',
			'Identify any non-compliant matter through architectural drawings or other associated documentation',
			'Studying ever-changing state, council and building regulations.',
		],
	},
	{
		title: 'Store Manager',
		company_name: 'Puck Specialty Coffee',
		icon: 'P',
		iconBg: '#383E56',
		date: 'Jun 2015 - Jul 2018',
		points: [
			'Strong time management with the ability to multi-task.',
			'Solution-focused mindset and highly organized while offering directions to others.',
			'Placing daily orders with suppliers for the running of the business.',
			'Focusing on top quality customer service.',
		],
	},
]

const projects = [
	{
		name: 'Awwwards website clone',
		description:
			'Currently working on building clone of awwwards winning website by Dennis Snellenberg with Next.js, GSAP and Framer motion.',
		tags: [
			{
				name: 'Next.js',
				color: 'blue-text-gradient',
			},
			{
				name: 'GSAP',
				color: 'green-text-gradient',
			},
			{
				name: 'Framer Motion',
				color: 'pink-text-gradient',
			},
		],
		image: awwwards,
		source_code_link: 'https://github.com/ReikoOchiai/awwwards-website-clone',
		url: 'https://awwwards-website-clone-reikoochiai.vercel.app/',
	},
	{
		name: 'Netflix',
		description:
			'Recreated Netflix with React JS, all data is fetched from the movie database API. User can play the trailers if its available in Youtube',
		tags: [
			{
				name: 'React',
				color: 'blue-text-gradient',
			},
			{
				name: 'Rest API, Axios',
				color: 'green-text-gradient',
			},
			{
				name: 'CSS',
				color: 'pink-text-gradient',
			},
		],
		image: netflix,
		source_code_link: 'https://github.com/ReikoOchiai/NetflixClone',
		url: 'https://netflix-clone-6a31c.web.app/',
	},
	{
		name: 'GPT-3',
		description: 'Fully responsive website for GPT-3',
		tags: [
			{
				name: 'React',
				color: 'blue-text-gradient',
			},
			{
				name: 'Firebase',
				color: 'green-text-gradient',
			},
			{
				name: 'CSS',
				color: 'pink-text-gradient',
			},
		],
		image: uiux,
		source_code_link: 'https://github.com/ReikoOchiai/ui-ux-website',
		url: 'https://ui-ux-website.web.app/',
	},
	{
		name: '3D Galaxy',
		description: 'User can create their own 3D Galaxy',
		tags: [
			{
				name: 'Three.js',
				color: 'blue-text-gradient',
			},
			{
				name: 'HTML',
				color: 'green-text-gradient',
			},
			{
				name: 'CSS',
				color: 'pink-text-gradient',
			},
		],
		image: galaxy,
		source_code_link: 'https://github.com/ReikoOchiai/Galaxy-generator',
		url: 'https://galaxy-generator-one.vercel.app/',
	},
	{
		name: '3D Haunted house',
		description:
			'3D rendered haunted house, you can adjust lighting locations and intensity',
		tags: [
			{
				name: 'Three.js',
				color: 'blue-text-gradient',
			},
			{
				name: 'HTML',
				color: 'green-text-gradient',
			},
			{
				name: 'CSS',
				color: 'pink-text-gradient',
			},
		],
		image: hauntedHouse,
		source_code_link: 'https://github.com/ReikoOchiai/haunted-house-3d',
		url: 'https://haunted-house-tau.vercel.app/',
	},
	{
		name: 'First portfolio',
		description:
			'My very first portfolio made with simple HTML, Javascript, Bootstrap and CSS',
		tags: [
			{
				name: 'Javascript',
				color: 'blue-text-gradient',
			},
			{
				name: 'HTML',
				color: 'green-text-gradient',
			},
			{
				name: 'CSS',
				color: 'pink-text-gradient',
			},
			{
				name: 'Bootstrap',
				color: 'green-text-gradient',
			},
		],
		image: firstPortfolio,
		source_code_link: 'https://github.com/ReikoOchiai/PortfolioWebsite',
		url: 'https://findreiko-ochiai.web.app/',
	},
]

const languages = [
	{ label: 'Japanese', code: 'jp' },
	{ label: 'English', code: 'en' },
]

export { services, technologies, experiences, projects, languages }
