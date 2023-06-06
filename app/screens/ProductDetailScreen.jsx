import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../components/AppText'
import colors from '../config/colors'


export default function ProductDetailScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../assets/tab.jpg')} />
      <View style={styles.content}>
        <AppText style={styles.name}>table for home</AppText>
        <AppText style={styles.price}>$150</AppText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.nwbackground
  },
  img: {
    width: '100%',
    height: 300
  },
  content: {
    padding: 20,
    gap: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: colors.primary,
    letterSpacing: 2
  },
  price: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.secondary,
    letterSpacing: 2
  }
})