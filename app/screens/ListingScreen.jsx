import { FlatList, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import AppScreen from '../components/AppScreen'
import AppCard from '../components/AppCard'
import { Swipeable } from 'react-native-gesture-handler'
import colors from '../config/colors'

const listings = [
  {
    id: 1,
    image: require('../assets/product1.jpg'),
    name: 'perfect table',
    price: '$300'
  },
  {
    id: 2,
    image: require('../assets/product2.jpg'),
    name: 'light table',
    price: '$400'
  },
  {
    id: 3,
    image: require('../assets/product3.jpg'),
    name: 'table for house',
    price: '$600'
  },
]

export default function ListingScreen() {
  return (
    <AppScreen style={styles.listing}>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          <TouchableHighlight onPress={() => console.log(item)} underlayColor={colors.light}>
            <AppCard {...item} style={styles.space} />
          </TouchableHighlight>}
      />
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  listing: {
    padding: 15,
  },
  space: {
    marginVertical: 10,
  }
})