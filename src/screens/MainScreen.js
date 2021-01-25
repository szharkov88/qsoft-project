import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {loadPosts} from '../store/actions/post';
import Screen from '../components/Screen';

export default function MainScreen({navigation}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  const allPosts = useSelector((state) => state.post.allPosts);

  return <Screen allPosts={allPosts} navigation={navigation} />;
}
