import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/Login';
import Project from './src/screens/HomePage';
import SignUp from './src/screens/SignUp';
import Count from './src/screens/Count';
import User from './src/screens/User';
import CustomInput from './src/components/CustomInput';
import HomePage from './src/screens/HomePage';
import UpdatePage from './src/screens/UpdatePage';
import TabNav from './src/screens/TabNav';
import { Home } from './src/newProject/Home';
import { LogIn } from './src/newProject/LogIn';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="HomePage" options={{ header: () => null }} component={HomePage} />
        <Stack.Screen name="Login" options={{ header: () => null }} component={Login} />
        <Stack.Screen name="SignUp" options={{ header: () => null }} component={SignUp} />
        {/* <Stack.Screen name="Count" component={Count} /> */}
        <Stack.Screen name="User" options={{ header: () => null }}  component={User} />
        <Stack.Screen name="UpdatePage" component={UpdatePage} />
      </Stack.Navigator>
    </NavigationContainer>
  //   <NavigationContainer>
  //   <Stack.Navigator >
  //     <Stack.Screen name="LogIn" component={LogIn} />
  //      <Stack.Screen name="Count" component={Count} /> 
     
  //   </Stack.Navigator>
  // </NavigationContainer>
  );
};

export default App;
 