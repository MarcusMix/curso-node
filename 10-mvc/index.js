import e from "express"
import ExpressHandlebars from "express-handlebars"
import sequelize from "./db/connection.js"

const app = e()

app.engine("handlebars", ExpressHandlebars.engine())
app.set("view engine", "handlebars")

app.use(
    e.urlencoded({
        extended: true,
    })
)

app.use(e.json())

app.use(e.static("public"))

app.listen(3000)
