import React from 'react';
import ExpensesOutput from '../components/expenseOutput/ExpensesOutput';
import { useSelector } from 'react-redux';
import { getDateMinusDays } from '../utils/date';

const RecentExpense = () => {
  const expenses = useSelector((state) => state.expenses.expenses);

  const recentExpense = expenses?.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date >= date7DaysAgo;
  });
  return (
    <ExpensesOutput
      expenses={recentExpense}
      expensePeriod='Last 7 Days'
      fallbackText='No Expenses for last 7 Days'
    />
  );
};

export default RecentExpense;
