import { resolve } from 'path'
import { FILE_PATH } from '../utils/constants.js'

export const homeController = async (req, res) => {
	res.sendFile(resolve(FILE_PATH.HOME))
}
