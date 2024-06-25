import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import OrderItem from './OrderItem';

function Orders() {
  const data = [
    {id: '1', title: 'إسبريسو', image: require('../../../assets/cat1.png')},
    {id: '2', title: 'ينسون', image: require('../../../assets/cat2.png')},
    {id: '3', title: 'شاي أخضر', image: require('../../../assets/cat3.png')},
    {id: '4', title: 'مياة', image: require('../../../assets/cat4.png')},
    {id: '5', title: 'الأكل', image: require('../../../assets/cat5.png')},
    {id: '6', title: 'الإفطار', image: require('../../../assets/cat6.png')},
    {id: '7', title: 'بلاك كوفي', image: require('../../../assets/cat7.png')},
    {id: '8', title: 'قهوة سعودية', image: require('../../../assets/cat8.png')},
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
            <OrderItem key={item.id} title={item.title} image={item.image} />
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
