import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './src/screens/Login';
import Project from './src/screens/Project';
import SignUp from './src/screens/SignUp';
import Count from './src/screens/Count';
import CustomInput from './src/screens/CustomInput';
import { Home } from './src/screens/Home';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Project" component={Project} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Count" component={Count} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;
