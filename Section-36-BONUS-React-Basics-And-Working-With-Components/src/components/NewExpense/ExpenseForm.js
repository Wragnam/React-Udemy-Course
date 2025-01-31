import { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm({ onSaveExpenseData }) {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  function formChangeHandler(event, type) {
    const value = event.target.value;
    let changedData = {};
    if (type === "TITLE") {
      changedData = { title: value };
    } else if (type === "AMOUNT") {
      changedData = { amount: value };
    } else {
      changedData = { date: value };
    }

    setUserInput((prevUserInput) => {
      return { ...prevUserInput, ...changedData };
    });
  }

  function submitHandler(event) {
    event.preventDefault();

    onSaveExpenseData(userInput);

    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.title}
            onChange={(event) => formChangeHandler(event, "TITLE")}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={userInput.amount}
            min="0.01"
            step="0.01"
            onChange={(event) => formChangeHandler(event, "AMOUNT")}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={userInput.date}
            min="2023-01-01"
            max="2026-01-01"
            onChange={(event) => formChangeHandler(event, "DATE")}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
