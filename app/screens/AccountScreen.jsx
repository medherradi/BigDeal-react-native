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
          renderItem={({ item }) =>
            <TouchableHighlight onPress={() => console.log(item)} underlayColor={colors.light}>
              <View>
                <AppConfigProfile {...item} />
              </View>
            </TouchableHighlight>
          }
          ItemSeparatorComponent={() => <AppSeparator />}
        />
      </View>
      <TouchableHighlight onPress={() => console.log('logout')} underlayColor={colors.light}>
        <View style={styles.logout}>
          <AppConfigProfile name='logout' title='Logout' />
        </View>
      </TouchableHighlight>
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  settings: {
    marginTop: 40,
  },
  logout: {
    marginTop: 40,
  }

})