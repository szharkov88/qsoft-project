import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {THEME} from '../theme';

export const FilterItem = ({filterData}) => {
  console.log(filterData);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{filterData.animalType}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderColor: THEME.MAIN_COLOR,
    borderRadius: 16,
    borderWidth: 1,
    marginRight: 20,
    paddingTop: 6,
    paddingRight: 22,
    paddingLeft: 22,
    paddingBottom: 6,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 22
  },
  text: {
    fontFamily: 'Avenir',
    fontWeight: '800',
    color: '#7878AB',
    fontSize: 14,
    minHeight: 20
  },
});
