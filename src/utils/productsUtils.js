import {
	NOT_FOUND_CODE,
	NOT_FOUND_PRODUCT_MESSAGE,
	NOT_FOUND_STATUS,
	products,
	responseTemplate,
	TRUE,
} from './constants.js'

export const findProduct = (productId) =>
	products.find((product) => product.id.toString() === productId.toString())

export const findProductInShoppingCart = (productId) => {
	const productInShoppingCart = products.filter(
		(product) =>
			productId.toString() === product.id.toString() && product.amountOnCart > 0
	)

	return productInShoppingCart[0]
}

export const responseProductNotFound = ({ res, product }) => {
	if (!product) {
		return res.status(NOT_FOUND_CODE).json({
			...responseTemplate,
			code: NOT_FOUND_CODE,
			error: TRUE,
			message: NOT_FOUND_PRODUCT_MESSAGE,
			status: NOT_FOUND_STATUS,
		})
	}
}
