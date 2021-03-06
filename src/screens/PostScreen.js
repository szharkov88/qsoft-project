import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {THEME} from '../theme';
import Feather from 'react-native-vector-icons/Feather';
import {AppButton} from '../components/ui/AppButton';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function PostScreen({route, navigation}) {
  const [showFullText, setShowFullText] = useState(false);
  const post = route.params;

  const aduptNow = () => {
    navigation.goBack();
    console.log(
      `Порода питомца: ${post.name}, находится в городе ${post.location}. Пол этого животного ${post.gender}.`,
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={navigation.goBack}
        style={styles.arrow}>
        <AntDesign name={'left'} size={25} color={THEME.BC_COLOR} />
      </TouchableOpacity>
      <View
        style={styles.whiteMainBlock}>
        <Image
          style={styles.backgroundImage}
          source={require('../img/PostScreen/Dog-big.png')}
        />
        <ScrollView style={styles.modalWrapper}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 16,
            }}>
            <View style={styles.wrapper}>
              <Text style={styles.name}>{post.name}</Text>
              <View style={styles.location}>
                <Feather name={'map-pin'} size={14} color={THEME.MAIN_COLOR} />
                <Text style={styles.city}>{post.location}</Text>
              </View>
              <View style={styles.genderBlock}>
                <View style={styles.genderSubBlock}>
                  <View style={styles.circle}>
                    <Image
                      style={styles.iconImage}
                      source={require('../img/leg.png')}
                    />
                  </View>
                  <Text style={styles.genderText}>{post.name}</Text>
                </View>
                <View style={styles.genderSubBlock}>
                  <View style={styles.circle}>
                    <Image
                      style={styles.iconImage}
                      source={require('../img/sex.png')}
                    />
                  </View>
                  <Text>{post.gender}</Text>
                </View>
              </View>
              <View style={{minWidth: '100%'}}>
                <Text
                  style={styles.mainText}
                  numberOfLines={showFullText ? null : 3}
                  ellipsizeMode={'tail'}>
                  {post.description}
                </Text>
                <Text
                  style={!showFullText ? styles.showMore : styles.showMoreOn}
                  onPress={() => setShowFullText(true)}>
                  More
                </Text>
              </View>
              <View style={styles.gallery}>
                <View style={styles.galleryBlock}>
                  <Image
                    style={styles.galleryImage}
                    source={require('../img/PostScreen/Rectangle.png')}
                  />
                </View>
                <View style={styles.galleryBlock}>
                  <Image
                    style={styles.galleryImage}
                    source={require('../img/PostScreen/Rectangle-2.png')}
                  />
                </View>
                <View style={styles.galleryBlock}>
                  <Image
                    style={styles.galleryImage}
                    source={require('../img/PostScreen/Rectangle-3.png')}
                  />
                </View>
              </View>
            </View>
            <AppButton title={'Adopt now'} onPress={aduptNow} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.MAIN_COLOR,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  arrow: {
    position: 'absolute',
    top: 40,
    left: 10,
    zIndex: 5,
  },
  modalWrapper: {
    backgroundColor: THEME.BC_COLOR,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    height: Dimensions.get('window').height * 0.5,
    paddingHorizontal: 24,
  },
  wrapper: {},
  name: {
    color: THEME.BLACK_COLOR,
    fontFamily: 'Avenir',
    fontWeight: '800',
    fontSize: 24,
    marginTop: 24,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 24,
  },
  city: {
    marginLeft: 10,
    fontFamily: 'Avenir',
    fontWeight: '500',
    fontSize: 14,
    color: THEME.GREY_COLOR,
  },
  genderBlock: {
    flexDirection: 'row',
  },
  genderSubBlock: {
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 46,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 30,
    borderColor: THEME.MAIN_COLOR,
    borderWidth: 1,
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  genderText: {
    color: THEME.TEXT_COLOR,
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: '800',
  },
  iconImage: {
    width: 24,
    height: 24,
  },
  mainText: {
    fontFamily: 'Avenir',
    color: '#9E9E9E',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 16,
  },
  gallery: {
    flexDirection: 'row',
    marginTop: 26,
    marginBottom: 37,
  },
  galleryBlock: {
    width: 64,
    height: 64,
    borderRadius: 50,
    borderColor: THEME.MAIN_COLOR,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 19,
  },
  galleryImage: {
    width: 64,
    height: 64,
  },
  backgroundImage: {
    height: 243,
    width: 243,
    marginLeft: Dimensions.get('window').width - 243,
  },
  showMore: {
    color: THEME.MAIN_COLOR,
    fontFamily: 'Avenir',
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 24,
    position: 'absolute',
    bottom: -25,
    right: 20,
  },
  showMoreOn: {
    display: 'none',
  },
  whiteMainBlock: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  }
});
