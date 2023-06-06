import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ImageScreen from './app/screens/ImageScreen';
import AppButton from './app/components/AppButton';
import AppText from './app/components/AppText';
import AppCard from './app/components/AppCard';
import colors from './app/config/colors';


export default function App() {
  return (
    <ScrollView style={styles.container}>
      <AppCard />
      <AppCard />
      <AppCard />
      <AppCard />
      <AppCard />
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: colors.background,
  }
});
