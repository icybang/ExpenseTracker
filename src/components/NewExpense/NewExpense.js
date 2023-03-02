import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";
import { useState } from "react";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startIsEditingHandler = () => {
    setIsEditing(true);
  };

  const stopIsEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startIsEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <NewExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopIsEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
