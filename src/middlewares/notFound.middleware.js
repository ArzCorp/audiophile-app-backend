import { resolve } from 'path'

export const notFoundMiddleware = (req, res) => {
	res.status(404).sendFile(resolve('src/static/html/404.html'))
}
