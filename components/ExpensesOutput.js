import { View } from 'react-native';
import React from 'react';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';

const ExpensesOutput = ({expenses, expensePeriod}) => {
  return (
    <View>
      <ExpensesSummary expenses={expenses} periodName={expensePeriod} />
      <ExpensesList />
    </View>
  );
};

export default ExpensesOutput;
