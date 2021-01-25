import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  ActivityIndicator,
} from 'react-native';
import NavBar from '../components/NavBar';
import {THEME} from '../theme';
import {Post} from './Post';
import {LoadMoreButton} from './ui/LoadMoreButton';
import {FilterItem} from './FilterItem';
import {loadPosts} from '../store/actions/post';

export default function Screen({navigation, allPosts}) {
  const [offset, setOffset] = useState(7);
  const [loading, setLoading] = useState(false);
  const [fullLoadData, setFullLoadData] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  const loadingData = useSelector((state) => state.post.loadingData);
  console.log(`Loading data is ${loadingData}`);

  const filterArr = useSelector((state) => state.post.filterArrList);

  const animalTypeFilter = useSelector((state) => state.post.filterArr);

  let dataList = allPosts.slice(0, offset);

  const filterArrayForButton = allPosts.filter((post) =>
    animalTypeFilter.includes(post.type),
  );
  // console.log(`filterArray: ${filterArrayForButton.length}`);
  // console.log(fullLoadData);

  if (animalTypeFilter.length > 0) {
    dataList = allPosts
      .filter((post) => animalTypeFilter.includes(post.type))
      .slice(0, offset);
  }

  useEffect(() => {
    if (filterArrayForButton.length === 0) {
      if (allPosts <= 7 || allPosts.length === dataList.length) {
        setFullLoadData(true);
      } else {
        setFullLoadData(false);
      }
    } else {
      if (
        filterArrayForButton <= 7 ||
        filterArrayForButton.length === dataList.length
      ) {
        setFullLoadData(true);
      } else {
        setFullLoadData(false);
      }
    }
  }, [dataList, offset, filterArrayForButton, allPosts]);

  // console.log(`allPosts ${allPosts.length}`);
  // console.log(`dataList ${dataList.length}`);

  const getData = () => {
    console.log('Getting Data...');
    setLoading(true);
    setOffset(offset + 8);
    setLoading(false);
  };

  const renderFooter = () => {
    if (!fullLoadData) {
      return <LoadMoreButton onPress={getData} loading={loading} />;
    } else {
      return null;
    }
  };

  let content = (
    <FlatList
      style={styles.listWrapper}
      data={dataList}
      keyExtractor={(post) => post.id.toString()}
      renderItem={({item}) => <Post post={item} navigation={navigation} />}
      ListFooterComponent={renderFooter}
      showsVerticalScrollIndicator={false}
    />
  );

  if (loadingData) {
    content = (
      <View style={styles.postListIsEmpty}>
        <ActivityIndicator
          style={{marginLeft: 15}}
          color={THEME.MAIN_COLOR}
          size={'large'}
        />
      </View>
    );
  }

  if (dataList.length === 0 && !loadingData) {
    content = (
      <View style={styles.postListIsEmpty}>
        <Text style={styles.postListIsEmptyText}>Постов нет</Text>
      </View>
    );
  }

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
    minHeight: 33,
    maxHeight: 33,
  },
  postListIsEmpty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postListIsEmptyText: {
    color: THEME.TEXT_COLOR,
    fontFamily: 'Avenir',
    fontSize: 15,
    fontWeight: '500',
  },
});
