import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import AppText from './AppText'

export default function AppMessage({ name, content, picture }) {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={picture} />
      <View style={styles.content}>
        <AppText>{name}</AppText>
        <AppText>{content}</AppText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 10
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  content: {
    justifyContent: 'center',
  }
})