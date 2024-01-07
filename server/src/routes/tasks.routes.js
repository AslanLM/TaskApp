import { Router } from "express";
import {
  getTasks,
  getTask,
  createTask,
  editTask,
  deleteTask,
} from "../controllers/tasks.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { taskValidation } from "../validators/task.validation.js";


const router = Router();

router.get("/tasks", authRequired, getTasks);

router.get("/tasks/:id", authRequired, getTask);

router.post("/tasks", authRequired, validateSchema(taskValidation), createTask);

router.put("/tasks/:id", authRequired, validateSchema(taskValidation), editTask);

router.delete("/tasks/:id", authRequired, deleteTask);

export default router;
