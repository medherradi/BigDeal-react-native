import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from './AppText'
import colors from '../config/colors'


export default function AppCard({ title, price }) {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../assets/tab.jpg')} />
      <View style={styles.content}>
        <AppText style={styles.name}>{title}</AppText>
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
    fontWeight: 'bold',
    textTransform: 'capitalize',
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