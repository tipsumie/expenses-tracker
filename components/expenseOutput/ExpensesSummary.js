import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { COLORS } from '../../constants';

const ExpensesSummary = ({ expenses, periodName }) => {
  const initialValue = 0;
  const sumExpenses = expenses?.reduce(
    (accumulator, expense) => accumulator + expense.amount,
    initialValue
  );
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>{sumExpenses.toFixed(2)} B</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: COLORS.primary50,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  period: {
    fontSize: 12,
    color: COLORS.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary500,
  },
});
