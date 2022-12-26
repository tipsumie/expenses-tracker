import { StyleSheet, View } from 'react-native';
import React from 'react';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { COLORS } from '../../constants';
const expensesData = [
  {
    id: 1,
    description: 'A pair of shoes',
    amount: 22.5,
    date: new Date('2022-08-20'),
  },
  {
    id: 2,
    description: 'A skirt',
    amount: 225,
    date: new Date('2022-08-12'),
  },
  {
    id: 3,
    description: 'A book',
    amount: 322.5,
    date: new Date('2022-09-05'),
  },
  {
    id: 4,
    description: 'Cookie',
    amount: 122.5,
    date: new Date('2022-09-12'),
  },
  {
    id: 5,
    description: 'Coffee',
    amount: 75,
    date: new Date('2022-09-18'),
  },
];

const ExpensesOutput = ({ expenses, expensePeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expensesData} periodName={expensePeriod} />
      <ExpensesList expenses={expensesData} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: COLORS.primary700,
  },
});
