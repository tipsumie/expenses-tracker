import { StyleSheet, View, Text } from 'react-native';
import React, { useState } from 'react';
import Input from './Input';
import Button from '../UI/Button';

const ExpenseInputForm = ({ onLabelButton, onSubmit, onCancel }) => {
  const [inputValues, setInputValues] = useState({
    amount: '',
    date: '',
    description: '',
  });

  const inputChangeHandler = (inputIdentifier, enteredValue) => {
    setInputValues((currentInputValue) => {
      return {
        ...currentInputValue,
        [inputIdentifier]: enteredValue,
      };
    });
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>My Expenses</Text>
      <View style={styles.inputsRowContainer}>
        <Input
          label='amount'
          style={styles.rowInput}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangeHandler.bind(this, 'amount'),
            value: inputValues.amount,
          }}
        />
        <Input
          label='date'
          style={styles.rowInput}
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, 'date'),
            value: inputValues.date,
          }}
        />
      </View>
      <Input
        label='description'
        textInputConfig={{
          multiline: 'true',
          onChangeText: inputChangeHandler.bind(this, 'description'),
          value: inputValues.description,
        }}
      />
      <View style={styles.buttons}>
        <Button style={styles.button} mode='flat' onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={onSubmit}>
          {onLabelButton}
        </Button>
      </View>
    </View>
  );
};

export default ExpenseInputForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginVertical: 10,
  },
  inputsRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginHorizontal: 2,
    minWidth: 120,
  },
});
