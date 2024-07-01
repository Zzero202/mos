import React from 'react';
import MinisterOfSportsScreen from './screens/MinisterOfSportsScreen';
import LogoFullScreen from './screens/LogoFullScreen';
import {View} from 'react-native';

function App() {
  return (
    <View style={{width: 1190, height: 800}}>
      <LogoFullScreen />
      {/* <MinisterOfSportsScreen  /> */}
    </View>
  ); //MinisterOfSportsScreen
}

export default App;
