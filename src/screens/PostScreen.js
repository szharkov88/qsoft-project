import React from 'react';
import {StyleSheet, View} from 'react-native';
import NavBar from '../components/NavBar';

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <NavBar />
      <Text>Post Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
});
