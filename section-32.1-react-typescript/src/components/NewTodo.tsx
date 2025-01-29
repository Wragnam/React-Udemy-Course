import { useRef } from "react";

const NewTodo = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if(enteredText.trim().length === 0){
      //throw new Error
      return;
    }

    
  }

  return (
    <form onSubmit={submitHandler}>
      <label>Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef}></input>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
