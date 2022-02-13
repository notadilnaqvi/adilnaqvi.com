export default async function handler(_req, res) {
	const response = await fetch(
		'https://api.twitter.com/2/users/936698457829576704/tweets' +
			'?max_results=5&tweet.fields=created_at',
		{
			headers: {
				Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
			},
		}
	);

	if (!response.ok) throw new Error('Failed to get Twitter data');

	const data = await response.json();

	res.status(200).send(data);
}
