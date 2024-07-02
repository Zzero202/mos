import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PeopleRequestItem from './PeopleRequestItem';
import axios from 'axios';
import {HubConnectionBuilder, LogLevel} from '@microsoft/signalr';
function PeopleRequest() {
  const [resetConnection, setResetConnection] = useState(false);
  const connection = new HubConnectionBuilder()
    .withUrl(
      'https://secondstaging.mersvo.com/PSuiteV2.0/Production/Catering.API/chathub',
    )
    .configureLogging(LogLevel.Debug)
    .build();

  useEffect(() => {
    connection.start().then(() => {
      connection.onclose(async () => {
        console.log('Closed');
        setResetConnection(prevState => !prevState);
      });
      connection.on('ReturnText', function (data) {
        console.log('This is the response from SignalR' + data);
      });
    });
  }, []);
  const data = [
    {
      id: 1,
      name: 'وليد بن حزيم',
      image: require('../../../assets/waleed.jpg'),
      press: () => {
        // sendNotification('وليد بن حزيم');
      },
    },
    {
      id: 2,
      name: 'نواف الشهراني',
      image: require('../../../assets/nawaf.jpg'),
      press: () => {
        // sendNotification('نواف الشهراني');
      },
    },
    {
      id: 3,
      name: 'محمد العنقري',
      image: require('../../../assets/onkery.jpg'),
      press: () => {
        // sendNotification('محمد العنقري');
      },
    },
    {
      id: 4,
      name: 'عبدالله الدريس',
      image: require('../../../assets/edrees.jpg'),
      press: () => {
        // sendNotification('عبدالله الدريس');
      },
    },
    {
      id: 5,
      name: 'محمد العون',
      image: require('../../../assets/oon.jpg'),
      press: () => {
        // sendNotification('محمد العون');
      },
    },
    {
      id: 6,
      name: 'أحمد حكمي',
      image: require('../../../assets/hekmy.jpg'),
      press: () => {
        // sendNotification('أحمد حكمي');
      },
    },
    {
      id: 7,
      name: 'عبده العبسي',
      image: require('../../../assets/absy.jpg'),
      press: () => {
        // sendNotification('عبده العبسي');
      },
    },
    {
      id: 8,
      name: 'احمد هوساوي',
      image: require('../../../assets/user.jpg'),
      press: () => {
        // sendNotification('احمد هوساوي');
      },
    },
  ];
  // console.log('ADADADA');
  return (
    <View>
      <View style={styles.requestMainBox}>
        {data.map(item => {
          return (
            <PeopleRequestItem
              key={item.id}
              name={item.name}
              image={item.image}
              onPress={item.press}
            />
          );
        })}
        <TouchableOpacity style={styles.kitchenCall}>
          <Text style={styles.kitchenTextCall}>استدعاء الخدمات </Text>
          <Image
            style={{width: 20, height: 20, marginRight: 20}}
            source={require('../../../assets/bellicon.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  requestTitle: {
    fontFamily: 'Tajawal-ExtraBold',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 21.6,
    color: '#000',
    marginTop: 10,
  },
  requestMainBox: {
    display: 'flex',
    flexDirection: 'column',
  },
  kitchenCall: {
    marginTop: 10,
    backgroundColor: '#009E3D',
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    shadowColor: '#0000000D',
    shadowOffset: {width: 3, height: 8},
    shadowOpacity: 1,
    shadowRadius: 14,
    elevation: 14,
  },
  kitchenTextCall: {
    fontFamily: 'Tajawal-Regular',
    fontWeight: '700',
    fontSize: 16,
    color: '#fff',
    marginRight: 35,
  },
});
export default PeopleRequest;
