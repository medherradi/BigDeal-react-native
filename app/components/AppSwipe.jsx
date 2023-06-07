import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import { FontAwesome } from '@expo/vector-icons';


export default function AppSwipe({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.swipe} >
        <FontAwesome name="trash" size={30} color={colors.white} />
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  swipe: {
    width: 60,
    backgroundColor:
      colors.esthetic,
    alignItems: 'center',
    justifyContent: 'center'
  }
})