import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import AppText from '../components/AppText'
import AppMessage from '../components/AppMessage'

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
    content: 'can you give us a good price',
    picture: require('../assets/profile.jpg'),
  }
]

export default function MessageScreen() {
  return (
    <View>
      <FlatList data={messages}
        keyExtractor={(msg) => msg.id.toString()}
        renderItem={({ item }) => {
          return <AppMessage {...item} />
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
})