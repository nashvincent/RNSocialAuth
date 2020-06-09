import auth from '@react-native-firebase/auth';
import {NativeModules} from 'react-native';
const {RNTwitterSignIn} = NativeModules;

async function onTwitterButtonPress() {
  RNTwitterSignIn.init(
    'kvhJmTt04lE6RfOqJDj974uA0',
    'PL9V8cmxzuRRTUWaPODPUnG63qmsIOyLfxoP2idJJxptEkU9WR',
  ).then(() => console.log('Twitter SDK initialized'));

  // Perform the login request
  const {authToken, authTokenSecret} = await RNTwitterSignIn.logIn();

  // Create a Twitter credential with the tokens
  const twitterCredential = auth.TwitterAuthProvider.credential(
    authToken,
    authTokenSecret,
  );

  // Sign-in the user with the credential
  return auth().signInWithCredential(twitterCredential);
}

export default onTwitterButtonPress;
