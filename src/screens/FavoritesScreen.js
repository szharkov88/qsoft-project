import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import NavBar from '../components/NavBar';
import {THEME} from "../theme";

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <NavBar />
      <Text>Favorites</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    backgroundColor: THEME.BC_COLOR
  },
});
