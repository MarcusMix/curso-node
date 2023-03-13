import e from "express"
const taskRoutes = e.Router()

import TaskController from "../controllers/TaskController.js"

taskRoutes.get("/add", TaskController.createTask)
taskRoutes.post("/add", TaskController.createTaskSave)
taskRoutes.get("/", TaskController.showTasks)
taskRoutes.post("/remove", TaskController.removeTask)
taskRoutes.get("/edit/:id", TaskController.editTask)
taskRoutes.post("/edit", TaskController.editTaskPost)
taskRoutes.post("/done", TaskController.doneTask)

export default taskRoutes
