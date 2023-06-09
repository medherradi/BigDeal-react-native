import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik'
import AppPicker from './AppPicker'
import AppErrorMessage from './AppErrorMessage'

export default function AppFormPicker({ items, field }) {

  const { setFieldValue, values, touched, errors } = useFormikContext()

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(field, item)}
        selectedItem={values[field]}
      />
      <AppErrorMessage error={errors[field]} visible={touched[field]}>{errors[field]}</AppErrorMessage>
    </>
  )
}

const styles = StyleSheet.create({})