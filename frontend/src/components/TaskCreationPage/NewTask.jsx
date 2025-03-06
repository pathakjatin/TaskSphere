import { useState } from "react";


export default function NewTask({onAdd}){

    const [enteredTask , setEnteredTask] = useState('');

    function handleChange(event){
        setEnteredTask(event.target.value)
    }

    function handleClick(){
        if(enteredTask.trim() === ''){
            return;
        }
        onAdd(enteredTask);
        setEnteredTask('');
    }

    return(
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