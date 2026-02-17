import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProfileCard({ name, nim, program, onPress, style }) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress} activeOpacity={0.8}>
      <Image
        source={{ uri: 'https://png.pngtree.com/png-vector/20230531/ourmid/pngtree-drawing-cute-bunny-rabbit-bunny-image-vector-png-image_6783160.png' }}
        style={styles.avatar}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.nim}>{nim}</Text>
        <Text style={styles.program}>{program}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginHorizontal: 20,
    marginTop: 12,
    // shadow (iOS)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    // elevation (Android)
    elevation: 3,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    marginRight: 12,
    backgroundColor: '#ecf0f1',
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2c3e50',
  },
  nim: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 4,
  },
  program: {
    fontSize: 13,
    color: '#95a5a6',
    marginTop: 2,
  },
});
