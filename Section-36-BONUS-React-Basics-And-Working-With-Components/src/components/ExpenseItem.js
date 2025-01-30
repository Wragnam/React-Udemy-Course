import "./ExpenseItem.css";

export default function ExpenseItem({ expense }) {
  const month = expense.date.toLocaleString("en-US", { month: "long" });
  const year = expense.date.toLocaleString("en-US", { day: "2-digit" });
  const day = expense.date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{expense.title}</h2>
        <div className="expense-item__price">${expense.amount}</div>
      </div>
    </div>
  );
}
