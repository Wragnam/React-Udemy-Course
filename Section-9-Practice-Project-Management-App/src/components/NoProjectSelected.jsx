import image from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({ handleAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={image} alt="An empty task list" className="w-16 h-16 object-contain mx-auto"/>
      <h1 className="text-stone-500 font-bold text-xl my-4">No Project Selected</h1>
      <h2 className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </h2>
      <p className="mt-8">
        <Button
          onClick={() => handleAddProject(1)}
        >
          Create new project
        </Button>
      </p>
    </div>
  );
}
