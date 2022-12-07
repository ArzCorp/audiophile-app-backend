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

	if (leakedProducts.length === 0)
		return res.json({
			...responseTemplate,
			error: true,
			code: 404,
			message: 'No se encontraron productos',
			success: false,
			status: 'ERROR',
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
			error: true,
			code: 404,
			message: 'No se encontraron productos',
			success: false,
			status: 'ERROR',
		})

	return res.json({
		...responseTemplate,
		data: leakedProducts,
	})
}
