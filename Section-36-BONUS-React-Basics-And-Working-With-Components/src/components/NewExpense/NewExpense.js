import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense({saveExpenseDataHandler}) {
  

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
