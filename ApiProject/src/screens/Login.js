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
          // // console.log(values);
          // const response = await signIn({
          //   email: values.email,
          //   password: values.password,
          // });
          // if (response.user) {
          //   navigation.navigate('Count');
          // } else {
          //   alert('Enter correct username and password');
          // }

          try {
            const data = await AsyncStorage.getItem(values.email)
            const output = JSON.parse(data)

            // const user = JSON.parse(values);
            if (output.email == values.email && output.password == values.password) {
              alert("Successfully Logged In");
              console.log(values);
              navigation.navigate('Count');
            };

          }
          catch (err) {
            console.log(err);
            alert("Incorrect email or password");
          }
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
            <Button onPress={handleSubmit} title="LOGIN" disabled={!isValid} />
            {/* <Pressable
              onPress={handleSubmit}
              title="SIGN UP"
              disabled={!isValid}
              style={{
                alignContent: 'center',
                backgroundColor: 'cyan',
                width: 120,
                height: 35,
                marginTop: 10,
                borderWidth: 1,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  alignContent: 'center',
                  textAlign: 'center',
                  fontSize: 20,
                }}>
                Login
              </Text>
            </Pressable> */}
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
});

export default Login;
