import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Text,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {THEME} from '../../theme';

export const LoadMoreButton = ({onPress, loading}) => {
  const Wrapper =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <View style={styles.buttonContainer}>
      <Wrapper onPress={onPress} activeOpacity={0.7} style={styles.wrapper}>
        <View style={styles.button}>
          <Text style={styles.text}>Load More</Text>
          {loading ? (
            <ActivityIndicator
              style={{marginLeft: 15}}
              color={THEME.WHITE_COLOR}
            />
          ) : null}
        </View>
      </Wrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
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
    fontWeight: '500',
  },
  wrapper: {
    width: '40%',
    marginTop: -20,
  },
});
