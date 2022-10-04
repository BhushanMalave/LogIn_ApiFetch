import React from 'react';

import {
  ImageBackground,
  Text,
  StyleSheet,
  Button,
  View,
  Pressable,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import AuthProvider,{ signin}  from '../newProject/AuthContect';

export const LogIn = () => {

  const onclickHandler = () => {

  };
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    password: yup
      .string()
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .matches(
        /[!@#$%^&*()\-_"=+{}; :,<.>]/,
        'Password must have a special character',
      )
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });

  return (
  <View style={styles.container}>
    <View style={{flex:2}}>

    </View>
   <View style={styles.body}>
   <Formik
        validationSchema={loginValidationSchema}
        initialValues={{email: '', password: ''}}
        onSubmit={async values => {
          console.log(values);
          signin(values.email,values.password); 
        }}>
           {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
    <TextInput style={styles.inputText} 
        placeholder="          Enter your Email"
        name="email"
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
        keyboardType="email-address"
    ></TextInput>
    {errors.email && (
              <Text style={{fontSize: 10, color: 'red'}}>{errors.email}</Text>
            )}

    <TextInput style={styles.inputText} 
     placeholder="      Enter your Password"
     name="password"
     onChangeText={handleChange('password')}
     onBlur={handleBlur('password')}
     value={values.password}
     secureTextEntry
    ></TextInput>
    {errors.password && (
              <Text style={{fontSize: 10, color: 'red'}}>
                {errors.password}
              </Text>
            )}
    <Pressable style={styles.loginButton}>
      <Text style={{fontSize:15,textAlign:'center',color:'white',marginTop:8,}} onPress={handleSubmit} disabled={!isValid}  >
        Login
        </Text></Pressable> 
     </>
    )}
    </Formik>
     <Text>Dont have a account, <TouchableOpacity style={{}} onPress={onclickHandler()}><Text style={{color:'blue'}} >Register </Text></TouchableOpacity>Now. </Text>
   </View >
   <View style={{flex:2}}>

   </View>
  </View>);
};


const styles = StyleSheet.create({
  container: {
     backgroundColor:'skyblue',
    flex:1,
    alignContent:'center',

  },
  body:
  {
    //backgroundColor:'red',
    flex:1,
    borderRadius:20,
    alignItems:'center',
    marginVertical:20,
   
  },
  inputText: {
         borderWidth:2,
         borderColor:'black',
         marginHorizontal:10,
         marginVertical:5,
         height:35,
         width:180,
         alignContent:'center',
         backgroundColor:'white',
         borderRadius:8,

  },
  loginButton:
  {
   backgroundColor:'orange',
   marginVertical:10,
   height:35,
   width:80,
   borderRadius:5,
   
  },
});