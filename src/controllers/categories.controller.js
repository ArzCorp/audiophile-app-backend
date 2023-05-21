import { ERRORS, QUERYS, RESPONSE_TEMPLATE } from '../utils/constants.js'
import { pool } from '../db.js'
import { sendErrorResponse } from '../utils/sendErrorResponse.js'

export const categoriesController = async (req, res) => {
  try {
    const response = { ...RESPONSE_TEMPLATE }

    const [queryResponse] = await pool.query(QUERYS.GET_CATEGORIES)
    if (queryResponse.length <= 0) throw new Error(ERRORS.NO_CATEGORIES_FOUND)
    response.data = queryResponse
    response.results = queryResponse.length

    res.status(response.code).json(response)
  } catch (error) {
    sendErrorResponse({
      response: res,
      message: error.message,
    })
  }
}
