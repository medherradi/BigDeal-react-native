import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import AppText from './AppText'

export default function AppConfigProfile() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../assets/profile.jpg')} />
      <View style={styles.content}>
        <AppText style={styles.name}>Sarra</AppText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 10,
    borderRadius: 10,
    padding: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: colors.white,
  },
  content: {
    justifyContent: 'center',
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 30,
  },
  name: {
    fontSize: 15,
    fontWeight: '800'
  }
})