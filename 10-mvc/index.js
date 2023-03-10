//express & handlebars
import e from "express"
import ExpressHandlebars from "express-handlebars"

//db
import sequelize from "./db/connection.js"

//models
import Task from "./models/Task.js"

//routes
import taskRoutes from "./routes/taskRoutes.js"

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

app.use("/tasks", taskRoutes)

sequelize
    .sync()
    .then(() => {
        app.listen(3000)
    })
    .catch((error) => console.log(error))
