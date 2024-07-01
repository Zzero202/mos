import React, {useEffect, useState} from 'react';
import {HubConnectionBuilder, LogLevel} from '@microsoft/signalr';
import {ImageBackground, StyleSheet, Alert, Image} from 'react-native';
import Sound from 'react-native-sound';
import RNRestart from 'react-native-restart';
function LogoFullScreen() {
  const [resetConnection, setResetConnection] = useState(false);
  const [isAlertDisplayed, setIsAlertDisplayed] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      RNRestart.restart();
    }, 15 * 60 * 1000);

    return () => clearInterval(intervalId); 
  }, []);


  const connection = new HubConnectionBuilder()
    .withUrl(
      'https://secondstaging.mersvo.com/PSuiteV2.0/Production/Catering.API/chathub',
    )
    .configureLogging(LogLevel.Debug)
    .build();
  var music;
  const playSound = () => {
    music = new Sound('bell.mp3', Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('Error loading sound: ', error);
      } else {
        music.play(success => {
          if (success) {
            console.log('Sound played successfully');
            playSound();
          } else {
            console.log('Sound playback failed');
          }
        });
      }
    });
  };
  const stopSound = () => {
    if (music) {
      music.stop(() => {
        console.log('Sound stopped');
        music.release();
        music = null;
        setIsAlertDisplayed(false); // Reset the flag for displaying the alert
      });
    }
  };
  const displayAlert = data => {
    if (!isAlertDisplayed) {
      setIsAlertDisplayed(true);
      Alert.alert('طلب استدعاء من معالي الوزير', `${data}`, [
        {
          text: 'استلام',
          onPress: () => stopSound(), // Call the stopSound function when the alert is dismissed
          style: 'cancel',
        },
      ]);
    }
  };
  useEffect(() => {
    // playSound();
    connection.start().then(() => {
      connection.onclose(async () => {
        console.log('Closed');
        setResetConnection(prevState => !prevState);
      });
      connection.on('ReturnText', function (data) {
        console.log('This is the response from SignalR' + data);
        playSound();
        displayAlert(data);
      });
    });
  }, []);

  return (
    <Image style={{marginTop: 5}} source={require('../assets/logo.png')} />
  );
}
const styles = StyleSheet.create({});
export default LogoFullScreen;
