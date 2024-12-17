import image from "../assets/no-projects.png";

export default function NoProject({handleAddProject}) {
  return (
    <section className="flex flex-col items-center space-y-3 pt-40 pl-52">
      <img src={image} className="size-14"/>
      <h1 className="text-gray-500 font-bold text-xl">No Project Selected</h1>
      <h2 className="text-gray-500">Select a project or get started with a new one</h2>
      <button onClick={()=>handleAddProject(1)} className="bg-gray-950 text-gray-400 p-2 rounded-md hover:bg-gray-800 pl-4 pr-4" >Create new project</button>
    </section>
  );
}
