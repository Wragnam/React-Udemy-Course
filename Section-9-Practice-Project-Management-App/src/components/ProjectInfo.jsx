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
    if (taskText.current && taskText.current.value){
        taskText.current.value ="";
    }

  return (
    <section className="py-14 space-y-5">
      <section className="flex-row flow-root">
        <div className="space-y-4 float-left">
          <div>
            <h1 className="font-bold text-3xl">{projectInfo.title}</h1>
            <h2 className="text-gray-400">{projectInfo.date}</h2>
          </div>
          <p className="">{projectInfo.description}</p>
        </div>
        <button
          className="float-right"
          onClick={() => {
            handleCloseProject(0);
            handleDeleteProject(projectInfo.id);
          }}
        >
          Delete
        </button>
      </section>
      <hr style={{ borderTopWidth: "3px" }} />
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
    </section>
  );
}
