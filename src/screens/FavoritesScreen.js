import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import NavBar from '../components/NavBar';
import {THEME} from '../theme';
import {DATA} from '../../assets/data/data';
import {Post} from '../components/Post';
import {LoadMoreButton} from '../components/ui/LoadMoreButton';

export default function MainScreen({navigation}) {
  const [offset, setOffset] = useState(7);
  const [loading, setLoading] = useState(false);
  const [fullLoadData, setFullLoadData] = useState(false);

  const dataList = DATA.filter(post => post.liked).slice(0, offset);

  const getData = () => {
    console.log('Getting Data...');
    setLoading(true);
    setOffset(offset + 8);
    if (DATA.filter(post => post.liked).length - dataList.length <= 7) {
      setFullLoadData(true);
    }
    setLoading(false);
  };

  const renderFooter = () => {
    if (!fullLoadData) {
      return <LoadMoreButton onPress={getData} loading={loading} />;
    } else {
      return null;
    }
  };

  return (
    <View style={styles.container}>
      <NavBar />
      <FlatList
        style={styles.listWrapper}
        data={dataList}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({item}) => <Post post={item} />}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
    backgroundColor: THEME.BC_COLOR,
  },
  listWrapper: {
    marginTop: 10,
  },
});
