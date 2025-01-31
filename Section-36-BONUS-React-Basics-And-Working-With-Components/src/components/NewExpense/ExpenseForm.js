import { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm() {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  function formChangeHandler(event, type) {
    let changedData = {};
    if (type === "TITLE") {
      changedData = { title: event.target.value };
    } else if (type === "AMOUNT") {
      changedData = { amount: event.target.value };
    } else {
      changedData = { date: event.target.value };
    }

    setUserInput((prevUserInput) => {
      return { ...prevUserInput, ...changedData };
    });
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={(event) => formChangeHandler(event, "TITLE")}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={(event) => formChangeHandler(event, "AMOUNT")}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
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
