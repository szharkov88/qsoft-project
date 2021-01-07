import React, {useState} from 'react';
import HelloScreen from './src/screens/HelloScreen';
import MainScreen from './src/screens/MainScreen';

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
        <MainScreen/>
    )
  }

  return <>{content}</>
}
