import { StyleSheet, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import colors from '../config/colors'

export default function AppIcon({ name }) {
  return (
    <View style={styles.icon}>
      <MaterialIcons name={name} size={20} color='white' />
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center'
  }
})