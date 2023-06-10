import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import AppText from './AppText'
import colors from '../config/colors'


export default function AppItemPicker({ label, onPress }) {
  return (
    <TouchableOpacity style={styles.cat} onPress={onPress}>
      <MaterialIcons name={label.icon} size={25} color={colors.secondary} />
      <AppText style={styles.choice}>{label.label}</AppText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cat: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 90,
    borderRadius: 10,
    backgroundColor: colors.white
  },
  choice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.secondary,
  }
})