import client from "../db/conn.mjs"

class Product {
    constructor(name, price, description) {
        this.name = name
        this.description = description
        this.price = price
    }

    save() {
        const product = client.db().collection("products").insertOne({
            name: this.name,
            price: this.price,
            description: this.description,
        })
        return product
    }
}

export default Product
