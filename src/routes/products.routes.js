import { Router } from 'express'
import { ROUTES } from '../utils/constants.js'
import { productsController } from '../controllers/products.controller.js'

export const productsRouter = Router()

productsRouter.get(ROUTES.PRODUCTS, productsController)
