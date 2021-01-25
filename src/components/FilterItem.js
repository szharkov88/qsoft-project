import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {THEME} from '../theme';
import {useDispatch, useSelector} from 'react-redux';
import {addFilter} from '../store/actions/post';

export const FilterItem = ({filterData}) => {
  const [active, setActive] = useState(false)

  const dispatch = useDispatch();

  const arr = useSelector((state) => state.post.filterArr);

  const toggleFilter = () => {
    dispatch(addFilter(filterData.animalType));
  };

  useEffect(() => {
    if (arr.includes(filterData.animalType)) {
      setActive(true)
    } else {
      setActive(false)
    }
    return;
  }, [arr]);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={!active ? styles.wrapper : styles.wrapperActive}
      onPress={toggleFilter}>
      <View>
        <Text style={!active ? styles.text : styles.textActive}>
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
  wrapperActive: {
    backgroundColor: THEME.ACTIVE_FILTER_COLOR,
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
  textActive: {
    color: THEME.WHITE_COLOR,
    fontFamily: 'Avenir',
    fontWeight: '800',
    fontSize: 14,
    minHeight: 20,
  }
});
