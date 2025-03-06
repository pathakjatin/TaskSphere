const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./src/models/User.model"); // Import your models
const Project = require("./src/models/Project.model");
const Task = require("./src/models/Tasks.model");

dotenv.config(); // Load environment variables

// Connect to MongoDB
async function testDatabase() {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ MongoDB Connected for Testing");

        // 1️⃣ Create a Test User
        const user = new User({
            uid: "test123",
            email: "test@example.com",
            firstName: "John",
            lastName: "Doe",
        });
        await user.save();
        console.log("🟢 User Saved:", user);

        // 2️⃣ Create a Test Project
        const project = new Project({
            title: "Sample Project",
            desc: "This is a test project",
            priority: "High",
            dueDate: new Date(),
            userId: user.uid, // Linking project to the test user
        });
        await project.save();
        console.log("🟢 Project Saved:", project);

        // 3️⃣ Create a Test Task
        const task = new Task({
            text: "Sample Task",
            completed: false,
            projectId: project._id, // Linking task to the project
            userId: user.uid,
        });
        await task.save();
        console.log("🟢 Task Saved:", task);

        // 4️⃣ Fetch and Log All Projects
        const projects = await Project.find();
        console.log("📋 All Projects:", projects);

        // 5️⃣ Fetch and Log All Tasks
        const tasks = await Task.find();
        console.log("📋 All Tasks:", tasks);

        // Close connection after testing
        mongoose.connection.close();
        console.log("✅ Test Completed & MongoDB Connection Closed");

    } catch (error) {
        console.error("❌ Error:", error);
        mongoose.connection.close();
    }
}

// Run the test
testDatabase();
