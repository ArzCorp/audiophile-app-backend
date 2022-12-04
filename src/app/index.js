import express, { json, text } from 'express'
import path from 'path'

import { HomeRouter } from '../routes/home.routes.js'
import { notFoundMiddleware } from '../middlewares/notFound.middleware.js'
import { productsRouter } from '../routes/products.routes.js'

export const app = express()

app.set('case sensitive routing', true)
app.set('message', { name: 'Osvaldo' })

app.use(express.static('public'))
app.use('/home', express.static(path.resolve('./src/pages/home')))

app.use(text())

app.use(json())

app.use(HomeRouter)

app.use(productsRouter)

console.log(app.get('message'))

app.use(notFoundMiddleware)
