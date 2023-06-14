import { StyleSheet, View, TouchableWithoutFeedback, Modal, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AppText from './AppText'
import colors from '../config/colors'
import { MaterialIcons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppScreen from './AppScreen'
import AppItemPicker from './AppItemPicker'




export default function AppPicker({ items, onSelectItem, selectedItem, placeholder }) {
  const [modalVisible, setModalVisible] = useState(false)


  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.input}>
          <MaterialIcons name='apps' size={30} color={colors.secondary} />
          {selectedItem ? <AppText style={styles.select}>{selectedItem.label}</AppText>
            : <AppText style={styles.placeholder}>{placeholder}</AppText>}
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
          <View style={styles.grid}>
            {items.map((item) => {
              return (<AppItemPicker key={item.id} label={item}
                onPress={() => {
                  onSelectItem(item);
                  setModalVisible(false)
                }}
              />)
            })}
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
  placeholder: {
    flex: 1,
    fontSize: 17,
    fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'Avenir',
    fontWeight: '700',
    color: colors.layer,
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
  grid: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-around',
    padding: 15,
    flexWrap: 'wrap',
    rowGap: 20,
  },
})