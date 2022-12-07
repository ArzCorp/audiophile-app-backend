import { Router } from 'express'
import {
	productIdController,
	productsController,
	productsTypeController,
} from '../controllers/products.controller.js'

export const productsRouter = Router()

productsRouter.get('/products', productsController)

productsRouter.get('/products/:productType', productsTypeController)

productsRouter.get('/products/id/:id', productIdController)
