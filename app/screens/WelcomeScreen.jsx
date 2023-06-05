import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/pic.jpg')}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image style={styles.img} source={require('../assets/logo.png')} />
        </View>
        <View style={styles.login}>
          <Text style={styles.textlogin}>Login</Text>
        </View>
        <View style={styles.register}>
          <Text style={styles.text}>Register</Text>
        </View>
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
  login: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 25,
  },
  register: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: colors.background,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 25,
  },
  textlogin: {
    color: colors.background,
  },
  text: {
    color: colors.primary,
  }
})