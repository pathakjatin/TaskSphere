import Button from "./Button.jsx";

export default function Sidebar({onStartAddProject, projects, onSelectProject, selectedProjectId}){
    return(
        <aside className="bg-white text-black min-h-screen w-1/5 p-8 rounded-r-xl shadow-3xl gap-4">
            <h1 className="md:text-xl text-center uppercase mb-8 font-bold">Your Projects</h1>
            <div className="">
            <Button 
                onClick={onStartAddProject}
            >
                + New Project
            </Button>
            </div>
            <ul className="mt-8">
                {
                    projects.map((project)=>{

                        let cssClasses = "w-full text-left px-2 py-1 my-1 rounded-md text-sm hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out"
                        if(project.id === selectedProjectId){
                            cssClasses += " bg-stone-800 text-stone-200"
                        }else{
                            cssClasses += " text-stone-700 "
                        }

                        return <li key={project.id}>
                            <button 
                                className={cssClasses}
                                onClick={() => onSelectProject(project.id)}
                            >
                                {project.title}
                            </button>
                        </li>
                    })
                }
            </ul>
            
        </aside>
    );
}