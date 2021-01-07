import React from 'react';
import {StyleSheet, View, Text, Image, Platform, Dimensions} from 'react-native';
import {THEME} from '../theme';
import {AppButton} from '../components/ui/AppButton';

export default function HelloScreen({onPress}) {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={require('../img/Animal.png')}
        />
        <View style={styles.bottomContainer}>
          <Text style={styles.title}>My Pets</Text>
          <Text style={styles.text}>
            Taking care of a pet is my favorite, it helps me to gaimr stress and
            fatigue.
          </Text>
        </View>
        <AppButton onPress={onPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: THEME.BC_COLOR,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: Dimensions.get('window').height * 0.04,
    marginHorizontal: 10
  },
  backgroundImage: {
    marginTop: Dimensions.get('window').height * 0.03,
    width: Dimensions.get('window').width,
    resizeMode: 'contain'
  },
  bottomContainer: {},
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 16,
    fontFamily: Platform.OS === 'android' ? 'lato_bold' : 'Avenir',
    fontWeight: '800',
  },
  text: {
    textAlign: 'center',
    color: THEME.GREY_COLOR,
    fontSize: 16,
    fontFamily: Platform.OS === 'android' ? 'lato_bold' : 'Avenir',
    fontWeight: '500',
    marginBottom: Dimensions.get('window').height * 0.1
  },
});
