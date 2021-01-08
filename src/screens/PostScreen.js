import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {THEME} from '../theme';

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Text>Post Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    backgroundColor: THEME.BC_COLOR,
  },
});
