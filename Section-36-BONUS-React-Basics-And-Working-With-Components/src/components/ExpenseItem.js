import "./ExpenseItem.css";

export default function ExpenseItem() {
  const expenseDate = new Date(2025, 1, 30);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 134.87;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}
