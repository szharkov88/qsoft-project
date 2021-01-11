import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {THEME} from '../theme';
import {useDispatch} from 'react-redux';
import {addFilter} from '../store/actions/post';

export const FilterItem = ({filterData, arr}) => {
  const [onStyleWrapper, setOnStyleWrapper] = useState(null);
  const [onStyleText, setOnStyleText] = useState(null);

  const dispatch = useDispatch();

  const toggleFilter = () => {
    dispatch(addFilter(filterData.animalType));
  };

  useEffect(() => {
    if (arr.includes(filterData.animalType)) {
      setOnStyleWrapper({backgroundColor: '#421EB7'});
      setOnStyleText({color: '#FFFFFF'});
    } else {
      setOnStyleWrapper(null);
      setOnStyleText({color: '#7878AB'});
    }
    return;
  }, [arr]);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{...styles.wrapper, ...onStyleWrapper}}
      onPress={toggleFilter}>
      <View>
        <Text style={{...styles.text, ...onStyleText}}>
          {filterData.animalType}
        </Text>
      </View>
    </TouchableOpacity>
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
    minHeight: 22,
  },
  text: {
    fontFamily: 'Avenir',
    fontWeight: '800',
    color: '#7878AB',
    fontSize: 14,
    minHeight: 20,
  },
});
