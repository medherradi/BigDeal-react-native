import { Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import AppScreen from '../components/AppScreen'
import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'
import { Formik } from 'formik'


export default function LoginScreen() {


  return (
    <AppScreen style={styles.login}>
      <Image style={styles.img} source={require('../assets/logo.png')} />
      <Formik initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleSubmit, values, handleBlur }) => (
          <>
            <AppTextInput value={values.emailemail} onChangeText={handleChange('email')} name='mail' placeholder='Enter Your Email' />
            <AppTextInput value={values.passwordpassword} onChangeText={handleChange('password')} secureEntry={true} name='lock' placeholder='Enter Your Password' />
            <AppButton text='Login' background='secondary' onPress={handleSubmit} />
          </>
        )
        }
      </Formik>
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  login: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    rowGap: 20
  },
  img: {
    width: '60%',
    resizeMode: 'contain',
    marginBottom: 30
  },
})