import { Image, StyleSheet } from 'react-native'
import React from 'react'
import AppScreen from '../components/AppScreen'
import * as yup from 'yup'
import AppInputForm from '../components/AppInputForm'
import AppSubmitForm from '../components/AppSubmitForm'
import AppFormik from '../components/AppFormik'

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label('Email'),
  password: yup.string().required().min(6).label('Password')
})

export default function LoginScreen() {

  return (
    <AppScreen style={styles.login}>
      <Image style={styles.img} source={require('../assets/logo.png')} />
      <AppFormik validationSchema={validationSchema} onSubmit={(values) => console.log(values)} initialValues={{ email: '', password: '' }}>

        <AppInputForm
          name='mail'
          placeholder='Enter your email'
          field='email'
        />
        <AppInputForm
          name='lock'
          placeholder='Enter you password'
          field='password'
          secureEntry={true}
        />
        <AppSubmitForm
          text='Login'
          background='secondary' />

      </AppFormik>
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