import express, { json, text } from 'express'

import { HomeRouter } from '../routes/home.routes.js'
import { notFoundMiddleware } from '../middlewares/notFound.middleware.js'

export const app = express()

app.set('case sensitive routing', true)
app.set('message', { name: 'Osvaldo' })

app.use(express.static('public'))

app.use(text())

app.use(json())

app.use(HomeRouter)

console.log(app.get('message'))

app.use(notFoundMiddleware)
