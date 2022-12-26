import React from 'react';
import ExpensesOutput from '../components/expenseOutput/ExpensesOutput';

const RecentExpense = () => {
  return <ExpensesOutput expensePeriod='Last 7 Days' />;
};

export default RecentExpense;
