import client from "../db/conn.mjs"
import { ObjectId } from "bson"

class Product {
    constructor(name, price, image, description) {
        this.name = name
        this.description = description
        this.image = image
        this.price = price
    }

    save() {
        const product = client.db().collection("products").insertOne({
            name: this.name,
            price: this.price,
            image: this.image,
            description: this.description,
        })
        return product
    }

    static getProducts() {
        const products = client.db().collection("products").find().toArray()
        //como se fosse um SELECT *

        return products
    }

    static async getProductById(id) {
        const product = await client
            .db()
            .collection("products")
            .findOne({ _id: ObjectId(id) })

            return product
    }
}

export default Product
