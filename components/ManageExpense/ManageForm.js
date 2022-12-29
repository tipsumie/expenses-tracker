import { StyleSheet, View } from 'react-native';
import React from 'react';
import Input from './Input';

const amountChangeHandler = () => {};

const ManageForm = () => {
  return (
    <View >
      <Input
        label='amount'
        textInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: amountChangeHandler,
        }}
      />
      <Input
        label='date'
        textInputConfig={{
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input label='description' textInputConfig={{ multiline: 'true' }} />
    </View>
  );
};

export default ManageForm;

const styles = StyleSheet.create({
 
});
