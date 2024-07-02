import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import OrderItem from './OrderItem';

function Orders() {
  const data = [
    {
      id: '1',
      title: 'قهوة سعودية',
      image: require('../../../assets/coffee.png'),
      // press: () => {
      //   fetch('https').then(res => console.log(res));
      // },
    },
    {
      id: '2',
      title: 'شاهي',
      image: require('../../../assets/shai.png'),
      // press: () => {
      //   fetch('https').then(res => console.log(res));
      // },
    },
    {
      id: '3',
      title: 'تمر',
      image: require('../../../assets/nuts.png'),
      // press: () => {
      //   fetch('https').then(res => console.log(res));
      // },
    },
    {
      id: '4',
      title: 'مياه غازية',
      image: require('../../../assets/water.png'),
      // press: () => {
      //   fetch('https').then(res => console.log(res));
      // },
    },
    {
      id: '5',
      title: 'قهوة أمريكية',
      image: require('../../../assets/american.png'),
      // press: () => {
      //   fetch('https').then(res => console.log(res));
      // },
    },
    {
      id: '6',
      title: 'قهوة تركية',
      image: require('../../../assets/turkish.png'),
      // press: () => {
      //   fetch('https').then(res => console.log(res));
      // },
    },

    {
      id: '7',
      title: 'مياه عادية',
      image: require('../../../assets/normal-water.jpg'),
      // press: () => {
      //   fetch('https').then(res => console.log(res));
      // },
    },
    {
      id: '8',
      title: 'وجبة الطعام',
      image: require('../../../assets/foodMeal.png'),
      // press: () => {
      //   fetch('https').then(res => console.log(res));
      // },
    },
  ];
  return (
    <View style={styles.mainOrders}>
      <Text style={styles.ordersTitle}>الطلبات</Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          flexWrap: 'wrap',
        }}>
        {data.map(item => {
          return (
            <OrderItem key={item.id} title={item.title} image={item.image}
            //  onPress={item.press}
             />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainOrders: {
    marginTop: 24,
  },
  ordersTitle: {
    marginTop: 16,
    fontFamily: 'Tajawal-ExtraBold',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 21.6,
    color: '#000',
  },
});

export default Orders;
