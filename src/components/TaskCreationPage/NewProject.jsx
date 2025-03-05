import { useRef, priorityRef } from "react";
import Input from "./Input";
import Modal from "./Modal";


export default function NewProject({onAdd}){

    const modal = useRef();

    const titleRef = useRef();
    const descRef = useRef();
    const dueDateRef = useRef();

    function handleSave(){
        const enteredTitle = titleRef.current.value;
        const enteredDesc = descRef.current.value;
        const enteredDueDate = dueDateRef.current.value;
        const selectedPriority = document.querySelector('input[name="priority"]:checked')?.value;

        //validation..

        if(
            enteredTitle.trim() === '' || 
            enteredDesc.trim() === '' || 
            enteredDueDate.trim() === '' ||
            !selectedPriority){
                modal.current.open();
                return;
        }

        onAdd({
            title : enteredTitle,
            desc : enteredDesc,
            dueDate : enteredDueDate,
            priority: selectedPriority
        });
    }

    return(
        <>
        <Modal ref={modal} btnCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-slate-600 mb-4">Oops... looks like you forgot to enter a value.</p>
        <p className="text-slate-600 mb-4">Please make sure you provide a valid value for every input field.</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <button 
                    className="text-stone-400 hover:text-white rounded-md px-4 py-2 transition-all ease-in-out duration-300 "
                >
                        Cancel
                </button>
                <button 
                    className="text-stone-800 hover:text-black rounded-md px-4 py-2 transition-all ease-in-out duration-300 bg-stone-100"
                    onClick={handleSave}
                >
                        Save
                </button>
            </menu>
            <div>   
                <Input ref={titleRef} title="Title" type="text"/>
                <Input ref={descRef} title="Description"/>
                <Input ref={dueDateRef} title="Due Date" type="date"/>
                <Input ref={priorityRef} title="Priority" type="radio" options={["High", "Medium", "Low"]} name="priority" />
            </div>
        </div>
        </>
    );
}