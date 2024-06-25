import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import StatusGuests from './StatusGuests';
import Work from './Work';
import Orders from './Orders';

function MainContent() {
  return (
    <View style={styles.mainContent}>
      <Image style={styles.logo} source={require('../../../assets/logo.png')} />
      <View style={styles.innerContent}>
        <StatusGuests />
        <Work />
        <Orders />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContent: {
    marginRight: 20,
    width: '73%',
    // display: 'flex',
    // justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  logo: {
    width: 237,
    height: 73,
    marginRight: 20,
  },
  innerContent: {
    // display: 'flex',
    // flexDirection: 'column',
    marginTop: 24,
    marginRight: 20,
    paddingBottom: 40,
    marginBottom: 40,
  },
});

export default MainContent;
