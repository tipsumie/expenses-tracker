import React from 'react';
import ExpensesOutput from '../components/expenseOutput/ExpensesOutput';
import { useSelector } from 'react-redux';

const RecentExpense = () => {
  const expenses = useSelector((state) => state.expenses.expenses);

  return <ExpensesOutput expenses={expenses} expensePeriod='Last 7 Days' />;
};

export default RecentExpense;
