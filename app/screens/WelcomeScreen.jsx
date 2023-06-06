import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import AppButton from '../components/AppButton'

export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={9}
      style={styles.background}
      source={require('../assets/pic.jpg')}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image style={styles.img} source={require('../assets/logo.png')} />
        </View>
        <AppButton text='Login' />
        <AppButton text='Register' textcolor="secondary" background="background" />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    padding: 20,
    gap: 15,
  },
  logo: {
    alignItems: 'center',
    marginVertical: 90,
  },
  img: {
    width: '65%',
    resizeMode: 'contain',
  },
})