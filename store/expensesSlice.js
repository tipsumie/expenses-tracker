import { createSlice } from '@reduxjs/toolkit';
import { expensesData } from '../data/expensesData';

export const expensesSlice = createSlice({
  name: 'expenses',
  initialState: {
    expenses: expensesData,
  },
  reducers: {
    addExpense: (state, action) => {
      const id = new Date().toString() + Math.random().toString();
      state.push({ ...action.payload, id: id });
    },
    deleteExpense: (state, action) => {
      return state.filter((expense) => expense.id !== action.payload);
    },
    updateExpense: (state, action) => {
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      state[updatableExpenseIndex] = updatedItem;
    },
  },
});

export const { addExpense, deleteExpense, updateExpense } =
  expensesSlice.actions;

export default expensesReducer = expensesSlice.reducer;
