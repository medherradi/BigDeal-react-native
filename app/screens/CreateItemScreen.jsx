import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import AppScreen from '../components/AppScreen'
import * as yup from 'yup'
import AppFormik from '../components/AppFormik'
import AppInputForm from '../components/AppInputForm'
import AppSubmitForm from '../components/AppSubmitForm'
import AppFormPicker from '../components/AppFormPicker'
import AppImagePicker from '../components/AppImagePicker'

const validationSchema = yup.object().shape({
  title: yup.string().required().min(6).label('Title'),
  price: yup.number().required().min(100).max(25000).label('Price'),
  description: yup.string().required().min(20).max(300).label('Description'),
  category: yup.object().required().label('Category'),
  images: yup.array().min(5, 'please select at least 5 images'),
})

const Category = [
  {
    id: 1,
    label: 'Fitness',
    icon: 'fitness-center',
  },
  {
    id: 2,
    label: 'Sport',
    icon: 'sports-soccer',
  },
  {
    id: 3,
    label: 'House',
    icon: 'house',
  },
]

export default function CreateItemScreen() {

  return (
    <AppScreen>
      <ScrollView>
        <AppScreen style={styles.create}>

          <AppFormik
            initialValues={{ title: '', price: '', description: '', category: null, images: [] }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
          >
            <AppImagePicker field='images' />

            <AppInputForm
              name='subtitles'
              placeholder='Enter title'
              field='title'
            />
            <AppFormPicker
              items={Category}
              field='category'
              placeholder='Category'
            />
            <AppInputForm
              keyboardType='numeric'
              name='monetization-on'
              placeholder='Enter price'
              field='price'
            />
            <AppInputForm
              multiline={true}
              maxLength={300}
              name='description'
              placeholder='Enter description'
              field='description'
              numberOfLines={4}
            />
            <AppSubmitForm text='create' background='secondary' />
          </AppFormik>

        </AppScreen>
      </ScrollView>
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  create: {
    paddingTop: 30,
    alignItems: 'center',
    padding: 10,
    rowGap: 20
  },
})