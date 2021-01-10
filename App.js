import React, {useState} from 'react';
import HelloScreen from './src/screens/HelloScreen';
import AppNavigation from './src/navigation/AppNavigation';
import {Provider} from 'react-redux';
import store from './src/store'

export default function App() {
  [skip, setSkip] = useState(false)

  const onChangeScreen = () => {
    if(!skip) {
      setSkip(true)
    }
    return
  }

  let content = <HelloScreen onPress={onChangeScreen}/>

  if (skip) {
    content = (
        <AppNavigation/>
    )
  }

  return (
      <Provider store={store}>
        {content}
      </Provider>)
}
