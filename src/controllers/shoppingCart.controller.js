import {
	ADD_TO_CART_SUCCESS_MESSAGE,
	DELETE_ALL_PRODUCTS_SUCCESS,
	DELETE_TO_CART_SUCCESS_MESSAGE,
	EMPTY_OBJECT,
	NOT_DATA_RETURN_CODE,
	NOT_FOUND_PRODUCTS_IN_CART,
	products,
	responseTemplate,
	TRUE,
	_0,
} from '../utils/constants.js'
import {
	findProduct,
	findProductInShoppingCart,
	getProductsToShoppingCart,
	getTotalCostToShoppingCart,
	responseProductNotFound,
} from '../utils/productsUtils.js'

export const getShoppingCart = (req, res) => {
	const productsInCart = getProductsToShoppingCart()
	const productsCost = getTotalCostToShoppingCart()

	if (productsInCart.length <= 0) {
		return res.status(NOT_DATA_RETURN_CODE).json({
			...responseTemplate,
			error: TRUE,
			message: NOT_FOUND_PRODUCTS_IN_CART,
			code: NOT_DATA_RETURN_CODE,
			data: EMPTY_OBJECT,
		})
	}

	return res.json({
		...responseTemplate,
		data: {
			products: productsInCart,
			total: productsCost,
		},
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

export const deleteAllProductsToShoppingCart = (req, res) => {
	products.forEach((product) => (product.amountOnCart = 0))

	res.status(NOT_DATA_RETURN_CODE).json({
		...responseTemplate,
		message: DELETE_ALL_PRODUCTS_SUCCESS,
		code: NOT_DATA_RETURN_CODE,
	})
}
