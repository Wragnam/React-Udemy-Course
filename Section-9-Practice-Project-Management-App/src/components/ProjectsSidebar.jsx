import Button from "./Button";

export default function ProjectsSidebar({ handleAddViewProject, data }) {
  return (
    <aside className="bg-stone-900 my-5 rounded-r-xl pt-2 w-1/3 px-8 py-16 text-stone-50 md:w-72">
      <h1 className="uppercase mb-8 font-bold md:text-xl text-stone-200">
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
      <ul className="mt-8">
        {data.map((dataItem) => {
          return (
            <li key={dataItem.id}>
              <button
                onClick={() => handleAddViewProject(2, dataItem)}
                className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800 truncate hover:overflow-visible"
              >
                {dataItem.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
