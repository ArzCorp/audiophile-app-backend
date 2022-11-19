import { Router } from 'express'
import { homeController } from '../controllers/home.controller.js'

export const HomeRouter = Router()

HomeRouter.get('/', homeController)
