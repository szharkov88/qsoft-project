import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import NavBar from "../components/NavBar";

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <NavBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    marginHorizontal: 20,
  }
});
