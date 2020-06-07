import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {GoogleSignin} from '@react-native-community/google-signin';
import Icon from 'react-native-vector-icons/Ionicons';

import onGoogleButtonPress from '../services/Google';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'rgb(150, 232, 255)',
  },

  container: {
    marginTop: 30,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  header: {
    fontSize: 60,
  },

  iconRow: {
    flexDirection: 'row',
    height: 100,
    width: 300,
    // backgroundColor: 'grey',
    justifyContent: 'space-between',
  },

  tempBox: {
    height: 75,
    width: 75,
  },
});

const HomeScreen = props => {
  const handleGoogleAuth = () => {
    console.log('Google Auth in progress');
    GoogleSignin.configure({
      webClientId:
        '92687980378-74jefeh5j5gcrbc2euublpoiu7j6jlb4.apps.googleusercontent.com',
    });
    onGoogleButtonPress()
      .then(() => {
        console.log('Logged In');
        props.route.params.handleLogin();
      })
      .catch(error => console.log('Failed: ', error));
  };

  return (
    <View style={styles.view}>
      <View style={styles.container}>
        <Text style={styles.header}>Login</Text>
        <View style={styles.iconRow}>
          <TouchableOpacity onPress={handleGoogleAuth}>
            <Icon name="logo-google" size={75} color="white" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log('Facebook')}>
            <Icon name="logo-facebook" size={75} color="white" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log('Github')}>
            <Icon name="logo-github" size={75} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
