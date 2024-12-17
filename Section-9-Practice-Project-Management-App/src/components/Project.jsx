import { useRef } from "react";
import Input from "./Input";

export default function Project({ handleComplete, handleAddProject }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();

  return (
      <div className="pt-20 space-y-5 w-96">
        <div className="float-right space-x-5">
          <button onClick={() => handleComplete(0)}>Cancel</button>
          <button
            className="bg-gray-900 p-1 text-white rounded-md pl-4 pr-4"
            onClick={() => {
              handleAddProject({
                title: title.current.value,
                description: description.current.value,
                date: date.current.value,
              });
              handleComplete(0);
            }}
          >
            Save
          </button>
        </div>
        <section className="float-left w-96">
        <form className="flex flex-col gap-2">
          <Input ref={title} label={"Title"} type={"text"} />
          <Input ref={description} label={"Description"} type="textarea" />
          <Input ref={date} label={"Due Date"} type="date" />
        </form>
        </section>
      </div>
  );
}
