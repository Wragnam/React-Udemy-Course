import { useRef } from "react";
import Input from "./Input";

export default function Project({ handleComplete, handleAddProject }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();

  function handleSave(){
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = date.current.value;

    handleAddProject({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDueDate
    });
    handleComplete(0);
  }
 
    return (
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <button
            className="text-stone-800 hover:text-stone-950"
            onClick={() => handleComplete(0)}
          >
            Cancel
          </button>
          <button
            className="bg-stone-800 px-6 py-2 text-stone-50 hover:bg-stone-950 rounded-md"
            onClick={handleSave}
          >
            Save
          </button>
        </menu>
        <div className="float-left w-96">
          <div className="flex flex-col gap-2">
            <Input ref={title} label={"Title"} type={"text"} />
            <Input ref={description} label={"Description"} type="textarea" />
            <Input ref={date} label={"Due Date"} type="date" />
          </div>
        </div>
      </div>
    );
}
