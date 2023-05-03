import e from 'express'
const router = e.Router()

import ProductController from '../controllers/ProductController.mjs'

router.get('/', ProductController.showProducts)

export default router