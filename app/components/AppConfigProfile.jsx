import { StyleSheet, TouchableHighlight, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import AppText from './AppText'
import AppIcon from './AppIcon'

export default function AppConfigProfile({ name, title }) {
  return (

    <View style={styles.container}>
      <AppIcon name={name} />
      <View style={styles.content}>
        <AppText style={styles.title}>{title}</AppText>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 10,
    padding: 10,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: colors.white,
  },
  content: {
    justifyContent: 'center',
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.layer
  }
})