const express = require("express");
const mongoose = require("mongoose");
const Task = require("../models/Tasks.model");

const router = express.Router();

// ✅ 1️⃣ Create a New Task (POST /api/tasks)
router.post("/", async (req, res) => {
    try {
        console.log("🟡 Task creation request received:", req.body); // ✅ Debugging

        let { text, projectId, userId, completed } = req.body;

        // ✅ Log values to check if they are missing
        console.log("Task Text:", text);
        console.log("Project ID:", projectId);
        console.log("User ID:", userId);

        if (!text || !projectId || !userId) {
            console.error("❌ Missing required fields:", { text, projectId, userId });
            return res.status(400).json({ error: "Task text, projectId, and userId are required." });
        }

        if (!mongoose.Types.ObjectId.isValid(projectId)) {
            return res.status(400).json({ error: "Invalid projectId format." });
        }

        const task = new Task({
            text,
            projectId: new mongoose.Types.ObjectId(projectId), // ✅ Convert to ObjectId
            userId,
            completed: completed || false
        });

        await task.save();
        console.log("✅ Task successfully created:", task);

        res.status(201).json(task);
    } catch (error) {
        console.error("❌ Error creating task:", error.message);
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
});

// ✅ 2️⃣ Get All Tasks for a Project (GET /api/tasks/:projectId)
router.get("/user/:userId", async (req, res) => {
    try {
        const { userId } = req.params;

        console.log("🟡 Fetching tasks for user:", userId);

        const tasks = await Task.find({ userId });

        if (!tasks || tasks.length === 0) {
            return res.status(404).json({ error: "No tasks found for this user." });
        }

        console.log("✅ Tasks Found:", tasks);
        res.status(200).json(tasks);
    } catch (error) {
        console.error("❌ Error fetching tasks:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// ✅ 3️⃣ Mark a Task as Completed (PUT /api/tasks/:taskId/complete)
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { completed } = req.body;

        console.log("🟡 Updating Task ID:", id);

        // ✅ Validate if taskId is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid task ID format." });
        }

        // ✅ Find and update the task
        const updatedTask = await Task.findByIdAndUpdate(
            id,
            { completed },
            { new: true } // ✅ Return updated document
        );

        if (!updatedTask) {
            return res.status(404).json({ error: "Task not found." });
        }

        console.log("✅ Task updated:", updatedTask);
        res.status(200).json(updatedTask);
    } catch (error) {
        console.error("❌ Error updating task:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
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
