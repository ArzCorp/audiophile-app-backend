import express, { json, text } from 'express'

import { HomeRouter } from '../routes/home.routes.js'
import { notFoundMiddleware } from '../middlewares/notFound.middleware.js'
import { testRouter } from '../routes/test.routes.js'
import { logger } from '../middlewares/logger.middleware.js'

export const app = express()

app.use(text())

app.use(json())

app.use(logger)

app.use(HomeRouter)

app.use(testRouter)

app.use(notFoundMiddleware)
