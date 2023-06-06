import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from './AppText'
import colors from '../config/colors'

export default function AppProfile() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../assets/profile.jpg')} />
      <View style={styles.content}>
        <AppText style={styles.name}>Sarra</AppText>
        <AppText style={styles.gmail}>sarra@gmail.com</AppText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 10,
    borderRadius: 10,
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: colors.white,
  },
  content: {
    justifyContent: 'center',
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    fontSize: 15,
    fontWeight: '800'
  },
  gmail: {
    color: colors.layer,
    fontWeight: '700',
  }
})