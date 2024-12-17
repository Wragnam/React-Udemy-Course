export default function Projects({ handleAddViewProject, data }) {
  return (
    <section className="bg-gray-950 my-5 rounded-md pt-2 w-60">
      <section className="">
        <h1 className="text-white text-center uppercase my-4 font-bold">
          Your Projects
        </h1>
        <button
          onClick={() => {
            handleAddViewProject(1);
          }}
          className="bg-stone-700 text-gray-500 rounded-md p-1 hover:bg-stone-600"
        >
          + Add Project
        </button>
      </section>
      <ol className="space-y-2 pt-3 pl-3">
        {data.map((dataItem) => {
          return (
            <li key={dataItem.id}>
              <button
                onClick={() => handleAddViewProject(2, dataItem)}
                className="text-white hover:bg-stone-600 truncate hover:overflow-visible"
              >
                {dataItem.title}
              </button>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
