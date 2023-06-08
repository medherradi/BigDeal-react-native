import { Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import AppScreen from '../components/AppScreen'
import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'


export default function LoginScreen() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    console.log(email, password)
  }
  return (
    <AppScreen style={styles.login}>
      <Image style={styles.img} source={require('../assets/logo.png')} />
      <AppTextInput value={email} onChange={setEmail} name='mail' placeholder='Enter Your Email' />
      <AppTextInput value={password} onChange={setPassword} secureEntry={true} name='lock' placeholder='Enter Your Password' />
      <AppButton text='Login' background='secondary' onPress={handleSubmit} />
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