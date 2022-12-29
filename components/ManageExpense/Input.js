import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { COLORS } from '../../constants';

const Input = ({ label, textInputConfig }) => {
  let inputStyles = [styles.input];
  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 10,
  },
  label: {
    fontSize: 12,
    color: COLORS.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: COLORS.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: COLORS.primary700,
  },
  inputMultiline: {
    minHeight: 50,
    textAlignVertical: 'top',
  },
});
