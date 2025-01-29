import { useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todo-context";

const NewTodo: React.FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const { addTodo } = useContext(TodosContext);

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      //throw new Error
      return;
    }

    addTodo(enteredText);
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label>Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef}></input>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
