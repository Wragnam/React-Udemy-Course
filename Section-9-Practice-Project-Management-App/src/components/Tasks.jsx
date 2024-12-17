import { useRef } from "react";
import NewTask from './NewTask'
const headerClass = "font-bold text-2xl text-stone-700 mb-4";
export default function Tasks({projectInfo, handleDeleteTask, handleAddTask}){
    

    return (
        <section className="space-y-4">
        <h2 className={headerClass}>Tasks</h2>
        <NewTask projectInfo={projectInfo} handleAddTask={handleAddTask}/>
        {projectInfo.tasks && projectInfo.tasks.length > 0 ? (
          <ul className="bg-stone-200 rounded-md space-y-2">
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
          </ul>
        ) : (
          <p className="text-stone-800 my-4">This project does not have any tasks yet</p>
        )}
      </section>
    )
}