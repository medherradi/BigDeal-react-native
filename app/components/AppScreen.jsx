import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native'
import React from 'react'
import colors from '../config/colors'

export default function AppScreen({ children, style }) {
  return (
    <SafeAreaView style={[styles.container, style]}>
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 10,
    backgroundColor: colors.light,
  }
})