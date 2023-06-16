import { Router } from 'express'
import { ROUTES } from '../utils/constants.js'
import {
  getProductsController,
  getProductController,
} from '../controllers/products.controller.js'

export const productsRouter = Router()

productsRouter.get(ROUTES.GET_PRODUCTS, getProductsController)
productsRouter.get(ROUTES.GET_PRODUCT, getProductController)
