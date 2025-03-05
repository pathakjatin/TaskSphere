import Tasks from "./tasks";

export default function SelectedProject({project, onDelete, onAddTask, onDeleteTask, tasks, onToggleComplete}){

    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    const projectTasks = tasks.filter(task => task.projectId === project.id);

    const totalTasks = projectTasks.length;
    const completedTasks = projectTasks.filter(task => task.completed).length;
    const completionPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

    return(
    <div className="w-[35rem] mt-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-600">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-stone-200 mb-2 underline">{project.title}</h1>
                <button 
                    className="text-stone-200 hover:text-red-500 transition-colors duration-300 ease-in-out p-2 border-2 border-stone-100 rounded-md"
                    onClick={onDelete}
                >
                    Delete
                </button>
            </div>
            <p className="mb-4 text-stone-300">Deadline : {formattedDate}</p>
            <p className="text-stone-300 whitespace-pre-wrap mb-4 border-2 border-amber-50 rounded-md p-2">{project.desc}</p>
            <div className="flex items-center justify-between">
                    <p className="font-bold text-stone-300">Priority: {project.priority}</p>
                    <div className="flex items-center gap-4">
                    <div className="w-40 h-2 bg-gray-700 rounded-md overflow-hidden">
                        <div 
                            className="h-full bg-green-500 transition-all duration-300"
                            style={{ width: `${completionPercentage}%` }}
                        ></div>
                    </div>
                    <p className="text-stone-300 text-sm">{Math.round(completionPercentage)}%</p>
                    </div>
                    
                </div>
        </header>
        <Tasks
            onAdd={onAddTask}
            onDelete={onDeleteTask}
            tasks={tasks}
            onToggleComplete={onToggleComplete}
        />
    </div>
    );
}