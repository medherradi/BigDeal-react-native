import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from './AppText'
import colors from '../config/colors'


export default function AppCard() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../assets/tab.jpg')} />
      <View style={styles.content}>
        <AppText style={styles.name}>table for house</AppText>
        <AppText style={styles.price}>$150</AppText>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: colors.secondary,
    borderWidth: 2,
    marginBottom: 10
  },
  img: {
    width: '100%',
    height: 250
  },
  content: {
    padding: 10,
    marginVertical: 5,
    gap: 4
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: colors.secondary
  }
})