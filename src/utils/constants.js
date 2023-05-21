export const _0 = 0

export const RESPONSE_TEMPLATE = Object.freeze({
  success: true,
  data: [],
  code: 200,
  error: false,
  message: '',
  results: 0,
})

export const STATUS_CODE = Object.freeze({
  NOT_FOUND: 404,
  SUCCESS_EMPTY_DATA: 201,
})

export const FILE_PATH = Object.freeze({
  PUBLIC: 'public',
  NOT_FOUND: 'src/static/404.html',
  HOME: 'src/static/home.html',
})

export const ROUTES = Object.freeze({
  HOME: '/',
  PRODUCTS: '/products/:category',
  CATEGORIES: '/categories',
})

export const QUERYS = Object.freeze({
  GET_PRODUCTS: 'CALL `get_products_by_category`(?)',
  GET_CATEGORIES: 'SELECT `id`, `name` FROM `categories`',
})

export const ERRORS = Object.freeze({
  NO_PRODUCTS_FOUND: 'No se encontraron productos.',
  NO_CATEGORIES_FOUND: 'No se encontraron categorías.',
  GENERAL: 'Error, intente de nuevo',
})
