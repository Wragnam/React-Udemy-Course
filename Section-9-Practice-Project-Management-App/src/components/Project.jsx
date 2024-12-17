import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function Project({ handleComplete, handleAddProject }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();
  const modalRef = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = date.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }
    handleAddProject({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDueDate,
    });
    handleComplete(0);
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-800 my-4">Invalid Input</h2>
        <p className="text-stone-700 mb-4">Looks like you forgot to enter a value</p>
        <p className="text-stone-700 mb-4">Please provide a valid input for every input field</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <button
            className="text-stone-800 hover:text-stone-950"
            onClick={() => handleComplete(0)}
          >
            Cancel
          </button>
          <button
            className="bg-stone-800 px-6 py-2 text-stone-50 hover:bg-stone-950 rounded-md"
            onClick={handleSave}
          >
            Save
          </button>
        </menu>
        <div>
          <Input ref={title} label={"Title"} type={"text"} />
          <Input ref={description} label={"Description"} type="textarea" />
          <Input ref={date} label={"Due Date"} type="date" />
        </div>
      </div>
    </>
  );
}
