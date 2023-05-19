import { resolve } from 'path'
import { FILE_PATH, STATUS_CODE } from '../utils/constants.js'

export const notFoundMiddleware = (req, res) => {
	res.status(STATUS_CODE.NOT_FOUND).sendFile(resolve(FILE_PATH.NOT_FOUND))
}
