export default async function handler(_req, res) {
	const token = await getSpotifyToken();

	const response = await fetch(
		'https://api.spotify.com/v1/me/player/recently-played' + '?limit=1',
		{
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		}
	);

	if (!response.ok) throw new Error('Failed to get Spotify data');

	const data = await response.json();

	res.status(200).send(data);
}

async function getSpotifyToken() {
	const b64AuthString = Buffer.from(
		process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET
	).toString('base64');

	const response = await fetch(
		'https://accounts.spotify.com/api/token/' +
			'?grant_type=refresh_token&refresh_token=' +
			process.env.SPOTIFY_REFRESH_TOKEN,
		{
			method: 'post',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization: `Basic ${b64AuthString}`,
			},
		}
	);

	if (!response.ok) throw new Error('Failed to get Spotify token');

	const tokenData = await response.json();
	const token = tokenData.access_token;

	return token;
}
