import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  ImageBackground,
  Pressable,
} from 'react-native';

import {Formik, Field} from 'formik';
import * as yup from 'yup';
import CustomInput from '../components/CustomInput';
import {signUp} from '../services/Auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = ({navigation}) => {
  const signUpValidationSchema = yup.object().shape({
    fullName: yup
      .string()
      .matches(/(\w.+\s).+/, 'Enter at least 2 names')
      .required('Full name is required'),
    age: yup
      .string()
      .matches(/\d\d/, 'Enter a valid age')
      .required('Age is required')
      .max(2, ({max}) => `Password must be at least ${max} characters`),
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email is required'),
    password: yup
      .string()
      //   .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      //   .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      //   .matches(/\d/, 'Password must have a number')
      //   .matches(
      //     /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      //     'Password must have a special character',
      //   )
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords do not match')
      .required('Confirm password is required'),
  });

  return (
    <>
      <ImageBackground
        style={{flex: 1, resizeMode: 'cover'}}
        source={require('../../src/images/bg3.jpg')}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <View style={styles.signupContainer}>
            <Text style={{fontSize: 20}}>Sign Up Screen</Text>

            <Formik
              validationSchema={signUpValidationSchema}
              initialValues={{
                fullName: '',
                email: '',
                age: '',
                password: '',
                confirmPassword: '',
              }}
              onSubmit={async values => {
                const response = await signUp({
                  email: values.email,
                  name: values.fullName,
                  age: values.age,
                  password: values.password,
                });

                console.log('Im Here!!!!!!!', response);
                if (response.user) {
                  alert('succefully added');
                  const jsonValue = JSON.stringify(response.user);
                  await AsyncStorage.setItem('userData', jsonValue);
                  navigation.navigate('HomePage');
                } else {
                  alert('Already Exists');
                }

                // try{
                //   await AsyncStorage.setItem(values.email,JSON.stringify(values));
                //   alert ("successfully added")
                //   console.log(values);
                // }
                // catch(err){
                //   console.log(err);
                //   alert ("user already exist")
                // }  correct

                // try {
                //   const jsonValue = JSON.stringify(values)
                //   await AsyncStorage.setItem(values.email, jsonValue)
                //   alert("Successfully Added")
                //   console.log(jsonValue);
                // } catch (e) {
                //   console.log(e);
                //   alert('User Already Exist');
                // }
                // // console.log(values);
                // // navigation.navigate('Project');
              }}>
              {({handleSubmit, isValid}) => (
                <>
                  <Field
                    component={CustomInput}
                    name="fullName"
                    placeholder="Full Name"
                    style={styles.field}
                  />
                  <Field
                    component={CustomInput}
                    name="email"
                    placeholder="Email Address"
                    keyboardType="email-address"
                    style={styles.field}
                  />
                  <Field
                    component={CustomInput}
                    name="age"
                    placeholder="Age"
                    keyboardType="numeric"
                    style={styles.field}
                  />
                  <Field
                    component={CustomInput}
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    style={styles.field}
                  />
                  <Field
                    component={CustomInput}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    secureTextEntry
                    style={styles.field}
                  />

                  <Pressable style={styles.loginButton}>
                    <Text
                      style={{
                        fontSize: 15,
                        textAlign: 'center',
                        color: 'white',
                        marginTop: 8,
                      }}
                      onPress={handleSubmit}
                      disabled={!isValid}>
                      SignUp
                    </Text>
                  </Pressable>
                </>
              )}
            </Formik>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupContainer: {
    width: '80%',
    alignItems: 'center',

    padding: 10,
    elevation: 10,
  },
  field: {
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 5,
    backgroundColor: 'white',
    width: 200,
    height: 30,
    textAlign: 'center',
    color:'black',
  },
  loginButton: {
    backgroundColor: 'orange',
    marginVertical: 10,
    height: 35,
    width: 80,
    borderRadius: 5,
  },
});
export default SignUp;
