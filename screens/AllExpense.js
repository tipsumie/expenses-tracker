import React from 'react';
import ExpensesOutput from '../components/ExpenseOutput/ExpensesOutput';
import { useSelector } from 'react-redux';

const AllExpense = () => {
  const expenses = useSelector((state) => state.expenses.expenses);
 
  return (
    <ExpensesOutput
      expenses={expenses}
      expensePeriod='total'
      fallbackText='No Expenses Found!'
    />
  );
};

export default AllExpense;
