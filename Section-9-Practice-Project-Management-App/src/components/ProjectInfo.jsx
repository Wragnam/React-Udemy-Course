import { useRef } from "react";
import Tasks from "./Tasks";


export default function ProjectInfo({
  projectInfo,
  handleDeleteProject,
  handleCloseProject,
  handleAddTask,
  handleDeleteTask,
}) {
  

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
      <Tasks projectInfo={projectInfo} handleDeleteTask={handleDeleteTask} handleAddTask={handleAddTask}/>
    </div>
  );
}
