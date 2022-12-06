import { resolve } from 'path'
import axios from 'axios'

export const homeController = async (req, res) => {
	const data = await axios.get('https://rickandmortyapi.com/api/character')
	console.log(data.data.results[0])
	res.sendFile(resolve('src/static/html/home.html'))
}
