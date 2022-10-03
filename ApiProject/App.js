import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/Login';
import Project from './src/screens/Project';
import SignUp from './src/screens/SignUp';
import Count from './src/screens/Count';
import User from './src/screens/User';
import CustomInput from './src/screens/CustomInput';
import { Home } from './src/screens/Home';
import UpdatePage from './src/screens/UpdatePage';
import TabNav from './src/screens/TabNav';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Project" options={{ header: () => null }} component={Project} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        {/* <Stack.Screen name="Count" component={Count} /> */}
        <Stack.Screen name="User" options={{ header: () => null }}  component={User} />
        <Stack.Screen name="UpdatePage" component={UpdatePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
