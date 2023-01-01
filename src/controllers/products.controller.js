import {
	ADD_TO_CART_SUCCESS_MESSAGE,
	FALSE,
	NOT_DATA_RETURN_CODE,
	NOT_FOUND_CODE,
	NOT_FOUND_PRODUCT_MESSAGE,
	NOT_FOUND_STATUS,
	products,
	responseTemplate,
	TRUE,
} from '../utils/constants.js'

export const productsController = (req, res) => {
	responseTemplate.data = products
	res.json(responseTemplate)
}

export const productsTypeController = (req, res) => {
	const { productType } = req.params

	const leakedProducts = products.filter(
		(product) => product.category === productType
	)

	if (leakedProducts.length === 0)
		return res.json({
			...responseTemplate,
			error: TRUE,
			code: NOT_FOUND_CODE,
			message: NOT_FOUND_PRODUCT_MESSAGE,
			success: FALSE,
			status: NOT_FOUND_STATUS,
		})

	return res.json({
		...responseTemplate,
		data: leakedProducts,
	})
}

export const productIdController = (req, res) => {
	const { id } = req.params

	const leakedProducts = products.filter((product) => product.id === Number(id))

	if (leakedProducts.length <= 0)
		return res.json({
			...responseTemplate,
			error: TRUE,
			code: NOT_FOUND_CODE,
			message: NOT_FOUND_PRODUCT_MESSAGE,
			success: FALSE,
			status: NOT_FOUND_STATUS,
		})

	return res.json({
		...responseTemplate,
		data: leakedProducts,
	})
}

export const addProductController = (req, res) => {
	const { params } = req
	const product = products.find(
		(product) => product.id.toString() === params.product.toString()
	)

	if (!product) {
		responseTemplate.code = NOT_FOUND_CODE
		responseTemplate.error = TRUE
		responseTemplate.message = NOT_FOUND_PRODUCT_MESSAGE
		responseTemplate.status = NOT_FOUND_STATUS
		responseTemplate.success = FALSE
		return res.status(NOT_FOUND_CODE).json(responseTemplate)
	}

	product.amountOnCart += 1
	responseTemplate.message = ADD_TO_CART_SUCCESS_MESSAGE
	responseTemplate.code = NOT_DATA_RETURN_CODE
	res.status(NOT_DATA_RETURN_CODE).json(responseTemplate)
}
