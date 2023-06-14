
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppImagePicker from './AppImagePicker'
import * as ImagePicker from 'expo-image-picker';

export default function AppFormImage({ field }) {

  const { handleChange, setFieldTouched, values, touched, errors } = useFormikContext()


  return (
    <>
      <AppImagePicker images={values[field]} onAddImage={handleAdd} onRemove={handleRemove} />
    </>
  )
}

const styles = StyleSheet.create({})