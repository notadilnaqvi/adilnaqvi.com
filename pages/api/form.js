export default function handler(req, res) {
	console.log(JSON.parse(req.body));
	res.status(200).send();
}
