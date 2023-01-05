import express, { json, text } from 'express'
import cors from 'cors'

import { HomeRouter } from '../routes/home.routes.js'
import { notFoundMiddleware } from '../middlewares/notFound.middleware.js'
import { productsRouter } from '../routes/products.routes.js'
import { shoppingCartRouter } from '../routes/shoppingCart.routes.js'

export const app = express()

app.use(cors())

app.use(express.static('public'))

app.use(text())

app.use(json())

app.use(HomeRouter)

app.use(productsRouter)

app.use(shoppingCartRouter)

app.use(notFoundMiddleware)
