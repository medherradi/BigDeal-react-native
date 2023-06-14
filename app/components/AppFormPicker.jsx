import { StyleSheet } from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik'
import AppPicker from './AppPicker'
import AppErrorMessage from './AppErrorMessage'

export default function AppFormPicker({ items, field, placeholder }) {

  const { setFieldValue, values, touched, errors } = useFormikContext()
  console.log(values)
  console.log(errors)

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(field, item)}
        selectedItem={values[field]}
        placeholder={placeholder}
      />
      <AppErrorMessage error={errors[field]} visible={touched[field]}>{errors[field]}</AppErrorMessage>
    </>
  )
}

const styles = StyleSheet.create({})