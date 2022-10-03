import React from 'react';

import {
  ImageBackground,
  Text,
  StyleSheet,
  Button,
  View,
  Pressable,
  TextInput,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { signIn } from '../services/Auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    password: yup
      .string()
      // .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      // .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      // .matches(/\d/, 'Password must have a number')
      // .matches(
      //   /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      //   'Password must have a special character',
      // )
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });

  return (
    <ImageBackground
      source={require('../../src/images/bg3.jpg')}
      style={styles.loginContainer}>
      <Text style={{ textAlign: 'center', fontSize: 20 }}>Login Screen</Text>

      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ email: '', password: '' }}
        onSubmit={async values => {

          // try {
          //   const data = await AsyncStorage.getItem(values.email);
          //   const output = JSON.parse(data);

          //   // const user = JSON.parse(values);
          //   if (output.email == values.email && output.password == values.password
          //   ) {
          //     // alert('successfully logged in');
          //     console.log(values);
          //     navigation.navigate('User',{
          //       email:output.email,
          //       password:output.password,
          //       age:output.age,
          //       fullName:output.fullName,
          //     });
          //   } else {
          //     alert('Incorrect email or password');
          //   }
          // } catch (err) {
          //   console.log(err);
          // }correct

          console.log(values);
          const response = await signIn({
            email: values.email,
            password: values.password,
          });
          console.log(response.user);
          let account = response.user;


          if (response.user) {

            navigation.navigate('User',
              {
                email: account.email,
                name: account.name,
                age: account.age,
              });
          } else {
            alert('Enter correct username and password');
          }

          // try {
          // const data = await AsyncStorage.getItem(values.email)
          // const output = JSON.parse(data)
          //   console.log(output);

          //   // const user = JSON.parse(values);
          //   if (output.email == values.email && output.password == values.password) {
          //     alert("Successfully Logged In");
          //     iname = output.name;
          //     iage = output.age;
          //     iemail = output.email;
          //     console.log(values);
          //     navigation.navigate('User',  { iname ,iemail ,iage});
          //   };

          // }
          // catch (err) {
          //   console.log(err);
          //   alert("Incorrect email or password");
          // }
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
            <TextInput
              name="email"
              placeholder="Email Address"
              style={styles.textInput}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
            />
            {errors.email && (
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
            )}
            <TextInput
              name="password"
              placeholder="Password"
              style={styles.textInput}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            {errors.password && (
              <Text style={{ fontSize: 10, color: 'red' }}>
                {errors.password}
              </Text>
            )}
            <Pressable style={styles.loginButton}>
              <Text style={{ fontSize: 15, textAlign: 'center', color: 'white', marginTop: 8, }} onPress={handleSubmit} disabled={!isValid}  >
                Login
              </Text></Pressable>
          </>
        )}
      </Formik>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    elevation: 10,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  textInput: {
    height: 40,
    width: 200,
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    borderWidth: 2,
    textAlign: 'center',
  },
  loginButton:
  {
    backgroundColor: 'orange',
    marginVertical: 10,
    height: 35,
    width: 80,
    borderRadius: 5,

  },
});

export default Login;
