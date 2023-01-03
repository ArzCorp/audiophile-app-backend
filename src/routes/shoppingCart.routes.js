import { Router } from 'express'
import {
	addProductToShoppingCart,
	deleteProductToShoppingCart,
	getShoppingCart,
} from '../controllers/shoppingCart.controller.js'

export const shoppingCartRouter = Router()

shoppingCartRouter.get('/shopping-cart', getShoppingCart)

shoppingCartRouter.post('/shopping-cart/:productId', addProductToShoppingCart)

shoppingCartRouter.delete(
	'/shopping-cart/:productId',
	deleteProductToShoppingCart
)
