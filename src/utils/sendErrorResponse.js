import { ERRORS, RESPONSE_TEMPLATE } from './constants.js'

export const sendErrorResponse = ({ message, response, code }) => {
  const res = { ...RESPONSE_TEMPLATE }

  res.code = code || 500
  res.message = message || ERRORS.GENERAL
  res.success = false
  res.error = true

  response.status(res.code).json(res)
}
