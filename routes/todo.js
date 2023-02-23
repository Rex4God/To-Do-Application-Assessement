"use strict";
const express = require("express");
const router =express.Router();
const controller = require("../app/controllers/ToDoController")

router.post("/", controller.createTask);

router.get("/", controller.fetchTasks);

router.get("/:taskId", controller.getTask);

router.put("/:taskId", controller.updateTask);

router.delete("/:taskId", controller.deleteTask)





module.exports =router