export default async function handler(_req, res) {
	const response = await fetch(
		'https://api.github.com/users/notadilnaqvi/events?per_page=1',
		{
			headers: {
				Authorization: `token ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
			},
		}
	);

	if (!response.ok) throw new Error('Failed to get GitHub data');

	const data = await response.json();

	res.status(200).send(data);
}
