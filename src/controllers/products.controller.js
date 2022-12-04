import { products, responseTemplate } from '../utils/constants.js'

export const productsController = (req, res) => {
	responseTemplate.data = products
	res.json(responseTemplate)
}

export const productsTypeController = (req, res) => {
	const { productType } = req.params

	const leakedProducts = products.filter(
		(product) => product.category === productType
	)

	if (leakedProducts.length <= 0) {
		responseTemplate.error = true
		responseTemplate.code = 404
		responseTemplate.message = 'No se encontraron productos'
		responseTemplate.success = false
		responseTemplate.status = 'ERROR'

		return res.json(responseTemplate)
	}

	responseTemplate.data = leakedProducts

	return res.json(responseTemplate)
}
