import { useState } from "react";
import Project from "./components/Project";
import ProjectInfo from "./components/ProjectInfo";
import NoProjectSelected from "./components/NoProjectSelected";
import { v4 as uuid } from 'uuid';
import ProjectsSidebar from "./components/ProjectsSidebar";

const initialProjects = [
  {
    id: 1,
    title: "First Project",
    description:
      "This is my first project, and I am testing the length of the text block this is inserted into",
    date: "2024-03-11",
    tasks: [
      {
        id: 1,
        task: "Learn advanced concepts",
      },
      {
        id: 2,
        task: "Learn the basics",
      },
    ],
  },
];

function App() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [projects, setProjects] = useState(initialProjects);
  const [currentProject, setCurrentProject] = useState(null);

  function handleOpenAddViewProject(value, data = null) {
    setCurrentScreen(value);
    if (data) {
      setCurrentProject(data);
    }else{
      setCurrentProject(null);
    }
  }

  function addProject(projectData) {
    setProjects((oldProjectList) => {
      return [...oldProjectList, { id: uuid(), ...projectData }];
    });
  }

  function deleteProject(id) {
    setProjects((oldProjectList) =>
      oldProjectList.filter((project) => project.id != id)
    );
  }

  function addTask(projectId, text) {
    setProjects((oldProjectList) => {
      let project = oldProjectList.find((project) => project.id === projectId);
      if (!project.tasks) {
        project.tasks = [{ id: uuid(), task: text }];
      } else {
        project.tasks.push({ id: uuid(), task: text });
      }

      return [...oldProjectList];
    });
  }

  function deleteTask(projectId, taskId) {
    setProjects((oldProjectList) => {
      let project = oldProjectList.find((project) => project.id === projectId);

      project.tasks = project.tasks.filter((task) => task.id !== taskId);
      return [...oldProjectList];
    });
  }

  return (
    <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar
          handleAddViewProject={handleOpenAddViewProject}
          data={projects}
          selectedProjectId={currentProject ? currentProject.id : null}
        />
        {currentScreen === 0 && (
          <NoProjectSelected handleAddProject={handleOpenAddViewProject} />
        )}
        {currentScreen === 1 && (
          <Project
            handleComplete={handleOpenAddViewProject}
            handleAddProject={addProject}
          />
        )}
        {currentScreen === 2 && (
          <ProjectInfo
            projectInfo={currentProject}
            handleDeleteProject={deleteProject}
            handleCloseProject={handleOpenAddViewProject}
            handleAddTask={addTask}
            handleDeleteTask={deleteTask}
          />
        )}
    </main>
  );
}

export default App;
