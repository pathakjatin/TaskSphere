import useProjectDetails from "../../hooks/useProjectDetails";
import useProjectTasks from "../../hooks/useProjectTasks"; // ✅ Import tasks hook
import Tasks from "./Tasks";

export default function SelectedProject({ projectId, onDelete }) {
    const { project, loading: projectLoading } = useProjectDetails(projectId);
    const { tasks, loading: tasksLoading, setTasks } = useProjectTasks(projectId); // ✅ Fetch tasks dynamically

    if (projectLoading) return <p className="text-white">Loading project...</p>;
    if (!project) return <p className="text-red-500">Project not found.</p>;

    const formattedDate = project.dueDate 
        ? new Date(project.dueDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        })
        : "No due date";

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((task) => task.completed).length;
    const completionPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

    return (
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-600">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-200 mb-2 underline">
                        {project?.title || "No Title"}
                    </h1>
                    <button
                        className="text-stone-200 hover:text-red-500 transition-colors duration-300 ease-in-out p-2 border-2 border-stone-100 rounded-md"
                        onClick={onDelete}
                    >
                        Delete
                    </button>
                </div>
                <p className="mb-4 text-stone-300">Deadline: {formattedDate}</p>
                <p className="text-stone-300 whitespace-pre-wrap mb-4 border-2 border-amber-50 rounded-md p-2">
                    {project?.desc || "No Description"}
                </p>
                <div className="flex items-center justify-between">
                    <p className="font-bold text-stone-300">Priority: {project?.priority || "No Priority"}</p>
                    <div className="flex items-center gap-4">
                        <div className="w-40 h-2 bg-gray-700 rounded-md overflow-hidden">
                            <div className="h-full bg-green-500 transition-all duration-300" 
                                style={{ width: `${completionPercentage}%` }}
                            ></div>
                        </div>
                        <p className="text-stone-300 text-sm">{Math.round(completionPercentage)}%</p>
                    </div>
                </div>
            </header>

            {/* ✅ Pass projectId and setTasks to handle updates */}
            <Tasks projectId={projectId} tasks={tasks} setTasks={setTasks} />
        </div>
    );
}
