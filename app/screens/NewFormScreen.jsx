import { StyleSheet } from 'react-native'
import React from 'react'
import AppScreen from '../components/AppScreen';
import AppNewTextInput from '../components/AppNewTextInput';
import { useForm, Controller } from "react-hook-form";
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import colors from '../config/colors';
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import AppErrors from '../components/AppErrors';



const validationSchema = z.object({
  title: z.string()
    .min(6, { message: "Must be 6 or more characters long" })
    .max(20, { message: "Must be 20 or fewer characters long" }),
  price: z.number()
    .positive()
    .min(100, { message: "Must be bigger than 100" })
    .max(25000, { message: "Must be less than 25000" }),
  description: z.string()
    .min(20, { message: "Must be 20 or more characters long" })
    .max(300, { message: "Must be 300 or fewer characters long" }),
})


export default function NewFormScreen() {

  const { control, handleSubmit, formState: { errors, touchedFields } } = useForm({
    defaultValues: {
      title: '',
      price: '',
      description: '',
    },
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = data => console.log(data);

  return (
    <AppScreen style={styles.create}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <AppNewTextInput
            name='subtitles'
            placeholder='Enter title'
            onChangeText={onChange}
            onBlur={onBlur}
            value={value} />
        )}
        name="title"
      />
      <AppErrors touched={touchedFields.title} error={errors.title?.message} />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <AppNewTextInput
            keyboardType='numeric'
            name='monetization-on'
            placeholder='Enter price'
            onChangeText={onChange}
            onBlur={onBlur}
            value={value} />
        )}
        name="price"
      />
      <AppErrors touched={touchedFields.price} error={errors.price?.message} />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <AppNewTextInput
            multiline={true}
            maxLength={300}
            name='description'
            placeholder='Enter description'
            numberOfLines={4}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value} />
        )}
        name="description"
      />
      <AppErrors touched={touchedFields.description} error={errors.description?.message} />

      <AppButton text='create' onPress={handleSubmit(onSubmit)} />
    </AppScreen>
  )
}


const styles = StyleSheet.create({
  create: {
    paddingTop: 50,
    alignItems: 'center',
    padding: 10,
    rowGap: 20
  }
});
