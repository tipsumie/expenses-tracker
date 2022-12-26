import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS } from '../../constants';
import { getFormattedDate } from '../../utils/date';
import { useNavigation } from '@react-navigation/native';

const ExpenseItem = ({ description, amount, date }) => {
  const navigation = useNavigation();
  const pressExpenseHandler = () => {
    navigation.navigate('ManageExpense');
  };
  return (
    <Pressable
      onPress={pressExpenseHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: COLORS.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 3,
    shadowColor: COLORS.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: COLORS.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: COLORS.primary500,
    fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.75,
  },
});
