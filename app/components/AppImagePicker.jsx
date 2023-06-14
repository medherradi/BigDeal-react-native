import { Image, ScrollView, StyleSheet, TouchableHighlight, View } from 'react-native'
import React, { useRef } from 'react'
import AppErrorMessage from './AppErrorMessage';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors';
import { useFormikContext } from 'formik';
import AppInputImage from './AppInputImage';
import AppClearImage from './AppClearImage';

export default function AppImagePicker({ field }) {

  const { setFieldValue, values, touched, errors } = useFormikContext()

  const scrollView = useRef()

  const onAddImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    }
    )
    if (!result.canceled) {
      setFieldValue(field, [...values[field], result.assets[0].uri])
    }
  }

  return (
    <>
      <View style={styles.scroll}>
        <ScrollView ref={scrollView} horizontal onContentSizeChange={() => scrollView.current.scrollToEnd()}>
          {values[field].length ?
            values[field].map((image) => {
              return <AppInputImage key={image} image={image} onPress={() => setFieldValue(field, values[field].filter((img) => img !== image))} />
            }) : null
          }
          <TouchableHighlight style={styles.button} onPress={onAddImage} underlayColor={colors.light} >
            <View style={styles.container}>
              <MaterialCommunityIcons name="camera" size={40} color={colors.layer} />
            </View>
          </TouchableHighlight>
        </ScrollView>
      </View>
      <View>
        <AppClearImage images={values[field]} onPress={() => setFieldValue(field, [])} />
      </View>
      <AppErrorMessage error={errors[field]} visible={touched[field]}>{errors[field]}</AppErrorMessage>
    </>
  )
}

const styles = StyleSheet.create({
  scroll: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    width: 100,
    height: 100,
  },
  container: {
    width: 100,
    height: 100,
    backgroundColor: colors.white,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

})