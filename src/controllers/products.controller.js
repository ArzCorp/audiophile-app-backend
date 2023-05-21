import { pool } from '../db.js'
import { ERRORS, QUERYS, RESPONSE_TEMPLATE } from '../utils/constants.js'
import { sendErrorResponse } from '../utils/sendErrorResponse.js'

export const productsController = async (req, res) => {
  try {
    const response = { ...RESPONSE_TEMPLATE }
    const { params } = req
    const { category } = params

    const [[queryResponse]] = await pool.query(QUERYS.GET_PRODUCTS, [category])

    if (queryResponse.length > 0) {
      response.data = queryResponse
      response.results = queryResponse.length
    } else {
      throw new Error(ERRORS.NO_PRODUCTS_FOUND)
    }

    res.status(response.code).json(response)
  } catch (error) {
    sendErrorResponse({
      response: res,
      message: error.message,
    })
  }
}
