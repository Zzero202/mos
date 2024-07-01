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
      name: 'إبراهيم المعيقل',
      image: require('../../../assets/naeb.png'),
      press: () => {
        axios
          .post(
            'https://secondstaging.mersvo.com/PSuiteV2.0/Production/Catering.API/api/RequestAttends/ReturnText?Text=معالي النائب',
          )
          .then(res => {
            console.log(res);
          })
          .catch(e => console.log(e));
      },
    },
    {
      id: 2,
      name: 'وليد بن حزيم',
      image: require('../../../assets/mosaed.png'),
      // press: () => {
      //   fetch('https://secondstaging.mersvo.com/PSuiteV2.0/Production/Catering.API/api/RequestAttends/ReturnText?Text=Hello')
      //     .then(res => {
      //       console.log('data');
      //     })
      //     .catch(err => {
      //       console.log(err);
      //     });
      // },
    },
    {
      id: 3,
      name: 'نواف الشهراني',
      image: require('../../../assets/wakelsyasa.png'),
      // press: () => {
      //   fetch('https')
      //     .then(res => {
      //       console.log('data');
      //     })
      //     .catch(err => {
      //       console.log(err);
      //     });
      // },
    },
    {
      id: 4,
      name: 'عبدالله الدريس',
      image: require('../../../assets/wakemotaded.png'),
      // press: () => {
      //   fetch('https')
      //     .then(res => {
      //       console.log('data');
      //     })
      //     .catch(err => {
      //       console.log(err);
      //     });
      // },
    },
    {
      id: 5,
      name: 'محمد العنقري',
      image: require('../../../assets/wakeldoplamicia.png'),
      // press: () => {
      //   fetch('https')
      //     .then(res => {
      //       console.log('data');
      //     })
      //     .catch(err => {
      //       console.log(err);
      //     });
      // },
    },
    {
      id: 6,
      name: 'أحمد حكمي',
      image: require('../../../assets/wakelmarasem.png'),
      // press: () => {
      //   fetch('https')
      //     .then(res => {
      //       console.log('data');
      //     })
      //     .catch(err => {
      //       console.log(err);
      //     });
      // },
    },
    {
      id: 7,
      name: 'عبده العبسي',
      image: require('../../../assets/wakelshoon.png'),
      // press: () => {
      //   fetch('https')
      //     .then(res => {
      //       console.log('data');
      //     })
      //     .catch(err => {
      //       console.log(err);
      //     });
      // },
    },
    {
      id: 8,
      name: 'احمد هوساوي',
      image: require('../../../assets/takhtet.png'),
      // press: () => {
      //   fetch('https')
      //     .then(res => {
      //       console.log('data');
      //     })
      //     .catch(err => {
      //       console.log(err);
      //     });
      // },
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
