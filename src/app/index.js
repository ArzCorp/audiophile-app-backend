import express from 'express'
import path from 'path'
import { HomeRouter } from '../routes/home.routes.js'

export const app = express()

app.use(HomeRouter)

app.use((req, res) => {
	res.status(404).sendFile(path.resolve('src/static/404.html'))
})
