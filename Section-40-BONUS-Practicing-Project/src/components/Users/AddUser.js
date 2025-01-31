import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";
import Modal from "../UI/Modal";

export default function AddUser({ onAddUser }) {
  const [userInput, setUserInput] = useState({
    name: "",
    age: "",
  });

  const [error, setError] = useState();

  function handleInputChange(type, value) {
    if (type === "NAME") {
      setUserInput((prevInput) => {
        return { ...prevInput, name: value };
      });
    } else {
      setUserInput((prevInput) => {
        return { ...prevInput, age: value };
      });
    }
  }

  function handleCloseModal() {
    setError(undefined);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      userInput.name.trim().length === 0 ||
      userInput.age.trim().length === 0
    ) {
      setError({
        title: "Name or age is empty!",
        message: "Please enter a valid name or age (non-empty values).",
      });
      return;
    }

    if (+userInput.age < 1) {
      setError({
        title: "Invalid age provided!",
        message: "Age cannot be less than 1.",
      });
      return;
    }

    const newId = Math.random();

    onAddUser({ ...userInput, id: newId });
    setUserInput({ name: "", age: "" });
  }

  return (
    <>
      {error && (
        <Modal
          onClose={handleCloseModal}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={(event) => handleInputChange("NAME", event.target.value)}
            value={userInput.name}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            min="0"
            step="1"
            value={userInput.age}
            onChange={(event) => handleInputChange("AGE", event.target.value)}
          />
          <Button>Add user</Button>
        </form>
      </Card>
    </>
  );
}
