// import Product from "../models/Product.mjs"

export default class ProductController {
    static showProducts(req, res) {
        res.render("products/all")
    }
}
