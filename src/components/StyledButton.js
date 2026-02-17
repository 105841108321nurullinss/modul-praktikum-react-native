import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const VARIANTS = {
  primary: { backgroundColor: '#3498db', color: '#ffffff' },
  secondary: { backgroundColor: '#95a5a6', color: '#ffffff' },
  danger: { backgroundColor: '#e74c3c', color: '#ffffff' },
};

const SIZES = {
  small: { paddingVertical: 6, paddingHorizontal: 10, fontSize: 12 },
  medium: { paddingVertical: 10, paddingHorizontal: 14, fontSize: 14 },
  large: { paddingVertical: 14, paddingHorizontal: 18, fontSize: 16 },
};

export default function StyledButton({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onPress,
  children,
  style,
}) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.medium;

  return (
    <TouchableOpacity
      activeOpacity={disabled ? 1 : 0.8}
      onPress={disabled ? undefined : onPress}
      style={[
        styles.base,
        { backgroundColor: v.backgroundColor, opacity: disabled ? 0.5 : 1 },
        { paddingVertical: s.paddingVertical, paddingHorizontal: s.paddingHorizontal },
        style,
      ]}
    >
      <Text style={[styles.text, { color: v.color, fontSize: s.fontSize }]}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '600',
  },
});
