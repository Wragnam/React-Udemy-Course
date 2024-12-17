import { useRef } from "react";

const headerClass = "font-bold text-2xl";

export default function ProjectInfo({
  projectInfo,
  handleDeleteProject,
  handleCloseProject,
  handleAddTask,
  handleDeleteTask,
}) {
  const taskText = useRef();
  if (taskText.current && taskText.current.value) {
    taskText.current.value = "";
  }

  const formattedDate = new Date(projectInfo.date).toLocaleDateString('en-US',{
    year:'numeric',
    month: 'short',
    day:'numeric'
  });
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex justify-between">
          <h1 className="font-bold text-3xl text-stone-600 mb-2">{projectInfo.title}</h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={() => {
              handleCloseProject(0);
              handleDeleteProject(projectInfo.id);
            }}
          >
            Delete
          </button>
        </div>
        <h2 className="text-stone-400 mb-4">{formattedDate}</h2>
        <p className="text-stone-600 whitespace-pre-wrap">{projectInfo.description}</p>
      </header>
      <section className="space-y-4">
        <h2 className={headerClass}>Tasks</h2>
        <div className="space-x-3">
          <input
            type="text"
            className="bg-stone-200 rounded-sm shadow-md"
            ref={taskText}
          ></input>
          <button
            onClick={() => {
              handleAddTask(projectInfo.id, taskText.current.value);
              taskText.current.value = "";
            }}
          >
            Add Task
          </button>
        </div>
        {projectInfo.tasks && projectInfo.tasks.length > 0 ? (
          <ol className="bg-stone-200 rounded-md space-y-2">
            {projectInfo.tasks.map((task) => {
              return (
                <li key={task.id} className="flow-root">
                  <p className="float-left">{task.task}</p>
                  <button
                    className="float-right"
                    onClick={() => handleDeleteTask(projectInfo.id, task.id)}
                  >
                    Clear
                  </button>
                </li>
              );
            })}
          </ol>
        ) : (
          <p>This project does not have any tasks yet</p>
        )}
      </section>
    </div>
  );
}
