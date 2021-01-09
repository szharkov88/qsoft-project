import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Text,
  Dimensions,
} from 'react-native';
import {THEME} from '../../theme';

export const AppButton = ({onPress, title}) => {
  const Wrapper =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <Wrapper onPress={onPress} activeOpacity={0.7} style={styles.wrapper}>
      <View style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: THEME.MAIN_COLOR,
    paddingHorizontal: Dimensions.get('window').height * 0.03,
    paddingVertical: Dimensions.get('window').height * 0.012,
    borderRadius: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: THEME.WHITE_COLOR,
    fontSize: 16,
    fontFamily: Platform.OS === 'android' ? 'lato_bold' : 'Avenir',
  },
  wrapper: {
    width: '90%',
  },
});
