import { Router } from 'express'
import { ROUTES } from '../utils/constants.js'
import { categoriesController } from '../controllers/categories.controller.js'

export const categoriesRouter = Router()

categoriesRouter.get(ROUTES.CATEGORIES, categoriesController)
