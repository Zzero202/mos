import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Sidebar from '../components/Layout/Sidebar/Sidebar';
import MainContent from '../components/Layout/MainContent/MainContent';
function MinisterOfSportsScreen() {
  return (
    <View style={styles.mainPage}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}>
        <Sidebar />
        <MainContent />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainPage: {
    marginTop: 25,
  },
  scrollViewContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F7F8F9',
  },
});

export default MinisterOfSportsScreen;
