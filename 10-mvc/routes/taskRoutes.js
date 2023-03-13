import e from "express"
const taskRoutes = e.Router()

import TaskController from "../controllers/TaskController.js"

taskRoutes.get("/add", TaskController.createTask)
taskRoutes.post("/add", TaskController.createTaskSave)
taskRoutes.get("/", TaskController.showTasks)

export default taskRoutes
