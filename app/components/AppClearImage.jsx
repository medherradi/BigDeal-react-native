import { StyleSheet, TouchableHighlight, View } from 'react-native'
import React from 'react'
import AppText from './AppText'
import colors from '../config/colors'

export default function AppClearImage({ onPress, images }) {

  if (images.length < 2) {
    return null
  }
  return (
    <View style={styles.clearButton}>
      <TouchableHighlight style={styles.clear} onPress={onPress} underlayColor={colors.light} >
        <AppText style={styles.text}>clear all {images.length}</AppText>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  clearButton: {
    width: '100%',
    alignItems: 'center'
  },
  clear: {
    marginTop: 5,
    width: 150,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold'
  },

})