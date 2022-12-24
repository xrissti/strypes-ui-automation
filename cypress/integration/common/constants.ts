const cypressConfig = Cypress.config() as any;

export const PAGES: { [key: string]: any } = {
	'Main': {
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
	'Cusomers': {
		url: `${cypressConfig.baseUrl}/customers/`,
		resource: 'customers',
		elements: []
	}
}