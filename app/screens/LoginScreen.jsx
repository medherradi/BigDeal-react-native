import { Image, StyleSheet } from 'react-native'
import React from 'react'
import AppScreen from '../components/AppScreen'
import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'
import { Formik } from 'formik'
import * as yup from 'yup'
import AppErrorMessage from '../components/AppErrorMessage'

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label('Email'),
  password: yup.string().required().min(6).label('Password')
})

export default function LoginScreen() {

  return (
    <AppScreen style={styles.login}>
      <Image style={styles.img} source={require('../assets/logo.png')} />
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, values, setFieldTouched, errors, touched }) => (
          <>
            <AppTextInput
              value={values.email}
              onChangeText={handleChange('email')}
              name='mail'
              onBlur={() => setFieldTouched('email')}
              placeholder='Enter Your Email'
            />
            <AppErrorMessage error={errors.email} visible={touched.email}>{errors.email}</AppErrorMessage>
            <AppTextInput
              value={values.password}
              onChangeText={handleChange('password')}
              secureEntry={true}
              name='lock'
              onBlur={() => setFieldTouched('password')}
              placeholder='Enter Your Password'
            />
            <AppErrorMessage error={errors.password} visible={touched.password}>{errors.password}</AppErrorMessage>
            <AppButton
              text='Login'
              background='secondary'
              onPress={handleSubmit}
            />
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