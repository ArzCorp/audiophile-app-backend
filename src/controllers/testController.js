export const postTestController = (req, res) => {
	const { body } = req
	console.log({ body })
	res.status(201).end()
}

export const postTestQueryParamController = (req, res) => {
	const { params, query } = req
	console.log({ query })
	res.end(`Parámetro recibido ${params.id}`)
}
