import { StyleSheet } from 'react-native'
import React from 'react'
import { Formik } from 'formik'

export default function AppFormik({ initialValues, children, onSubmit, validationSchema }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => {
        return <>{children}</>
      }
      }
    </Formik>
  )
}

const styles = StyleSheet.create({})