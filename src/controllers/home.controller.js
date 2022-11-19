import { resolve } from 'path'

export const homeController = (req, res) => {
	res.sendFile(resolve('src/static/home.html'))
}
