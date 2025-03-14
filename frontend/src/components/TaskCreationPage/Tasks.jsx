import NewTask from "./NewTask";
import API from "../../api/api";

export default function Tasks({ projectId, tasks, setTasks }) {
    async function handleToggleComplete(taskId) {
        try {
            const updatedTask = tasks.map(task =>
                task._id === taskId ? { ...task, completed: true } : task
            );

            await API.put(`/tasks/${taskId}`, { completed: true });

            setTasks(updatedTask); // ✅ Update UI immediately
        } catch (error) {
            console.error("❌ Error updating task:", error);
        }
    }

    async function handleDelete(taskId) {
        try {
            await API.delete(`/tasks/${taskId}`);
            setTasks(prevTasks => prevTasks.filter(task => task._id !== taskId)); // ✅ Remove from UI
        } catch (error) {
            console.error("❌ Error deleting task:", error);
        }
    }

    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-300 mb-4">Tasks</h2>
            <NewTask projectId={projectId} setTasks={setTasks} />

            {tasks.length === 0 && <p className="my-4 text-stone-400">No tasks yet.</p>}

            {tasks.length > 0 && (
                <ul className="p-4 mt-8 rounded-md bg-stone-300">
                    {tasks.map(task => (
                        <li key={task._id} className="flex justify-between items-center my-2 text-black">
                            <span className={`w-full ${task.completed ? "line-through text-stone-500" : ""}`}>
                                {task.text}
                            </span>
                            <div className="flex justify-between">
                                <button 
                                    className={`mr-4 text-green-600 hover:text-green-400 ${task.completed ? "opacity-50 cursor-not-allowed" : ""}`}
                                    onClick={() => handleToggleComplete(task._id)}
                                    disabled={task.completed}
                                >
                                    Done
                                </button>
                                <button 
                                    className="text-stone-700 hover:text-red-500"
                                    onClick={() => handleDelete(task._id)}
                                >
                                    Clear
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
