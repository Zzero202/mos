import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PeopleRequestItem from './PeopleRequestItem';
function PeopleRequest() {
  const data = [
    {
      id: 1,
      name: 'معالي النائب',
      image: require('../../../assets/naeb.png'),
      // press: () => {
      //   //   fetch('https')
      //   //     .then(res => {
      //   //       console.log('data');
      //   //     })
      //   //     .catch(err => {
      //   //       console.log(err);
      //   //     });
      //   // },
      // },
    },
    {
      id: 2,
      name: 'معالي المساعد',
      image: require('../../../assets/mosaed.png'),
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
      id: 3,
      name: 'وكيل السياسية',
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
      name: 'وكيل المتعددة',
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
      name: 'وكيل الدبلوماسية العامة',
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
      name: 'وكيل المراسم',
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
      name: 'وكيل الشؤون العامة',
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
      name: 'التخطيط الإستراتيجي',
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

  return (
    <View style={{marginTop: 16}}>
      <Text style={styles.requestTitle}>طلب أشخاص</Text>
      <View style={styles.requestMainBox}>
        {data.map(item => {
          return (
            <PeopleRequestItem
              key={item.id}
              name={item.name}
              image={item.image}
              // onPress={item.press}
            />
          );
        })}
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
    marginTop: 16,
    display: 'flex',
    flexDirection: 'column',
  },
});
export default PeopleRequest;
