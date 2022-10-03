import React from 'react';

import { useRoute } from '@react-navigation/native';

import {
  ImageBackground,
  Text,
  StyleSheet,
  Button,
  View,
  Pressable,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';


export default User =  ({navigation}) => {

    const route = useRoute();
  

    return (
         
        <SafeAreaView style={styles.body}>
            <Icon name="user" size={180} />
            <View>
            <Text style={ {fontSize:30,textAlign:'center',marginHorizontal:5,marginVertical:30,}}>Profile Details</Text>
            <View style={styles.container}>
             <Text style={styles.text1}>    Name</Text>
             <Text style={styles.text}>{route.params.name}</Text>
             <Text  style={styles.text1}>    Email</Text>
             <Text style={styles.text}>{route.params.email}</Text>
             <Text  style={styles.text1}>    Age</Text>
            <Text style={styles.text}>{route.params.age}</Text>
            </View>
            
            <Pressable style={styles.Button}>
                    <Text style={{ fontSize: 15, textAlign: 'center', color: 'black', marginTop: 8, }} onPress={() => {navigation.navigate('UpdatePage')}}  >
                      Update
                    </Text></Pressable>
                
            <Pressable style={styles.Button}>
                    <Text style={{ fontSize: 15, textAlign: 'center', color: 'black', marginTop: 8, }} onPress={() => {navigation.navigate('Project')}}  >
                      Logout
                    </Text></Pressable>
                    </View>
            
        </SafeAreaView>
 
    );
}

const styles = StyleSheet.create({

    body:{
        flex:1,
        alignItems:'center',
        alignContent:'center',
        // backgroundColor:'cyan'
    },
    container:{
        marginHorizontal:25,
        marginVertical:15,
        borderWidth:2,
        backgroundColor:'#e6e6e6',
        borderRadius:15,
        
    },
    text:{
        fontSize:20,
        marginVertical:7,
        marginHorizontal:15,
        borderWidth:1,
        backgroundColor:'white',
        marginTop: 3,
        marginBottom:10,
        
    },
    text1:{
        marginVertical:7,
        fontSize:15,
    },
    Button:{
        backgroundColor:'orange',
        marginHorizontal:150,
        marginVertical: 10,
        borderRadius: 5,
        height: 35,
        width: 80,
    }
   

});