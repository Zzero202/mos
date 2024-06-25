import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

function OrderItem({title, image}) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    width: 200,
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
    width: '100%',
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  text: {
    marginTop: 10,
    fontSize: 20,
    color: '#000',
    fontFamily:'Tajawal-Regular'
  },
});
export default OrderItem;
