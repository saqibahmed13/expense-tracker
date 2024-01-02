// ExpenseList.js
import React from 'react';

const ExpenseList = ({ expenses, onDeleteExpense }) => {
  const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.title} - Rs{' '}{expense.amount}{'/-'}{' '}
            <button onClick={() => onDeleteExpense(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div className="total">Total Expense: Rs{' '}{totalExpense}</div>
    </div>
  );
};

export default ExpenseList;
