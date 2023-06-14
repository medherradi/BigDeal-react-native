import { StyleSheet, View, TouchableHighlight, Image } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'

export default function AppInputImage({ image, onPress }) {
  return (
    <View style={styles.imgcont} >
      <Image style={styles.img} source={{ uri: image }} />
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="trash-can" size={20} color={colors.layer} />
        </View>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  imgcont: {
    width: 100,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 5
  },
  img: {
    width: '100%',
    height: '100%',
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 5,
    right: 5
  },
})