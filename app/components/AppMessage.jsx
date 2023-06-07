import { StyleSheet, View, Image, TouchableHighlight } from 'react-native'
import React from 'react'
import AppText from './AppText'
import colors from '../config/colors'
import Swipable from 'react-native-gesture-handler/Swipeable'
import { GestureHandlerRootView } from "react-native-gesture-handler"


export default function AppMessage({ name, content, picture, onPress, renderRightActions }) {
  return (
    <GestureHandlerRootView>
      <Swipable renderRightActions={renderRightActions}>
        <TouchableHighlight onPress={onPress} underlayColor={colors.background}>
          <View style={styles.container}>
            <Image style={styles.img} source={picture} />
            <View style={styles.content}>
              <AppText style={styles.name}>{name}</AppText>
              <AppText style={styles.message}>{content}</AppText>
            </View>
          </View>
        </TouchableHighlight>
      </Swipable>
    </GestureHandlerRootView>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 10,
    paddingTop: 10,
    paddingBottom: 10,
    padding: 10,
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  name: {
    fontSize: 15,
    fontWeight: '800',
  },
  message: {
    color: colors.layer,
    fontWeight: '700',
  }
})