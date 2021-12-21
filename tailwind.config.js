module.exports = {
	mode: 'jit',
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'th-primary': '#6EB0DE',
				'th-secondary': '#6D9ABA',
			},
			fontFamily: {
				sans: ['Open Sans'],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
