import { useRef, useState } from "react";

export default function NewTask({ projectInfo, handleAddTask }) {
  const [enteredTask, setEnteredTask] = useState("");
  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    handleAddTask(projectInfo.id, enteredTask);
    setEnteredTask("");
  }
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="bg-stone-200 rounded-sm shadow-md w-64 px-2 py-1"
        onChange={handleChange}
        value={enteredTask}
      ></input>
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}
