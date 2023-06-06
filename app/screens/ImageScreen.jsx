import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import { AntDesign, FontAwesome } from '@expo/vector-icons';



export default function ImageScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.left}>
        <AntDesign name="closecircle" size={35} color='gray' />
      </Text>
      <Text style={styles.right}>
        <FontAwesome name="trash" size={35} color="gray" />
      </Text>

      <Image resizeMode='contain' style={styles.pic} source={require('../assets/table.jpg')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  left: {
    position: 'absolute',
    top: 50,
    left: 30,
  },
  right: {
    position: 'absolute',
    top: 50,
    right: 30,
  },
  pic: {
    marginTop: 0,
    width: '100%',
    height: '100%',
  }
})