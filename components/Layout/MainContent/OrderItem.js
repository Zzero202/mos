import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function OrderItem({title, image}) {
  //onPress
  return (
    //onPress={onPress}
    <View style={styles.card}>
      <TouchableOpacity>
        <Image source={image} style={styles.image} />
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    width: 180,
    height: 158,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    alignItems: 'center',
    marginVertical: 10,
    paddingBottom: 20,
    marginHorizontal: 8,
  },
  image: {
    width: 180,
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  text: {
    marginTop: 10,
    fontSize: 20,
    color: '#000',
    fontFamily: 'Tajawal-Regular',
    textAlign:'center'
  },
});
export default OrderItem;
