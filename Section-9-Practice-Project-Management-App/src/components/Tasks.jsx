import { useRef } from "react";
import NewTask from './NewTask'
const headerClass = "font-bold text-2xl text-stone-700 mb-4";
export default function Tasks({projectInfo, handleDeleteTask, handleAddTask}){
    

    return (
        <section className="space-y-4">
        <h2 className={headerClass}>Tasks</h2>
        <NewTask projectInfo={projectInfo} handleAddTask={handleAddTask}/>
        {projectInfo.tasks && projectInfo.tasks.length > 0 ? (
          <ul className="bg-stone-100 rounded-md p-4 mt-8">
            {projectInfo.tasks.map((task) => {
              return (
                <li key={task.id} className="flex justify-between my-4">
                  <span>{task.task}</span>
                  <button
                  className="text-stone-700 hover:text-red-500"
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