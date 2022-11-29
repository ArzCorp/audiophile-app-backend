export const postTestController = (req, res) => {
	const { body } = req
	console.log({ body })
	res.status(201).end()
}
