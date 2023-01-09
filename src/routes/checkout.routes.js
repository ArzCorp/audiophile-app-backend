import { Router } from 'express'
import { getGrandTotal } from '../controllers/checkout.controller.js'

export const checkoutRouter = Router()

checkoutRouter.get('/checkout/grand-total', getGrandTotal)
