import { createSlice } from '@reduxjs/toolkit';
import { expensesData } from '../data/expensesData';

export const expensesSlice = createSlice({
  name: 'expenses',
  initialState: {
    expenses: expensesData,
  },
  reducers: {
    addExpense: (state, action) => {
      const id = Math.random().toString();
      state.expenses.push({ ...action.payload, id: id });
    },
    deleteExpense: (state, action) => {
      let newExpenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
      return { expenses: newExpenses };
    },
    updateExpense: (state, action) => {
      const updatableExpenseIndex = state.expenses.findIndex(
        (expense) => expense.id === action.payload.id
      );
      state.expenses[updatableExpenseIndex] = {
        ...action.payload.data,
        id: action.payload.id,
      };
    },
  },
});

export const { addExpense, deleteExpense, updateExpense } =
  expensesSlice.actions;

export default expensesReducer = expensesSlice.reducer;
