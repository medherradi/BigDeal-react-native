import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../config/colors'


export default function AppButton({ text, onPress, textcolor = 'background', background = 'primary' }) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: colors[background] }]} onPress={onPress}>
      <Text style={[styles.text, { color: colors[textcolor] }]}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 13,
    width: '100%'
  },
  text: {
    color: colors.background,
    fontSize: 15,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  }
})