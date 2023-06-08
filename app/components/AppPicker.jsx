import { StyleSheet, View, TouchableWithoutFeedback, Modal, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AppText from './AppText'
import colors from '../config/colors'
import { MaterialIcons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppButton from './AppButton'
import AppScreen from './AppScreen'


const Category = [
  {
    id: 1,
    label: 'Furniture',
  },
  {
    id: 2,
    label: 'Clothing',
  },
  {
    id: 3,
    label: 'Gadget',
  }
]

export default function AppPicker({ name, category }) {

  const [modalVisible, setModalVisible] = useState(false)
  const [modalCategory, setModalCategory] = useState('')

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.input}>
          <MaterialIcons name={name} size={30} color={colors.secondary} />
          <AppText style={styles.select}>{modalCategory ? modalCategory : category}</AppText>
          <MaterialCommunityIcons name="chevron-down-circle-outline" size={24} color={colors.secondary} />
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType="slide"
        visible={modalVisible}>
        <AppScreen style={styles.modal}>
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View style={styles.close}>
              <MaterialCommunityIcons name="close-circle-outline" size={30} color={colors.secondary} />
              <AppText style={styles.text}>close</AppText>
            </View>
          </TouchableWithoutFeedback>
          <View>
            <FlatList data={Category}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity onPress={() => {
                    setModalCategory(item.label);
                    setModalVisible(false)
                  }}>
                    <AppText style={styles.choice}>{item.label}</AppText>
                  </TouchableOpacity>)
              }}
            />
          </View>
        </AppScreen>
      </Modal>
    </>
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
    backgroundColor: colors.white
  },
  select: {
    flex: 1,
    fontSize: 17,
    fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'Avenir',
    fontWeight: '700',
    color: colors.primary,
  },
  close: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    columnGap: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.secondary
  },
  choice: {
    padding: 10,
    fontSize: 17,
    color: colors.secondary,
  }
})