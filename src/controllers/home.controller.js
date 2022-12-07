import { resolve } from 'path'

export const homeController = async (req, res) => {
	res.sendFile(resolve('src/static/html/home.html'))
}
