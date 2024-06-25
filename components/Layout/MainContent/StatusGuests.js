import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

function StatusGuests() {
  return (
    <View style={styles.statusGuests}>
      <View style={{marginRight:120}}>
        <Text style={styles.statusTitle}>الضيوف</Text>
        <View style={styles.guestsTextBox}>
          <Text style={styles.statusTextGuests}>إدخال الضيف</Text>
        </View>
      </View>
      <View>
        <Text style={styles.statusTitle}>الحالة</Text>
        <View style={styles.status}>
          <View style={styles.statusWitchIconDisturb}>
            <Image
              style={styles.onlineDisturbIcons}
              source={require('../../../assets/user-follow-line.png')}
            />
            <Text style={styles.statusTextDontDisturb}>عدم الإزعاج</Text>
          </View>
          <View style={styles.statusWitchIconOnline}>
            <Image
              style={styles.onlineDisturbIcons}
              source={require('../../../assets/Vector.png')}
            />
            <Text style={styles.statusTextOnline}>متاح</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  status: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 16,
  },
  statusGuests: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  statusTitle: {
    fontFamily: 'Tajawal-ExtraBold',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 21.6,
    color: '#000',
  },
  statusTextGuests: {
    fontFamily: 'Tajawal-Regular',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 21.6,
    color: '#fff',
    textAlign: 'center',
  },
  statusTextOnline: {
    fontFamily: 'Tajawal-Regular',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 21.6,
    color: '#fff',
    textAlign: 'center',
  },
  statusTextDontDisturb: {
    fontFamily: 'Tajawal-Regular',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 21.6,
    color: '#009E3D',
    textAlign: 'center',
  },
  statusWitchIconDisturb: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 23,
    marginRight: 16,
    borderRadius: 50,
  },
  statusWitchIconOnline: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1CC977',
    paddingVertical: 14,
    paddingHorizontal: 23,
    borderRadius: 50,
  },
  guestsTextBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#009E3D',
    paddingVertical: 13,
    paddingHorizontal: 24,
    borderRadius: 50,
    marginTop: 16,
  },
  onlineDisturbIcons: {
    width: 16,
    height: 18,
    marginRight: 16,
  },
});

export default StatusGuests;
