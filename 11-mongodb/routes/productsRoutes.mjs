import e from "express"
const router = e.Router()

import ProductController from "../controllers/ProductController.mjs"

router.get("/create", ProductController.createProduct)
router.post("/create", ProductController.createProductPost)
router.get("/:id", ProductController.getProduct)
router.get("/", ProductController.showProducts)

export default router
