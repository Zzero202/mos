import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Sidebar from '../components/Layout/Sidebar/Sidebar';
import MainContent from '../components/Layout/MainContent/MainContent';
function MinisterOfSportsScreen() {
  return (
    <View style={styles.mainPage}>
      <Sidebar />
      <MainContent />
    </View>
  );
}

const styles = StyleSheet.create({
  mainPage: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    backgroundColor: '#F7F8F9',
  },
});

export default MinisterOfSportsScreen;
