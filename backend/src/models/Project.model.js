const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String , required: true},
    priority: { type: String, enum: ["Low", "Medium", "High"], default: "Medium" },
    dueDate: { type: Date, required: true },
    userId: { type: String, required: true }, // Firebase UID to link project to a user
}, { timestamps: true }); // ✅ Useful for tracking project creation & updates

module.exports = mongoose.model("Project", ProjectSchema);
