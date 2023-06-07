import { StyleSheet, View, Image, Text } from 'react-native'
import React from 'react'
import AppText from './AppText'
import colors from '../config/colors'

export default function AppMessage({ name, content, picture }) {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={picture} />
      <View style={styles.content}>
        <AppText style={styles.name}>{name}</AppText>
        <AppText style={styles.message}>{content}</AppText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  content: {
    justifyContent: 'center',
  },
  name: {
    fontSize: 15,
    fontWeight: '800',
  },
  message: {
    color: colors.layer,
    fontWeight: '700',
  }
})