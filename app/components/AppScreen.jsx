import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native'
import React from 'react'
import colors from '../config/colors'

export default function AppScreen({ children }) {
  return (
    <SafeAreaView style={styles.container}>
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.background,
  }
})