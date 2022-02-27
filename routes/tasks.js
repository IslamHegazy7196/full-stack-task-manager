const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  clearAllTasks,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(createTask).delete(clearAllTasks);
router.route("/:id").put(updateTask).delete(deleteTask);
module.exports = router;
