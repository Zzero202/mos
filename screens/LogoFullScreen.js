import React, {useEffect, useState} from 'react';
import {HubConnectionBuilder, LogLevel} from '@microsoft/signalr';
import {ImageBackground, StyleSheet} from 'react-native';
function LogoFullScreen() {
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

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../assets/logo.png')}>
        
      </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backgroundImage: {
    flex:1,
  },
});
export default LogoFullScreen;
