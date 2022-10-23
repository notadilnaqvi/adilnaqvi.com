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

// Fail build if any required environment variables are missing
if (process.env.NODE_ENV === 'production') {
  const requiredEnvVars = [
    'GITHUB_PERSONAL_ACCESS_TOKEN',
    'TWITTER_BEARER_TOKEN',
    'SPOTIFY_REFRESH_TOKEN',
    'SPOTIFY_CLIENT_ID',
    'SPOTIFY_CLIENT_SECRET',
    'LICHESS_PERSONAL_API_ACCESS_TOKEN',
  ];
  let missingEnvVarsStr = '';
  for (const envVar of requiredEnvVars) {
    if (typeof process.env[envVar] === 'undefined') {
      missingEnvVarsStr += `- ${envVar}\n`;
    }
  }
  if (missingEnvVarsStr) {
    console.log(
      `\u274c The following environment variables were not set. Please set them and try again.\n${missingEnvVarsStr}`,
    );
    process.exit(1);
  } else {
    console.log('\u2699\ufe0f next.config.js', JSON.stringify(module.exports, null, 2));
  }
}
