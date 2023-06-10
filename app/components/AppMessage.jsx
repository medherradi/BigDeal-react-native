import { StyleSheet, View, Image, TouchableHighlight } from 'react-native'
import React from 'react'
import AppText from './AppText'
import colors from '../config/colors'
import Swipable from 'react-native-gesture-handler/Swipeable'
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { MaterialIcons } from '@expo/vector-icons'


export default function AppMessage({ name, content, picture, onPress, renderRightActions }) {
  return (
    <GestureHandlerRootView>
      <Swipable renderRightActions={renderRightActions}>
        <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
          <View style={styles.container}>
            <Image style={styles.img} source={picture} />
            <View style={styles.content}>
              <AppText style={styles.name}>{name}</AppText>
              <AppText style={styles.message}>{(content.length > 20) ? `${content.substring(0, 15)}...` : content}</AppText>
            </View>
            <View style={styles.chevron}>
              <MaterialIcons name="chevron-right" size={24} color={colors.layer} />
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
  content: {
    flex: 1,
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
  },
  chevron: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})