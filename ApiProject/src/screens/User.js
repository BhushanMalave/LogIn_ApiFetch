import React, {useState} from 'react';

import {useRoute} from '@react-navigation/native';

import {
  ImageBackground,
  Text,
  StyleSheet,
  Button,
  View,
  Pressable,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {logout} from '../services/Auth';

export default User = ({navigation}) => {
  const route = useRoute();

  const getMyObject = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('userData');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
  };

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('userData');
      navigation.navigate('HomePage');
    } catch (e) {
      // remove error
      console.log(e);
    }
  };

  const [token, setToken] = useState(null);
  const onClickhandler = async () => {
    const data = await getMyObject();
    setToken(data);
    //console.log(token.token);
    const response = await logout(data.token);
    if (response) {
      removeValue();
    }
  };

  return (
    <SafeAreaView style={styles.body}>
      <Icon name="user" size={180} />
      <View>
        <Text
          style={{
            fontSize: 45,
            textAlign: 'center',
            marginHorizontal: 5,
            marginVertical: 30,
          }}>
          Profile Details
        </Text>
        <View style={styles.container}>
          <Text style={styles.text1}> Name</Text>
          <Text style={styles.text}>  {route.params.name}</Text>
          <Text style={styles.text1}> Email</Text>
          <Text style={styles.text}>  {route.params.email}</Text>
          <Text style={styles.text1}> Age</Text>
          <Text style={styles.text}>  {route.params.age}</Text>
        </View>

        <Pressable style={styles.Button}>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              color: 'black',
              marginTop: 8,
            }}
            onPress={() => {
              navigation.navigate('UpdatePage');
            }}>
            Update
          </Text>
        </Pressable>

        <Pressable style={styles.Button}>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              color: 'black',
              marginTop: 8,
            }}
            onPress={onClickhandler}>
            Logout
          </Text>
        </Pressable>
        <Pressable style={styles.Button}>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              color: 'black',
              marginTop: 8,
            }}
            onPress={ () => {navigation.navigate('Count')}}>
            Count
          </Text>
        </Pressable>
        <Pressable style={styles.Button}>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              color: 'black',
              marginTop: 8,
            }}
            onPress={() => {navigation.navigate('Flex')}}>
            Flex
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor:'#57a89f',
  },
  container: {
    marginHorizontal: 25,
    marginVertical: 15,
    borderWidth: 2,
    backgroundColor: '#A85760',
    borderRadius: 15,
  },
  text: {
    fontSize: 20,
    marginVertical: 7,
    marginHorizontal: 15,
    borderWidth: 1,
    backgroundColor: 'white',
    marginTop: 3,
    marginBottom: 10,
    color:'black',
  },
  text1: {
    marginVertical: 7,
    fontSize: 15,
    color:'black',
  },
  Button: {
    backgroundColor: 'orange',
    marginHorizontal: 150,
    marginVertical: 10,
    borderRadius: 5,
    height: 35,
    width: 80,
  },
});

// import React, { useState } from 'react';

// import { useRoute } from '@react-navigation/native';

// import {
//     ImageBackground,
//     Text,
//     StyleSheet,
//     Button,
//     View,
//     Pressable,
//     TextInput,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { getUser, logout } from '../services/Auth';

// export default User = async  ({ navigation }) => {
//     // const route = useRoute();
//     const [token, setToken] = useState(null);
//     // const [response,setResponse] = useState(null)
//     // const onClickhandler1 = async () =>
//     // {
//     //       const data = await AsyncStorage.getItem('userData')
//     //       const output = JSON.parse(data)
//     //       console.log(output);
//     //       setToken(data);
//     //       setResponse( await  getUser(token));
//     //       console.log(response);
//     // }

//     const onClickhandler = async () => {
//         const data = await AsyncStorage.getItem('userData');
//         const output = JSON.parse(data);
//         setToken(data);
//         const response = await logout(token);
//         console.log(response);
//         try {
//             await AsyncStorage.removeItem('userData');
//             navigation.navigate('HomePage');
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     return (
//         <SafeAreaView style={styles.body}>
//             <Icon name="user" size={180} />
//             <View>
//                 <Text
//                     style={{
//                         fontSize: 30,
//                         textAlign: 'center',
//                         marginHorizontal: 5,
//                         marginVertical: 30,
//                     }}>
//                     Profile Details
//                 </Text>
//                 <View style={styles.container}>
//                     <Text style={styles.text1}>Name</Text>
//                     <Text style={styles.text}></Text>
//                     <Text style={styles.text1}>Email</Text>
//                     <Text style={styles.text}></Text>
//                     <Text style={styles.text1}> Age</Text>
//                     <Text style={styles.text}></Text>
//                 </View>

//                 <Pressable style={styles.Button}>
//                     <Text
//                         style={{
//                             fontSize: 15,
//                             textAlign: 'center',
//                             color: 'black',
//                             marginTop: 8,
//                         }}
//                         onPress={() => {

//                             navigation.navigate('UpdatePage');
//                         }}>
//                         Update
//                     </Text>
//                 </Pressable>

//                 <Pressable style={styles.Button}>
//                     <Text
//                         style={{
//                             fontSize: 15,
//                             textAlign: 'center',
//                             color: 'black',
//                             marginTop: 8,
//                         }}
//                         onPress={onClickhandler}>
//                         Logout
//                     </Text>
//                 </Pressable>
//             </View>
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     body: {
//         flex: 1,
//         alignItems: 'center',
//         alignContent: 'center',
//         // backgroundColor:'cyan'
//     },
//     container: {
//         marginHorizontal: 25,
//         marginVertical: 15,
//         borderWidth: 2,
//         backgroundColor: '#e6e6e6',
//         borderRadius: 15,
//     },
//     text: {
//         fontSize: 20,
//         marginVertical: 7,
//         marginHorizontal: 15,
//         borderWidth: 1,
//         backgroundColor: 'white',
//         marginTop: 3,
//         marginBottom: 10,
//     },
//     text1: {
//         marginVertical: 7,
//         fontSize: 15,
//     },
//     Button: {
//         backgroundColor: 'orange',
//         marginHorizontal: 150,
//         marginVertical: 10,
//         borderRadius: 5,
//         height: 35,
//         width: 80,
//     },
// });
