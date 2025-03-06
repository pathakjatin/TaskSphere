import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete, onToggleComplete }) {
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-300 mb-4">Tasks</h2>
            <NewTask onAdd={onAdd} />

            {tasks.length === 0 && <p className="my-4 text-stone-400">This project does not have any tasks yet.</p>}

            {tasks.length > 0 && (
                <ul className="p-4 mt-8 rounded-md bg-stone-300">
                    {tasks.map((task) => (
                        <li key={task.id} className="flex justify-between items-center my-2 text-black">
                            <span 
                                className={` w-full ${task.completed ? "line-through text-stone-500" : ""}`}
                            >
                                {task.text}
                            </span>
                            <div className="flex justify-between">
                            <button 
                                className={`mr-4 text-green-600 hover:text-green-400 ${task.completed ? "opacity-50 cursor-not-allowed" : ""}`}
                                onClick={() => {
                                    // console.log("Marking task as done:", task.id); // Debugging
                                    onToggleComplete(task.id);
                                }}
                                
                                disabled={task.completed} // Prevent clicking again
                            >
                                Done
                            </button>
                                <button className="text-stone-700 hover:text-red-500" onClick={() => onDelete(task.id)}>
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
