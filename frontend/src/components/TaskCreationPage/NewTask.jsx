import { useState } from "react";
import API from "../../api/api";

export default function NewTask({ projectId, setTasks }) {
    const [enteredTask, setEnteredTask] = useState("");

    function handleChange(event) {
        setEnteredTask(event.target.value);
    }

    async function handleClick() {
        if (enteredTask.trim() === "") {
            console.error("❌ Task text is empty.");
            return alert("Task text cannot be empty.");
        }

        const user = JSON.parse(localStorage.getItem("user")); // ✅ Get user from localStorage

        if (!user || !user.uid) {
            console.error("❌ User not found in localStorage.");
            return alert("User not logged in. Please log in first.");
        }

        if (!projectId) {
            console.error("❌ Project ID is missing.");
            return alert("No project selected. Please select a project first.");
        }

        const taskData = {
            text: enteredTask,
            projectId,
            userId: user.uid, // ✅ Ensure userId is present
            completed: false
        };

        // console.log("🟡 Sending task data:", taskData); ✅ Debugging

        try {
            const response = await API.post("/tasks", taskData);
            // console.log("✅ Task successfully added:", response.data);
            setTasks(prevTasks => [...prevTasks, response.data]); // ✅ Update UI
            setEnteredTask("");
        } catch (error) {
            console.error("❌ Error adding task:", error.response?.data || error);
        }
    }


    return (
        <div className="flex items-center gap-4">
            <input 
                type="text" 
                className="w-64 rounded-sm px-2 py-1 bg-stone-500 text-stone-100 focus:border-stone-100 focus:outline-none"
                onChange={handleChange}
                value={enteredTask}
            />
            <button 
                className="text-stone-400 hover:text-stone-50 p-2 rounded-md border-2"
                onClick={handleClick}
            >
                Add Task
            </button>
        </div>
    );
}
