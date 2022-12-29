import { View, StyleSheet } from 'react-native';
import React, { useLayoutEffect } from 'react';
import IconButton from '../components/UI/IconButton';
import { COLORS } from '../constants';
import { useDispatch } from 'react-redux';
import {
  deleteExpense,
  updateExpense,
  addExpense,
} from '../store/expensesSlice';
import ExpenseInputForm from '../components/ManageExpense/ExpenseInputForm';

const ManageExpense = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [isEditing, navigation]);
  const deleteExpenseHandler = () => {
    dispatch(deleteExpense(editedExpenseId));
    navigation.goBack();
  };
  const cancelHandler = () => {
    navigation.goBack();
  };
  const confirmHandler = () => {
    if (isEditing) {
      dispatch(
        updateExpense({
          id: editedExpenseId,
          data: {
            description: 'Test Update',
            amount: 34.5,
            date: new Date('2022-11-11'),
          },
        })
      );
    } else {
      dispatch(
        addExpense({
          description: 'Test Add',
          amount: 34.5,
          date: new Date('2022-11-11'),
        })
      );
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ExpenseInputForm
        onLabelButton={isEditing ? 'Update' : 'Add'}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon='trash'
            color={COLORS.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: COLORS.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: COLORS.primary200,
    alignItems: 'center',
  },
});
