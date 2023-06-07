import { StyleSheet, View } from 'react-native'
import React from 'react'
import AppScreen from '../components/AppScreen'
import AppProfile from '../components/AppProfile'
import AppConfigProfile from '../components/AppConfigProfile'

export default function AccountScreen() {
  return (
    <AppScreen>
      <View style={styles.appprofile}>
        <AppProfile />
      </View>

      <View style={styles.config}>
        <AppConfigProfile />
      </View>

      <View style={styles.logout}>
        <AppConfigProfile />
      </View>
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  appprofile: {
    marginTop: 10,
  },
  config: {
    marginVertical: 50,
  },
})