import {GoogleSignin} from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';

async function onGoogleButtonPress() {
  console.log('Google Auth in progress');
  GoogleSignin.configure({
    webClientId:
      '92687980378-74jefeh5j5gcrbc2euublpoiu7j6jlb4.apps.googleusercontent.com',
  });

  let googleCredential;

  // Get the users ID token
  try {
    console.log('Logging in with Google');
    await GoogleSignin.hasPlayServices();
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    googleCredential = auth.GoogleAuthProvider.credential(idToken);
  } catch (error) {
    console.log('Login Failed: ', error);
  }

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

export default onGoogleButtonPress;
