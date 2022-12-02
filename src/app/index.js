import express, { json, text } from 'express'

import { HomeRouter } from '../routes/home.routes.js'
import { notFoundMiddleware } from '../middlewares/notFound.middleware.js'

export const app = express()

app.use(text())

app.use(json())

app.use(HomeRouter)

app.use(notFoundMiddleware)
