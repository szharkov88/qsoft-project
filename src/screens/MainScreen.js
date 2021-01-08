import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import NavBar from '../components/NavBar';
import {THEME} from '../theme';
import {DATA} from '../../assets/data/data';
import {Post} from '../components/Post';

export default function MainScreen({navigation}) {
  return (
    <View style={styles.container}>
      <NavBar />
      <FlatList
        style={styles.listWrapper}
        data={DATA}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({item}) => <Post post={item} />}
        initialNumToRender={8}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    backgroundColor: THEME.BC_COLOR,
  },
  listWrapper: {
    marginTop: 10,
  },
});
