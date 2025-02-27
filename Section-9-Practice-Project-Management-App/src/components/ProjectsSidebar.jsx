import Button from "./Button";

export default function ProjectsSidebar({ handleAddViewProject, data, selectedProjectId }) {
  return (
    <aside className="bg-stone-900 my-5 rounded-r-xl pt-2 w-1/3 px-8 py-16 text-stone-50 md:w-72">
      <h1 className="uppercase mb-8 font-bold md:text-xl text-stone-200 pt-10">
        Your Projects
      </h1>
      <div>
        <Button
          onClick={() => {
            handleAddViewProject(1);
          }}
        >
          + Add Project
        </Button>
      </div>
      {(data && data.length > 0 ) ? <ul className="mt-8">

        {data.map((dataItem) => {
          let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800 truncate hover:overflow-visible";
          if(dataItem.id === selectedProjectId){
            cssClasses += " bg-stone-800 text-stone-200";
          }else{
            cssClasses += " text-stone-400"
          }

          return (
            <li key={dataItem.id}>
              <button
                onClick={() => handleAddViewProject(2, dataItem)}
                className={cssClasses}
              >
                {dataItem.title}
              </button>
            </li>
          );
        })}
      </ul>: ""}
    </aside>
  );
}
