import 'react-native-gesture-handler'; // Needs to be on the top of the file according to React Navigation docs
import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './src/screens/HomeScreen';
import DashboardScreen from './src/screens/DashboardScreen';

// TODO: Take care of the errors that is raised because of passing funcions as route props
// Optional: use onAuthStateChanged to keep track of the users current authentication state
console.disableYellowBox = true;
const Stack = createStackNavigator();

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => setLoggedIn(true);
  const handleLogout = () => setLoggedIn(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {loggedIn === false ? (
          <Stack.Screen
            options={{headerShown: false}}
            name="Home"
            component={HomeScreen}
            initialParams={{handleLogin: handleLogin}}
          />
        ) : (
          <Stack.Screen
            name="Dashboard"
            component={DashboardScreen}
            initialParams={{handleLogout: handleLogout}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
