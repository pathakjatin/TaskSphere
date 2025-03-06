const express = require("express");
const Task = require("../models/Tasks.model");

const router = express.Router();

// ✅ 1️⃣ Create a New Task (POST /api/tasks)
router.post("/", async (req, res) => {
    try {
        const { text, completed, projectId, userId } = req.body;

        const newTask = new Task({
            text,
            completed: completed || false, // Default to false if not provided
            projectId,
            userId,
        });

        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ error: "Failed to create task" });
    }
});

// ✅ 2️⃣ Get All Tasks for a Project (GET /api/tasks/:projectId)
router.get("/:projectId", async (req, res) => {
    try {
        const tasks = await Task.find({ projectId: req.params.projectId });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch tasks" });
    }
});

// ✅ 3️⃣ Mark a Task as Completed (PUT /api/tasks/:taskId/complete)
router.put("/:taskId/complete", async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.taskId,
            { completed: true },
            { new: true }
        );

        if (!updatedTask) {
            return res.status(404).json({ error: "Task not found" });
        }

        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ error: "Failed to update task" });
    }
});

// ✅ 4️⃣ Delete a Task (DELETE /api/tasks/:taskId)
router.delete("/:taskId", async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.taskId);
        res.json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete task" });
    }
});

module.exports = router;
