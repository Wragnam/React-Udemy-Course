import { useState } from "react";
import Project from "./components/Project";
import Projects from "./components/Projects";
import ProjectInfo from "./components/ProjectInfo";
import NoProjectSelected from "./components/NoProjectSelected";

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
    }
  }

  function addProject(newProject) {
    let idx = 0;
    if (projects && projects.length > 0) {
      idx = projects[projects.length - 1].id + 1;
    }
    setProjects((oldProjectList) => {
      return [...oldProjectList, { id: idx, ...newProject }];
    });
  }

  function deleteProject(id) {
    setProjects((oldProjectList) =>
      oldProjectList.filter((project) => project.id != id)
    );
  }

  function addTask(projectId, text) {
    let idx = 0;
    setProjects((oldProjectList) => {
      let project = oldProjectList.find((project) => project.id === projectId);
      if (project.tasks && project.tasks.length > 0) {
        idx = project.tasks[project.tasks.length - 1].id + 1;
      }
      if (!project.tasks) {
        project.tasks = [{ id: idx, task: text }];
      } else {
        project.tasks.push({ id: idx, task: text });
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
        <Projects
          handleAddViewProject={handleOpenAddViewProject}
          data={projects}
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
