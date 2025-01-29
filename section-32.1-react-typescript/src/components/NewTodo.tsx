const NewTodo = () => {
  function submitHandler(event: React.FormEvent) {
    event.preventDefault();
  }

  return (
    <form onSubmit={submitHandler}>
      <label>Todo Text</label>
      <input type="text" id="text"></input>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
