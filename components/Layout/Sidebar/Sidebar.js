import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Request from './Request';
import PeopleRequest from './PeopleRequest';

function Sidebar() {
  return (
    <View style={styles.mainSidebar}>
      <Request />
      <PeopleRequest />
    </View>
  );
}

const styles = StyleSheet.create({
  mainSidebar: {
    width: '26.3%',
    marginLeft:16
  },
});

export default Sidebar;
