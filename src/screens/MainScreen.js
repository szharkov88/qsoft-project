import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux'
import {StyleSheet, View, FlatList, Text} from 'react-native';
import NavBar from '../components/NavBar';
import {THEME} from '../theme';
import {Post} from '../components/Post';
import {LoadMoreButton} from '../components/ui/LoadMoreButton';
import {FilterItem} from '../components/FilterItem';

export default function MainScreen({navigation}) {
  const [offset, setOffset] = useState(7);
  const [loading, setLoading] = useState(false);
  const [fullLoadData, setFullLoadData] = useState(false);

  const filterArr = [
    {id: '1', animalType: 'Cats'},
    {id: '2', animalType: 'Dogs'},
    {id: '3', animalType: 'Birds'},
    {id: '4', animalType: 'Other'},
  ]

  const animalTypeFilter = []

  const allPosts = useSelector(state => state.post.allPosts)

  let dataList = allPosts.slice(0, offset)

  if (animalTypeFilter.length > 0) {
    dataList = allPosts.filter((post) => animalTypeFilter.includes(post.type)).slice(0, offset);
  }

  useEffect(() => {
    if (dataList.length < 7) {
      setFullLoadData(true)
    }
    return
  }, [])

  const getData = () => {
    console.log('Getting Data...');
    setLoading(true);
    setOffset(offset + 8);
    if ((allPosts.length - dataList.length <= 7) || (dataList.length < 7)) {
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

  const openPostHandler = (post) => {
    navigation.navigate('Post', {
      id: post.id,
      img: post.img,
      name: post.name,
      location: post.location,
      description: post.description,
      gender: post.gender,
    });
  };

  let content = (
      <FlatList
      style={styles.listWrapper}
      data={dataList}
      keyExtractor={(post) => post.id.toString()}
      renderItem={({item}) => <Post post={item} onOpen={openPostHandler} />}
      ListFooterComponent={renderFooter}
      showsVerticalScrollIndicator={false}
  />
  )

  useEffect(() => {
    if (dataList.length === 0) {
      content = (<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text>Постов нет</Text></View>)
    }
  }, [])

  console.log(dataList.length);

  return (
    <View style={styles.container}>
      <NavBar />
      <FlatList
          data={filterArr}
          keyExtractor={(filterItem) => filterItem.id.toString()}
          renderItem={({item}) => <FilterItem filterData={item} />}
          horizontal={true}
          style={styles.filterFlatList}
          showsHorizontalScrollIndicator={false}
      />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: THEME.BC_COLOR,
    paddingTop: 30,
  },
  listWrapper: {
    marginTop: 20,
    marginBottom: 14,
  },
  filterFlatList: {
    marginTop: 20,
    maxHeight: 33
  },
});
