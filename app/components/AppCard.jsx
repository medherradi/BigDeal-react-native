import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from './AppText'
import colors from '../config/colors'


export default function AppCard({ name, price, image, style }) {
  return (
    <View style={[styles.container, style]}>
      <Image style={styles.img} source={image} />
      <View style={styles.content}>
        <AppText style={styles.name}>{name}</AppText>
        <AppText style={styles.price}>{price}</AppText>
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
    marginBottom: 20
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
    fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'Avenir',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    letterSpacing: 2
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'Avenir',
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: colors.secondary
  }
})