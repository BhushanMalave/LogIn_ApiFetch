import React from "react";
import {
    ImageBackground,
    Text,
    View,
    StyleSheet,
    Pressable,
    SafeAreaView,
   
  } from 'react-native';


  export const Home = ({navigation}) => 
  {
    return(
          
        <ImageBackground
        style={{ flex: 1, resizeMode: 'cover' }}
        source={require('../../src/images/bg3.jpg')}>
            <SafeAreaView>
            <View>
            <Pressable style={styles.loginButton}>
              <Text style={{ fontSize: 15, textAlign: 'center', color: 'white', marginTop: 8, }} onPress={navigation.navigate('LogIn')} >
                Let's Start
              </Text></Pressable>
        </View>
            </SafeAreaView>
            </ImageBackground>
          
        

     );

  };

  const styles =StyleSheet.create(
    {
        loginButton:
        {
          backgroundColor: 'orange',
          marginVertical: 10,
          height: 35,
          width: 80,
          borderRadius: 5,
      
        },
      });
   