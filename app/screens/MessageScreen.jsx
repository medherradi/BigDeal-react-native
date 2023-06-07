import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import AppMessage from '../components/AppMessage'
import colors from '../config/colors'
import AppScreen from '../components/AppScreen'
import AppSeparator from '../components/AppSeparator'
import AppText from '../components/AppText'
import AppSwipe from '../components/AppSwipe'

const messages = [
  {
    id: 1,
    name: 'ahmed',
    content: 'i would like to know the last price...',
    picture: require('../assets/profile.jpg'),
  },
  {
    id: 2,
    name: 'sarra',
    content: 'can you give us a good price hhhh',
    picture: require('../assets/profile.jpg'),
  }
]

export default function MessageScreen() {
  return (
    <AppScreen>
      <FlatList style={styles.flatList}
        data={messages}
        keyExtractor={(msg) => msg.id.toString()}
        renderItem={({ item }) => {
          return <AppMessage
            {...item}
            onPress={() => console.log(item)}
            renderRightActions={() => (<AppSwipe onPress={() => console.log(messages.filter((msg) => msg.id !== item.id))} />)} />
        }}
        ItemSeparatorComponent={AppSeparator}
      />
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  flatList: {
    marginTop: 20,
  }

})