import { StyleSheet } from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik'
import AppTextInput from './AppTextInput'
import AppErrorMessage from './AppErrorMessage'

export default function AppInputForm({ name, placeholder, field, ...othersProps }) {

  const { handleChange, setFieldTouched, values, touched, errors } = useFormikContext()

  return (
    <>
      <AppTextInput
        value={values[field]}
        onChangeText={handleChange(field)}
        name={name}
        onBlur={() => setFieldTouched(field)}
        placeholder={placeholder}
        {...othersProps}
      />
      <AppErrorMessage error={errors[field]} visible={touched[field]}>{errors[field]}</AppErrorMessage>
    </>
  )
}

const styles = StyleSheet.create({})