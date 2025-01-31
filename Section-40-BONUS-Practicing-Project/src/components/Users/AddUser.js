import classes from "./AddUser.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";
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
      <Card>
        <form onSubmit={handleSubmit}>
          <div className={classes.input}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={(event) =>
                handleInputChange("NAME", event.target.value)
              }
              value={userInput.name}
            />
          </div>
          <div className={classes.input}>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              min="0"
              step="1"
              value={userInput.age}
              onChange={(event) => handleInputChange("AGE", event.target.value)}
            />
          </div>
          <Button text="Add User" />
        </form>
      </Card>
    </>
  );
}
