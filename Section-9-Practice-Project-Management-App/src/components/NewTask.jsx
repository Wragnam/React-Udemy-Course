import { useRef } from "react";

export default function NewTask({ projectInfo, handleAddTask }) {
  const taskText = useRef();
  if (taskText.current && taskText.current.value) {
    taskText.current.value = "";
  }
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="bg-stone-200 rounded-sm shadow-md w-64 px-2 py-1"
        ref={taskText}
      ></input>
      <button className="text-stone-700 hover:text-stone-950"
        onClick={() => {
          handleAddTask(projectInfo.id, taskText.current.value);
          taskText.current.value = "";
        }}
      >
        Add Task
      </button>
    </div>
  );
}
