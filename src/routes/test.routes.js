import { Router } from 'express'
import {
	postTestController,
	postTestQueryParamController,
} from '../controllers/testController.js'

export const testRouter = Router()

testRouter.post('/test', postTestController)

testRouter.post('/test/:id', postTestQueryParamController)
