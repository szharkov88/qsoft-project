import React from 'react';
import {View, StyleSheet, Image, Text, Dimensions, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {THEME} from '../theme';

export const Post = ({post, onOpen}) => {

  let likeElement = <FontAwesome name={'heart-o'} size={14} color={THEME.GREY_COLOR}/>

  if (post.liked) {
    likeElement = <FontAwesome name={'heart'} size={14} color={THEME.RED_COLOR}/>
  }

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(post)}>
      <View style={styles.post}>
        <Image style={styles.image} source={{uri: post.img}}/>
        <View style={styles.infoBlock}>
          <Text style={styles.title}>{post.name}</Text>
          <View style={styles.locationBlock}>
            <Feather name={'map-pin'} size={13} color={THEME.MAIN_COLOR} />
            <Text style={styles.locationTitle}>{post.location}</Text>
          </View>
          <Text style={styles.text}>{post.text}</Text>
        </View>
        <View style={styles.likedBlock}>
          {likeElement}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  post: {
    marginBottom: 30,
    borderWidth: 1,
    borderColor: THEME.MAIN_COLOR,
    borderStyle: 'solid',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 145,
    height: 145,
  },
  infoBlock: {
    flexWrap: 'wrap',
    paddingRight: 10
  },
  title: {
    fontFamily: 'Avenir',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 6,
    color: THEME.BLACK_COLOR
  },
  locationBlock: {
    flexDirection: 'row'
  },
  locationTitle: {
    marginLeft: 5,
    color: THEME.GREY_COLOR,
    fontFamily: 'Avenir',
    fontSize: 12,
    fontWeight: '500',
  },
  text: {
    marginTop: 14,
    color: THEME.TEXT_COLOR,
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: '500',
    maxWidth: Dimensions.get('window').width * 0.5,
    paddingRight: 40
  },
  likedBlock: {
    position: 'absolute',
    top: 15,
    right: 15,
    width: 24,
    height: 24,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: THEME.MAIN_COLOR,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
