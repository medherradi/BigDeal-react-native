import { StyleSheet, FlatList, View } from 'react-native'
import React, { useState } from 'react'
import AppMessage from '../components/AppMessage'
import colors from '../config/colors'
import AppScreen from '../components/AppScreen'
import AppSeparator from '../components/AppSeparator'
import AppText from '../components/AppText'
import AppSwipe from '../components/AppSwipe'

const initialMessages = [
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
  const [messages, setMessages] = useState(initialMessages)
  const [isRrefresh, setIsRefresh] = useState(false)

  const handleDelete = (message) => {
    setMessages(messages.filter((msg) => msg.id !== message.id))
  }

  return (
    <AppScreen>
      <FlatList style={styles.flatList}
        data={messages}
        keyExtractor={(msg) => msg.id.toString()}
        renderItem={({ item }) => {
          return <AppMessage
            {...item}
            onPress={() => console.log(item)}
            renderRightActions={() => (<AppSwipe onPress={() =>
              handleDelete(item)
            } />)} />
        }}
        ItemSeparatorComponent={AppSeparator}
        refreshing={isRrefresh}
        onRefresh={() => setMessages([{
          id: 2,
          name: 'sarra',
          content: 'can you give us a good price hhhh',
          picture: require('../assets/profile.jpg'),
        }])}
      />
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  flatList: {
    marginTop: 20,
  }

})