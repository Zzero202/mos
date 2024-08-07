import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
function Request() {
  return (
    <View>
      <Text style={styles.requestTitle}>فريق العمل</Text>
      <View style={styles.requestMainBox}>
        <TouchableOpacity
          style={styles.requestBox}
          onPress={() => {
            // sendNotification('إبراهيم المعيقل');
          }}>
          <Text style={styles.requestText}>إبراهيم المعيقل</Text>
          <Image
            source={require('../../../assets/ibrahim.jpg')}
            style={styles.requestImage}
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
  },
  requestMainBox: {
    marginTop: 16,
    display: 'flex',
    flexDirection: 'column',
  },
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
export default Request;
