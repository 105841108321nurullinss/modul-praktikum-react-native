import React from 'react';
import { View, Text, ScrollView, StyleSheet, Alert } from 'react-native';
import StyledButton from '../components/StyledButton';

const VARIANTS = ['primary', 'secondary', 'danger'];
const SIZES = ['small', 'medium', 'large'];

export default function ButtonShowcase() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Button Showcase</Text>

      <Text style={styles.section}>Variants × Sizes</Text>
      {VARIANTS.map((variant) => (
        <View key={variant} style={styles.row}>
          <Text style={styles.variantLabel}>{variant}</Text>
          <View style={styles.rowButtons}>
            {SIZES.map((size) => (
              <StyledButton
                key={size}
                variant={variant}
                size={size}
                onPress={() => Alert.alert('Pressed', `${variant} / ${size}`)}
                style={styles.buttonSpacing}
              >
                {size}
              </StyledButton>
            ))}
          </View>
        </View>
      ))}

      <Text style={styles.section}>Disabled</Text>
      <View style={styles.disabledRow}>
        <StyledButton variant="primary" size="medium" disabled style={styles.buttonSpacing}>
          Primary Disabled
        </StyledButton>
        <StyledButton variant="danger" size="medium" disabled style={styles.buttonSpacing}>
          Danger Disabled
        </StyledButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  section: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 8,
  },
  row: {
    marginBottom: 10,
  },
  variantLabel: {
    textTransform: 'capitalize',
    marginBottom: 6,
    color: '#2c3e50',
  },
  rowButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonSpacing: {
    marginRight: 10,
  },
  disabledRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
