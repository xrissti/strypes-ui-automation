const cypressConfig = Cypress.config() as any;

export const PAGES: { [key: string]: any } = {
	'Home': {
		url: `${cypressConfig.baseUrl}`,
		resource: '/',
		elements: []
	},
	'About Strypes': {
		url: `${cypressConfig.baseUrl}/about-strypes/`,
		resource: 'about-strypes',
		elements: []
	},
	'Our brands': {
		url: `${cypressConfig.baseUrl}/our-brands/`,
		resource: 'our-brands',
		elements: []
    },
	'Our promises': {
		url: `${cypressConfig.baseUrl}/promises/`,
		resource: 'promises',
		elements: []
	},
	'Our leadership': {
		url: `${cypressConfig.baseUrl}/our-leadership/`,
		resource: 'our-leadership',
		elements: []
	},
	'Building Smart Solutions': {
		url: `${cypressConfig.baseUrl}/services/`,
		resource: 'services',
		elements: []
	},
	'Nearsurance': {
		url: `${cypressConfig.baseUrl}/nearsurance/`,
		resource: 'nearsurance',
		elements: []
	},
	'Start your career in IT': {
		url: `https://blog.strypes.eu/blog/a-great-career-start-for-junior-developers-trained-by-code-academy-in-partnership-with-strypes`,
		resource: 'blog',
		elements: []
	},
	'Contact': {
		url: `${cypressConfig.baseUrl}/contact/`,
		resource: 'contact',
		elements: []
	}
}