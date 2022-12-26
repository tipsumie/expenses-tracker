import { View, FlatList } from 'react-native';
import React from 'react';
import ExpenseItem from './ExpenseItem';

const renderExpensesItem = (itemData) => {
  return <ExpenseItem {...itemData.item} />;
};

const ExpensesList = ({ expenses }) => {
  return (
    <View>
      <FlatList
        data={expenses}
        renderItem={renderExpensesItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ExpensesList;
