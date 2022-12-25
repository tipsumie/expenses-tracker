import { View, Text } from 'react-native';
import React from 'react';

const ExpensesSummary = ({ expenses, periodName }) => {
  const initialValue = 0;
  const sumExpenses = expenses.reduce(
    (accumulator, expense) => accumulator + expense.amount,
    initialValue
  );
  return (
    <View>
      <Text>{periodName}</Text>
      <Text>`${sumExpenses.toFixed(2)} B`</Text>
    </View>
  );
};

export default ExpensesSummary;
