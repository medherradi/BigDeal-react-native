import { Image, ScrollView, StyleSheet, TouchableHighlight, View } from 'react-native'
import React, { useState } from 'react'
import AppScreen from './AppScreen'
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors';

export default function AppImagePicker() {
  const [images, setImages] = useState([])

  const handlImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync()
    if (!result.canceled) {
      console.log(result.assets[0])
      setImages((prev) => [...prev, result.assets[0].uri])
    }
  }



  return (
    <AppScreen>
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
        <TouchableHighlight onPress={handlImage} underlayColor={colors.light} >
          <View style={styles.container}>
            <MaterialCommunityIcons name="camera" size={40} color={colors.layer} />
          </View>
        </TouchableHighlight>
      </ScrollView>
    </AppScreen >
  )
}

const styles = StyleSheet.create({
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
  }
})