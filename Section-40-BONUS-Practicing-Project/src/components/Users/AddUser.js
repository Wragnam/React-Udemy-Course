import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";
import Modal from "../Modal/Modal";

export default function AddUser({ onAddUser }) {
  const [userInput, setUserInput] = useState({
    name: "",
    age: "",
  });

  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (userInput.name.trim() === "" || userInput.age.trim() === "") {
      setIsOpen(true);
      return;
    }

    if (+userInput.age < 0) {
      setIsOpen(true);
      return;
    }

    const newId = Math.random();

    onAddUser({ ...userInput, id: newId });
  }

  return (
    <>
      {isOpen && <Modal onClose={handleCloseModal} />}
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
