import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS } from '../../constants';

const Button = ({ children, onPress, mode, style }) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: COLORS.primary500,
  },
  flat: {
    backgroundColor: 'transparent',
  },
  flatText: {
    color: COLORS.primary200,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: COLORS.primary100,
    borderRadius: 4,
  },
});
