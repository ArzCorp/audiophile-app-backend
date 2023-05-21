import { Router } from 'express'
import { homeController } from '../controllers/home.controller.js'
import { ROUTES } from '../utils/constants.js'

export const homeRouter = Router()

homeRouter.get(ROUTES.HOME, homeController)
