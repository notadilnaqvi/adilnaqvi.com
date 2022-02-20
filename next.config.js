const withPWA = require('next-pwa');

module.exports = withPWA({
	images: {
		domains: ['dummyimage.com'],
	},
	pwa: {
		dest: 'public',
		disable: process.env.NODE_ENV === 'development',
	},
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: '/uses',
				destination: '/about#using',
				permanent: true,
			},
		];
	},
});
