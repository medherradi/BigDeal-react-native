import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik'
import AppButton from './AppButton'

export default function AppSubmitForm({ text, background }) {

  const { handleSubmit } = useFormikContext()
  return (
    <AppButton
      text={text}
      background={background}
      onPress={handleSubmit}
    />
  )
}

const styles = StyleSheet.create({})