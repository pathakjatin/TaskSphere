import { useState } from "react";
import NewProject from "../components/TaskCreationPage/NewProject";
import NoProjectSelected from "../components/TaskCreationPage/NoProjectSelected";
import Sidebar from "../components/TaskCreationPage/Sidebar";
import SelectedProject from "../components/TaskCreationPage/SelectedProject";

export default function TaskCreationPage(){

    const [projectState , setProjectState] = useState({
        selectedProjectId : undefined,
        projects : [],
        tasks: []
    });

    function handleSelectProject(id){
        setProjectState(prevState => {
            return{
                ...prevState,
                selectedProjectId : id
            };
        });
    }

    function handleStartAddProject(){
        setProjectState(prevState => {
            return{
                ...prevState,
                selectedProjectId : null
            };
        });
    }

    function handleAddTask(text){
        setProjectState(prevState => {
            const taskId = Math.random();
            const newTask = {
                text: text,
                projectId : prevState.selectedProjectId , 
                id : taskId,
                completed:false,
            };

            return{
                ...prevState,
                tasks:[...prevState.tasks, newTask]
            };
        });
    }
    function handleToggleComplete(taskId) {
        // console.log("Toggling task:", taskId);
    
        setProjectState(prevState => {
            const updatedTasks = prevState.tasks.map(task =>
                task.id === taskId && task.projectId === prevState.selectedProjectId
                    ? { ...task, completed: true }
                    : task
            );
    
            // console.log("Updated tasks:", updatedTasks); Debugging
    
            return {
                ...prevState,
                tasks: updatedTasks
            };
        });
    }
    
    function handleDeleteTask(id) {
        setProjectState(prevState => ({
            ...prevState,
            tasks: prevState.tasks.filter(task =>
                task.id !== id || task.projectId !== prevState.selectedProjectId
            )
        }));
    }

    function handleAddProject(projectData){
        setProjectState(prevState => {
            const projectId = Math.random();
            const newProject = {
                ...projectData, 
                id : projectId
            };

            return{
                ...prevState,
                selectedProjectId: undefined,
                projects:[...prevState.projects, newProject]
            };
        });
    }
    function handleDeleteProject(){
            setProjectState(prevState => {
                return{
                    ...prevState,
                    selectedProjectId : undefined,
                    projects : prevState.projects.filter((project)=>
                        project.id !== prevState.selectedProjectId
                    )
                };
            });
    }

    // console.log(projectState)
    
    const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId)
    // console.log("Selected Project:", selectedProject);
    let content = <SelectedProject 
                    project={selectedProject}
                    onDelete={handleDeleteProject}
                    onAddTask={handleAddTask}
                    onDeleteTask={handleDeleteTask}
                    tasks={projectState.tasks}
                    onToggleComplete={handleToggleComplete}
                />;

    if(projectState.selectedProjectId === null){
        content = <NewProject onAdd={handleAddProject}/>
    }else if(projectState.selectedProjectId === undefined){
        content = <NoProjectSelected 
        onStartAddProject={handleStartAddProject}
    />
    }

    return(
        <main className="h-screen my-8 bg-black text-amber-50 relative z-[100] top-20 flex gap-8">
            <Sidebar
                onStartAddProject={handleStartAddProject}
                projects={projectState.projects}
                onSelectProject={handleSelectProject}
                selectedProjectId={projectState.selectedProjectId}
            />
            {content}
        </main>
    );
}