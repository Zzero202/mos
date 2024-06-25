import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Work() {
  return (
    <View style={styles.mainWork}>
      <Text style={styles.workTitle}>العمل</Text>
      <View style={styles.workBox}>
        <Text style={styles.workTextEnd}>عمل منتهي</Text>
        <Text style={styles.workTextCome}>احضار العمل</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWork: {
    marginTop: 24,
  },
  workTitle: {
    marginTop: 16,
    fontFamily: 'Tajawal-ExtraBold',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 21.6,
    color: '#000',
  },
  workBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // alignItems: 'flex-end',
    marginTop: 16,
  },
  workTextCome: {
    backgroundColor: '#fff',
    color: '#000',
    paddingVertical: 23,
    paddingHorizontal: 160.5,
    fontFamily: 'Tajawal-Regular',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19.2,
    textAlign: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 3, height: 8},
    shadowOpacity: 0.1,
    shadowRadius: 14,
    elevation: 5,
  },
  workTextEnd: {
    backgroundColor: '#fff',
    color: '#000',
    paddingVertical: 23,
    paddingHorizontal: 155,
    fontFamily: 'Tajawal-Regular',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19.2,
    textAlign: 'center',
    marginRight: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 3, height: 8},
    shadowOpacity: 0.1,
    shadowRadius: 14,
    elevation: 5,
  },
});

export default Work;
