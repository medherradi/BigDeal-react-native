import { StyleSheet } from 'react-native'
import React from 'react'
import AppText from './AppText'
import colors from '../config/colors'

export default function AppErrors({ error, touched }) {

  if (!touched || !error) {
    return null
  }
  return (
    <AppText style={styles.error}>{error}</AppText>
  )
}

const styles = StyleSheet.create({
  error: {
    color: colors.perfect
  }
})