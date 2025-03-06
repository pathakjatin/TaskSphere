const express = require("express");
const mongoose = require("mongoose")
const Project = require("../models/Project.model");

const router = express.Router();

// ✅ 1️⃣ Create a New Project (POST /api/projects)
router.post("/", async (req, res) => {
    try {
        const { title, desc, priority, dueDate, userId } = req.body;

        const newProject = new Project({
            title,
            desc,
            priority,
            dueDate,
            userId,
        });

        await newProject.save();
        res.status(201).json(newProject);
    } catch (error) {
        res.status(500).json({ error: "Failed to create project" });
    }
});

// ✅ 2️⃣ Get All Projects for a User (GET /api/projects/:userId)

router.get("/:id", async (req, res) => {
    try {
        console.log("🔍 Fetching project for ID:", req.params.id);

        let project;
        if (mongoose.Types.ObjectId.isValid(req.params.id)) {
            project = await Project.findById(req.params.id);
        } else {
            project = await Project.find({ userId: req.params.id });
        }

        if (!project || (Array.isArray(project) && project.length === 0)) {
            console.warn("⚠️ Project not found for ID:", req.params.id);
            return res.status(404).json({ message: "Project not found" });
        }

        console.log("✅ Project found:", project);
        res.status(200).json(project);
    } catch (error) {
        console.error("❌ Server error while fetching project:", error);
        res.status(500).json({ message: "Server error" });
    }
});
// ✅ 3️⃣ Update a Project (PUT /api/projects/:projectId)
router.put("/:projectId", async (req, res) => {
    try {
        const { title, desc, priority, dueDate } = req.body;

        const updatedProject = await Project.findByIdAndUpdate(
            req.params.projectId,
            { title, desc, priority, dueDate },
            { new: true }
        );

        if (!updatedProject) {
            return res.status(404).json({ error: "Project not found" });
        }

        res.json(updatedProject);
    } catch (error) {
        res.status(500).json({ error: "Failed to update project" });
    }
});

// ✅ 4️⃣ Delete a Project (DELETE /api/projects/:projectId)
router.delete("/:projectId", async (req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.projectId);
        res.json({ message: "Project deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete project" });
    }
});

module.exports = router;
