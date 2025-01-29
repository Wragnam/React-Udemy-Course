import { useContext } from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todo-context";

const Todos: React.FC = () => {
  const { items, removeTodo } = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onClick={() => removeTodo(item.id)}
        />
      ))}
    </ul>
  );
};
export default Todos;
