import { Router } from 'express'
import { postTestController } from '../controllers/testController.js'

export const testRouter = Router()

testRouter.post('/test', postTestController)
