import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Upper = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://example.com/background.jpg' }} style={styles.backgroundImage} />
      <View style={styles.content}>
        <Text style={styles.text}>Welcome to My App</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 16,
    borderRadius: 8,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default Upper;

