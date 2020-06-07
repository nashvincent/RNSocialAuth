import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'rgb(224, 248, 255)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function DashboardScreen(props) {
  const logoutUser = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
        props.route.params.handleLogout();
      });
  };

  return (
    <View style={styles.view}>
      <Button title="Sign Out" onPress={logoutUser} />
    </View>
  );
}
