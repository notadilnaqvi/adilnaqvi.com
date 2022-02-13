export default async function handler(_req, res) {
	const response = await fetch(
		'https://lichess.org/api/games/user/notadilnaqvi' +
			'?max=1&pngInJson=true',
		{
			headers: {
				Accept: 'application/x-ndjson',
				Authorization: `Bearer ${process.env.LICHESS_PERSONAL_API_ACCESS_TOKEN}`,
			},
		}
	);

	if (!response.ok) throw new Error('Failed to get Lichess data');

	const data = await response.json();

	res.status(200).send(data);
}
