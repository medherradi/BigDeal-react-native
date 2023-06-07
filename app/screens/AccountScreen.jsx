import { FlatList, StyleSheet, TouchableHighlight, View } from 'react-native'
import React from 'react'
import AppScreen from '../components/AppScreen'
import AppProfile from '../components/AppProfile'
import AppConfigProfile from '../components/AppConfigProfile'
import settings from '../config/settings'
import AppSeparator from '../components/AppSeparator'
import colors from '../config/colors'

export default function AccountScreen() {
  return (
    <AppScreen>
      <TouchableHighlight onPress={() => console.log('myprofile')} underlayColor={colors.light}>
        <View style={styles.appprofile}>
          <AppProfile />
        </View>
      </TouchableHighlight>

      <View style={styles.settings}>
        <FlatList
          data={settings}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <AppConfigProfile {...item} onPress={() => console.log(item.title)} />}
          ItemSeparatorComponent={() => <AppSeparator />}
        />
      </View>

      <View style={styles.logout}>
        <AppConfigProfile name='logout' title='Logout' />
      </View>
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  settings: {
    marginTop: 30,
  },
  logout: {
    marginTop: 30,
  }

})