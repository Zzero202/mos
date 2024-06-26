import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function PeopleRequestItem({name, image, onPress}) {
  //onPress
  return (
    <View>
      <TouchableOpacity style={styles.requestBox} onPress={onPress}>
        <Text style={styles.requestText}>{name}</Text>
        <Image source={image} style={styles.requestImage} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  requestBox: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: 5,
  },
  requestImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  requestText: {
    marginRight: 16,
    fontSize: 16,
    fontFamily: 'Tajawal-Regular',
    color: '#000',
    lineHeight: 19.2,
  },
});

export default PeopleRequestItem;
