import {
	ADD_TO_CART_SUCCESS_MESSAGE,
	DELETE_TO_CART_SUCCESS_MESSAGE,
	NOT_DATA_RETURN_CODE,
	NOT_FOUND_PRODUCTS_IN_CART,
	products,
	responseTemplate,
	TRUE,
} from '../utils/constants.js'
import {
	findProduct,
	findProductInShoppingCart,
	responseProductNotFound,
} from '../utils/productsUtils.js'

export const getShoppingCart = (req, res) => {
	const productsInCart = products.filter((product) => product.amountOnCart > 0)

	if (productsInCart.length <= 0) {
		return res.status(NOT_DATA_RETURN_CODE).json({
			...responseTemplate,
			error: TRUE,
			message: NOT_FOUND_PRODUCTS_IN_CART,
			code: NOT_DATA_RETURN_CODE,
		})
	}

	return res.json({
		...responseTemplate,
		data: productsInCart,
	})
}

export const addProductToShoppingCart = (req, res) => {
	const { params, body } = req

	const product = findProduct(params.productId)

	if (!product) {
		return responseProductNotFound({
			res,
			product,
		})
	}

	if (body.amount > 0) {
		product.amountOnCart += body.amount
	} else {
		product.amountOnCart += 1
	}

	res.status(NOT_DATA_RETURN_CODE).json({
		...responseTemplate,
		message: ADD_TO_CART_SUCCESS_MESSAGE(product.name),
		code: NOT_DATA_RETURN_CODE,
	})
}

export const deleteProductToShoppingCart = (req, res) => {
	const { params, body } = req
	const product = findProductInShoppingCart(params.productId)

	if (!product) {
		return responseProductNotFound({
			res,
			product,
		})
	}

	if (body.amount > 0) {
		product.amountOnCart -= body.amount
	} else {
		product.amountOnCart -= 1
	}

	return res.status(NOT_DATA_RETURN_CODE).json({
		...responseTemplate,
		message: DELETE_TO_CART_SUCCESS_MESSAGE(product.name),
		code: NOT_DATA_RETURN_CODE,
	})
}
