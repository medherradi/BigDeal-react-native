import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'

export default function ImageScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.left}>exit</Text>
      <Text style={styles.right}>trash</Text>

      <Image resizeMode='contain' style={styles.pic} source={require('../assets/table.jpg')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    position: 'relative'
  },
  left: {
    position: 'absolute',
    top: 60,
    left: 30,
  },
  right: {
    position: 'absolute',
    top: 60,
    right: 30,
  },
  pic: {
    marginTop: 0,
    width: '100%',
    height: '100%',
  }
})