import { Image, ScrollView, StyleSheet, TouchableHighlight, View } from 'react-native'
import React, { useState } from 'react'
import AppScreen from './AppScreen'
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors';
import AppText from './AppText';

export default function AppImagePicker() {
  const [images, setImages] = useState([])

  const handlImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    }
    )
    if (!result.canceled) {
      console.log(result.assets[0])
      setImages((prev) => [...prev, result.assets[0].uri])
    }
  }

  return (
    <AppScreen>
      <View style={styles.scroll}>
        <ScrollView horizontal>
          {images.length ?
            images.map((image) => {
              return <View key={image} style={styles.imgcont} >
                <Image style={styles.img} source={{ uri: image }} />
                <TouchableHighlight onPress={() => setImages(images.filter((img) => img !== image))} underlayColor={colors.light}>
                  <View style={styles.icon}>
                    <MaterialCommunityIcons name="trash-can" size={20} color={colors.layer} />
                  </View>
                </TouchableHighlight>
              </View>
            }) : null
          }
          <TouchableHighlight style={styles.button} onPress={handlImage} underlayColor={colors.light} >
            <View style={styles.container}>
              <MaterialCommunityIcons name="camera" size={40} color={colors.layer} />
            </View>
          </TouchableHighlight>
        </ScrollView>
      </View>
      {(images.length > 1) ? <View style={styles.clearButton}>
        <TouchableHighlight style={styles.clear} onPress={() => setImages([])} underlayColor={colors.light} >
          <AppText style={styles.text}>clear all {images.length}</AppText>
        </TouchableHighlight>
      </View> : null}
    </AppScreen >
  )
}

const styles = StyleSheet.create({
  scroll: {
    flexDirection: 'row',
    height: 100,
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
  clear: {
    marginTop: 10,
    width: 150,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  clearButton: {
    width: '100%',
    alignItems: 'center'
  }
})