import { StyleSheet, View, TextInput, Platform } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import colors from '../config/colors'


export default function AppNewTextInput({ name, placeholder, value, onBlur, onChangeText, ...otherProps }) {
  return (
    <View style={styles.input}>
      <MaterialIcons name={name} size={30} color={colors.secondary} />
      <TextInput
        autoCorrect={false}
        placeholder={placeholder}
        style={styles.data}
        {...otherProps}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    borderRadius: 25,
    borderColor: colors.primary,
    padding: 10,
    paddingTop: 10,
    paddingBottom: 10,
    columnGap: 5,
    alignItems: 'center',
    backgroundColor: colors.white,

  },
  data: {
    flex: 1,
    fontSize: 17,
    fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'Avenir',
    fontWeight: '700',
    color: colors.primary,

  }
})

