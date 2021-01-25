import React, {useState} from 'react';
import HelloScreen from './src/screens/HelloScreen';
import AppNavigation from './src/navigation/AppNavigation';
import {Provider} from 'react-redux';
import store from './src/store';

export default function App() {
  const [showHelloScreen, setShowHelloScreen] = useState(true);

  const onChangeScreen = () => {
    setShowHelloScreen(false);
  };

  if (!showHelloScreen) {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }

  return <HelloScreen onPress={onChangeScreen} />;
}
