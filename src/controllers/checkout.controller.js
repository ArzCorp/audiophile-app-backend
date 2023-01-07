import {
	IVA,
	NOT_FOUND_CODE,
	NOT_FOUND_PRODUCTS_IN_CART,
	responseTemplate,
	SHIPPING_COST,
	TRUE,
} from '../utils/constants.js'
import {
	getProductsToShoppingCart,
	getTotalCostToShoppingCart,
} from '../utils/productsUtils.js'

export const getGrandTotal = (req, res) => {
	const productsInCart = getProductsToShoppingCart()
	const shoppingCartTotalCost = getTotalCostToShoppingCart()
	const vat = shoppingCartTotalCost * IVA
	const grandTotal = shoppingCartTotalCost + vat + SHIPPING_COST

	if (productsInCart.length <= 0) {
		return res.status(NOT_FOUND_CODE).json({
			...responseTemplate,
			code: NOT_FOUND_CODE,
			error: TRUE,
			message: NOT_FOUND_PRODUCTS_IN_CART,
			status: 'error',
		})
	}

	res.json({
		...responseTemplate,
		data: {
			grandTotal,
			vat,
			shippingCost: SHIPPING_COST,
		},
	})
}
