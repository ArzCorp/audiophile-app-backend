import express, { json, text } from 'express'
import cors from 'cors'

import { FILE_PATH } from '../utils/constants.js'
import { notFoundMiddleware } from '../middlewares/notFound.middleware.js'
import { homeRouter } from '../routes/home.routes.js'
import { productsRouter } from '../routes/products.routes.js'
import { categoriesRouter } from '../routes/categories.routes.js'

export const app = express()

app.use(cors())

app.use(text())

app.use(json())

app.use(express.static(FILE_PATH.PUBLIC))

app.use(homeRouter)

app.use(productsRouter)

app.use(categoriesRouter)

app.use(notFoundMiddleware)
