import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import FontAvesome5 from 'react-native-vector-icons/FontAwesome5';
import {THEME} from '../theme';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';

export default function NavBar() {
  return (
    <View style={styles.navBar}>
      <View style={styles.rightSide}>
        <Image
          source={require('../img/Rectangle.png')}
          style={styles.userImage}
        />
        <FontAvesome5
          name={'map-marker-alt'}
          size={25}
          color={THEME.MAIN_COLOR}
        />
        <Text style={styles.navBarText}>New York City</Text>
        <SimpleLineIcons
          name={'arrow-down'}
          size={13}
          color={THEME.MAIN_COLOR}
        />
      </View>
      <View style={styles.navCircle}>
        <Feather name={'bell'} size={22} color={THEME.MAIN_COLOR} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rightSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    marginTop: 8,
    marginRight: 15,
    height: 50,
    width: 50,
    resizeMode: 'stretch',
  },
  navBarText: {
    marginLeft: 10,
    marginRight: 8,
    fontFamily: 'Avenir',
    fontWeight: '500',
    fontSize: 14,
  },
  navCircle: {
    width: 40,
    height: 40,
    borderWidth: 1.5,
    borderStyle: 'solid',
    borderColor: THEME.MAIN_COLOR,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
